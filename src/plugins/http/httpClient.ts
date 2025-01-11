import axios from 'axios'

import { handleResponseErrorCode } from '@/plugins/http/interceptors'
import { USER_AUTH_STORAGE, DEVICE_ID_STORAGE } from '@/plugins/constants'
import auth from '@/plugins/auth/auth'
import createStorage from '@/utils/storage'

const apiDomain = import.meta.env.VITE_API_DOMAIN

class HttpClient {
  private static _instance: HttpClient | null = null
  private _ua_storage = createStorage(USER_AUTH_STORAGE)
  private _di_storage = createStorage(DEVICE_ID_STORAGE)

  private constructor() {}

  static getInstance(): HttpClient {
    if (this._instance === null) {
      this._instance = new HttpClient()
      // 直接初始化，确保引用即可用
      this._instance.init()
    }
    return this._instance
  }

  private _httpClient: any = axios.create({
    baseURL: apiDomain,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  })

  init() {
    this.addRequestInterceptor((config: any) => {
      // 每次拦截器主动去获取最新的token和device_id，保持更新
      const storage = this._ua_storage.refreshItem()
      const device_id = this._di_storage.refreshItem()

      if (storage?.tk) {
        config.headers['Authorization'] = `Bearer ${storage.tk}`
      }
      if (device_id) {
        config.headers['X-Device-Id'] = device_id
      }
      return config
    })

    this.addResponseInterceptor(
      (response) => {
        return handleResponseErrorCode(response.data)
      },
      (error) => error
    )
  }

  addRequestInterceptor(factory: (config: any) => any) {
    this._httpClient.interceptors.request.use(factory)
  }

  addResponseInterceptor(
    onSuccess: (response: any) => any,
    onError: (error: any) => any
  ) {
    this._httpClient.interceptors.response.use(onSuccess, onError)
  }

  addErrorInterceptor(onError: (error: any) => any) {
    this._httpClient.interceptors.response.use((res: any) => res, onError)
  }

  async get(path: string, options: any = {}) {
    return auth.init().then(() => {
      return this._httpClient.get(path, options)
    })
  }

  async post(path: string, data: any = {}, options: any = {}) {
    if (
      path === 'v1/auth/register' ||
      path === 'v1/auth/refresh' ||
      path === 'v1/user/me'
    ) {
      return this._httpClient.post(path, data, options)
    } else {
      return auth.init().then(() => {
        return this._httpClient.post(path, data, options)
      })
    }
  }

  async put(path: string, data: any = {}, options: any = {}) {
    return auth.init().then(() => {
      return this._httpClient.put(path, data, options)
    })
  }

  async delete(path: string, options: any = {}) {
    return auth.init().then(() => {
      return this._httpClient.delete(path, options)
    })
  }

  async patch(path: string, data: any = {}, options: any = {}) {
    return auth.init().then(() => {
      return this._httpClient.patch(path, data, options)
    })
  }
}

export default HttpClient.getInstance()
