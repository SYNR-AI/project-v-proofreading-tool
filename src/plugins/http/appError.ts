export enum AppErrorCode {
  // server error code
  ERR_SYS_INNER_ERROR = 101999, // 系统内部错误
  ERR_SYS_DEVICE_INVALID = 101002, // device invalid

  RESP_REFRESH_TOKEN_EXPIRED = 102001, // refresh token 过期，重新登录
  RESP_ACCESS_TOKEN_EXPIRED = 102002, // 刷新token，token过期
  RESP_ACCESS_DENIED = 102003, // 未正式登陆没有权限

  ERR_CHAT_ITEM_DELETED = 204001, // The item has been deleted
  ERR_CHAT_MUSER_DELETED = 205001, // The muser has been deleted
  ERR_CHAT_CONVERSATION_DISABLED = 205002, // The conversation has been disable
  ERR_FORM_CHECK_FAIL = 206004, // 表单检查失败

  // custom error code
  UNHANDLED_REJECTION = 999997, // 未处理的promise rejection
  UNCAUGHT_ERROR = 999998, // 未捕获的错误
  CUSTOM_ERROR = 999999, // 自定义错误
}

// for display error tips to users
export const AppErrorTips = {
  [AppErrorCode.ERR_SYS_INNER_ERROR]:
    'An error has Occurred, please try again later.',
  [AppErrorCode.ERR_SYS_DEVICE_INVALID]: 'Device invalid.',

  [AppErrorCode.RESP_ACCESS_TOKEN_EXPIRED]: 'Access token expired.',
  [AppErrorCode.RESP_REFRESH_TOKEN_EXPIRED]:
    'Login expired, please log in again.',
  [AppErrorCode.RESP_ACCESS_DENIED]: 'Access denied.',

  [AppErrorCode.ERR_CHAT_ITEM_DELETED]: 'The muser is not visitable.',
  [AppErrorCode.ERR_CHAT_MUSER_DELETED]: 'The muser has been deleted.',
  [AppErrorCode.ERR_CHAT_CONVERSATION_DISABLED]:
    'The conversation has been disable.',
}

class AppError extends Error {
  code: AppErrorCode
  message: string
  stack: string | undefined

  constructor(message: string, code: AppErrorCode = AppErrorCode.CUSTOM_ERROR) {
    super(message)
    this.code = code
    this.message = message

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = new Error(message).stack
    }
  }
}

export default AppError
