import ReactDOM from 'react-dom/client'
import httpClient from '../http/httpClient'

import PromiseManager from '@/utils/promiseManager'
import AppError, { AppErrorCode } from '../http/appError'

import {
  USER_AUTH_STORAGE,
} from '@/plugins/constants'

import createEventListener from '@/utils/createEventListener'
import createStorage, { cleanTokenCookie, setTokenCookie } from '@/utils/storage'

import { AuthModel, UserInfoModel } from './AuthModel'

const ListenerType = {
  user: 'user',
}

interface LoginPanelProps {
  onResolveLogin: () => void
  onRejectLogin: (err: any) => void
}

class Auth {
  private static _instance: Auth | null = null
  private _listener = createEventListener()
  private _ua_storage = createStorage(USER_AUTH_STORAGE)

  private _initManager: PromiseManager<void> = new PromiseManager()
  private userInfo: UserInfoModel | null = null

  private constructor() { }

  static getInstance(): Auth {
    if (this._instance === null) {
      this._instance = new Auth()
    }
    return this._instance
  }

  async init(): Promise<void> {
    return this._initManager.executeOnceRequest(async () => {
    })
  }

  /* ---------------------------------- */
  saveUserInfo(userInfo: UserInfoModel) {
    this.userInfo = userInfo
    this._notify(ListenerType.user, userInfo)
  }

  getUserInfoCache(): UserInfoModel {
    return this.userInfo || new UserInfoModel({})
  }

  clearUserInfo() {
    this.userInfo = null
  }
  /* ---------------------------------- */

  saveAuth(auth: AuthModel) {
    this._ua_storage.setItem({
      ui: auth.user_id,
      tk: auth.access_token,
      rk: auth.refresh_token,
      il: auth.is_login,
    })
    setTokenCookie(auth.access_token)
  }

  getAuth(): AuthModel | null {
    const storage = this._ua_storage.refreshItem()
    if (!storage) {
      return null
    }

    return new AuthModel({
      user_id: storage.ui,
      access_token: storage.tk,
      refresh_token: storage.rk,
      is_login: storage.il,
    })
  }

  hasLogin(): boolean {
    const auth = this.getAuth()
    return auth?.is_login || false
  }

  clearAuth(): void {
    this._ua_storage.clearItem()
    cleanTokenCookie()
  }

  /* ---------------------------------- */

  getUserId(): string | null {
    const storage = this._ua_storage.getItem()
    if (!storage || !storage.ui) {
      return null
    }

    return storage.ui
  }

  /* ---------------------------------- */

  getAccessToken(): string | undefined {
    const auth = this.getAuth()
    return auth ? auth.access_token : undefined
  }

  /* -------------api交互--------------------- */

  async register(): Promise<AuthModel> {
    const response: any = await httpClient.post('v1/auth/register')
    const auth = AuthModel.createFromResponse(response)
    this.saveAuth(auth)
    return auth
  }

  async refreshToken(): Promise<AuthModel | null> {
    const auth = this.getAuth()
    if (!auth) {
      return null
    }

    const response = await httpClient
      .post('v1/auth/refresh', {
        refresh_token: auth.refresh_token,
      })
      .catch((error: AppError | any) => {
        if (error.code === AppErrorCode.RESP_REFRESH_TOKEN_EXPIRED) {
          return httpClient.post('v1/auth/register')
        }
      })
    const refreshAuth = AuthModel.createFromResponse(response)

    this.saveAuth(refreshAuth)
    return auth
  }

  async getUserInfo(): Promise<UserInfoModel> {
    return await httpClient.post('v1/user/me').then((response: any) => {
      const userInfo = UserInfoModel.createFromResponse(response)
      this.saveUserInfo(userInfo)
      return userInfo
    })
  }

  /* ------------login----------------- */

  renderLoginPanel = (
    LoginPanelComponent: React.ComponentType<LoginPanelProps>,
    onReject?: () => void,
  ) => {
    return new Promise((resolve, reject) => {
      const rootDiv = document.createElement('div')
      document.body.appendChild(rootDiv)

      const root = ReactDOM.createRoot(rootDiv)

      const unmountComponent = () => {
        if (rootDiv) {
          root.unmount()
          rootDiv.parentNode?.removeChild(rootDiv)
        }
      }

      const handleResolveLogin = () => {
        unmountComponent()
        resolve(true)
      }

      const handleRejectLogin = (err: any) => {
        unmountComponent()
        reject(err)
        onReject?.()
      }

      root.render(
        <LoginPanelComponent
          onResolveLogin={handleResolveLogin}
          onRejectLogin={handleRejectLogin}
        />
      )
    })
  }

  login(LoginPanelComponent: React.ComponentType<LoginPanelProps>) {
    return this.renderLoginPanel(LoginPanelComponent)
  }

  async logout(): Promise<void> {
    await httpClient.post('v1/auth/logout')
    return this.clearAuth()
  }

  /* ---------------------------------- */

  observeUser(listener: any): void {
    this._listener.subscribe(ListenerType.user, listener)
  }

  unobserveUser(listener: any): void {
    this._listener.unsubscribe(ListenerType.user, listener)
  }

  private _notify(key: string, ...args: any[]) {
    this._listener.notify(key, ...args)
  }
}

export default Auth.getInstance()
