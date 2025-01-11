import {
  ResponseContext,
  RequestContext,
  FetchParams,
} from '@/api'
import AppError, { AppErrorCode, AppErrorTips } from '@/plugins/http/appError'
import auth from '@/plugins/auth/auth'
import createStorage from '@/utils/storage'
import { DEVICE_ID_STORAGE, USER_AUTH_STORAGE } from '@/plugins/constants'

// 服务端请求和客户端请求共用的错误码处理拦截器
export function handleResponseErrorCode(response: { baseResp: { error_code: number; error_msg: string } }) {
  if (response?.baseResp?.error_code && response?.baseResp?.error_code !== 0) {
    switch (response?.baseResp?.error_code) {
      case AppErrorCode.ERR_SYS_INNER_ERROR:
        throw new AppError(
          AppErrorTips[AppErrorCode.ERR_SYS_INNER_ERROR],
          AppErrorCode.ERR_SYS_INNER_ERROR,
        )
        break
      case AppErrorCode.RESP_ACCESS_DENIED:
        throw new AppError(
          AppErrorTips[AppErrorCode.RESP_ACCESS_DENIED],
          AppErrorCode.RESP_ACCESS_DENIED,
        )
        break
      case AppErrorCode.ERR_SYS_DEVICE_INVALID:
        throw new AppError(
          AppErrorTips[AppErrorCode.ERR_SYS_DEVICE_INVALID],
          AppErrorCode.ERR_SYS_DEVICE_INVALID,
        )
        break
      case AppErrorCode.RESP_ACCESS_TOKEN_EXPIRED:
        throw new AppError(
          AppErrorTips[AppErrorCode.RESP_ACCESS_TOKEN_EXPIRED],
          AppErrorCode.RESP_ACCESS_TOKEN_EXPIRED,
        )
        break
      case AppErrorCode.RESP_REFRESH_TOKEN_EXPIRED:
        throw new AppError(
          AppErrorTips[AppErrorCode.RESP_REFRESH_TOKEN_EXPIRED],
          AppErrorCode.RESP_REFRESH_TOKEN_EXPIRED,
        )
        break
      case AppErrorCode.ERR_CHAT_MUSER_DELETED:
        throw new AppError(
          AppErrorTips[AppErrorCode.ERR_CHAT_MUSER_DELETED],
          AppErrorCode.ERR_CHAT_MUSER_DELETED,
        )
        break
      case AppErrorCode.ERR_CHAT_CONVERSATION_DISABLED:
        throw new AppError(
          AppErrorTips[AppErrorCode.ERR_CHAT_CONVERSATION_DISABLED],
          AppErrorCode.ERR_CHAT_CONVERSATION_DISABLED,
        )
        break

      default:
        console.log(response)
        throw new AppError(
          response?.baseResp?.error_msg || 'Unknown error',
          response?.baseResp?.error_code || AppErrorCode.CUSTOM_ERROR,
        )
        break
    }
  }
  return response
}

// openapi客户端拦截器Post
export async function clientMiddlewarePost(context: ResponseContext) {
  const respClone = context.response.clone()
  const contentType = respClone.headers.get('content-type')
  let result
  if (contentType && contentType.includes('application/json')) {
    result = await respClone.json()
  } else {
    result = await respClone.text()
  }
  handleResponseErrorCode(result)

  return Promise.resolve(context.response)
}

// openapi客户端拦截器Pre
const ua_storage = createStorage(USER_AUTH_STORAGE)

export async function clientMiddlewarePre(
  context: RequestContext,
): Promise<FetchParams | void> {
  await auth.init()
  const storage = ua_storage.refreshItem()

  if (storage?.tk) {
    ;(context.init.headers as Record<string, string>)['Authorization'] =
      `Bearer ${storage.tk}`
  }

  // 返回修改后的 FetchParams
  return Promise.resolve({
    url: context.url,
    init: context.init,
  })
}
