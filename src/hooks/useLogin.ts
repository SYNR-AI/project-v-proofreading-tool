import { useLayoutEffect } from 'react'

import { $auth } from '@/plugins'
import LoginPanel from '@/components/common/Login/LoginPanel'

export default function useLogin(onReject?: () => void) {
  const checkLogin = (onLogin?: () => void) => {
    console.log('checkLogin')
    if (!$auth.hasLogin()) {
      $auth.renderLoginPanel(LoginPanel, onReject).then(() => {
        onLogin?.()
      })
    } else {
      return true
    }
  }
  useLayoutEffect(() => {
    checkLogin(() => {
      window.location.reload()
    })
  }, [])
  return checkLogin
}
