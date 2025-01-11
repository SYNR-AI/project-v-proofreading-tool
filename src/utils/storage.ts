/* eslint-disable @typescript-eslint/no-unused-vars */
export const TOKEN_COOKIE = 'tk'
export const COOKIE_EXPIRE_DAYS = 90

// Utility to check if localStorage is supported
const isLocalStorageSupported: boolean = (() => {
  const mod = 'test_local_storage'

  try {
    localStorage.setItem(mod, mod)
    localStorage.removeItem(mod)
    return true
  } catch (e) {
    return false
  }
})()

const STRATEGY = {
  LOCAL: 'LOCAL',
  SESSION: 'SESSION',
  MEMORY: 'MEMORY',
} as const

type Strategy = keyof typeof STRATEGY

const setToStorage = (storage: Storage, key: string, value: any): void => {
  if (isLocalStorageSupported) {
    storage.setItem(key, JSON.stringify(value))
  }
}

const getFromStorage = (storage: Storage, key: string): any | undefined => {
  if (isLocalStorageSupported) {
    const result = storage.getItem(key)

    if (!result) {
      return undefined
    }

    try {
      return JSON.parse(result)
    } catch (ex) {
      return undefined
    }
  }

  return undefined
}

const removeFromStorage = (storage: Storage, key: string): void => {
  storage.removeItem(key)
}

/* --------------------------------- */

const isBrowser = typeof window !== 'undefined'

const createStorageMethods = (method: Strategy) => {
  if (isBrowser && method === STRATEGY.LOCAL) {
    return {
      get: (...args: [string]) => getFromStorage(localStorage, ...args),
      set: (...args: [string, any]) => setToStorage(localStorage, ...args),
      remove: (...args: [string]) => removeFromStorage(localStorage, ...args),
    }
  } else if (isBrowser && method === STRATEGY.SESSION) {
    return {
      get: (...args: [string]) => getFromStorage(sessionStorage, ...args),
      set: (...args: [string, any]) => setToStorage(sessionStorage, ...args),
      remove: (...args: [string]) => removeFromStorage(sessionStorage, ...args),
    }
  } else {
    // default have memory cache
    return {
      get: () => {},
      set: () => {},
      remove: () => {},
    }
  }
}

/* --------------------------------- */

interface StorageOptions {
  expire?: number
  strategy?: Strategy
}

const createStorage = (
  key: string,
  { expire, strategy = STRATEGY.LOCAL }: StorageOptions = {},
) => {
  let cache: any = undefined

  if (!key) {
    throw new Error('must provide key to create storage')
  }

  const expireKey = `${key}_expire`
  const methods = createStorageMethods(strategy)

  const clearItem = (): any => {
    cache = undefined
    methods.remove(key)
    if (expire) {
      methods.remove(expireKey)
    }
    return cache
  }

  const getItem = (defaultValue?: any): any => {
    if (cache === undefined) {
      cache = methods.get(key)
    }

    if (cache !== undefined && expire) {
      const expireDate = methods.get(expireKey) as number
      if (expireDate && !isNaN(expireDate) && Date.now() > expireDate) {
        clearItem()
      }
    }

    if (cache === undefined && defaultValue !== undefined) {
      cache = setItem(defaultValue)
    }

    return cache
  }

  const refreshItem = (): any => {
    cache = undefined
    return getItem()
  }

  const setItem = (value: any): any => {
    methods.set(key, value)
    if (expire) {
      methods.set(expireKey, Date.now() + expire)
    }

    cache = value

    return cache
  }

  const getItemAsync = (fallback?: any): Promise<any> => {
    let result = getItem()

    if (result === undefined) {
      if (typeof fallback === 'function') {
        result = fallback()
      } else if (fallback !== undefined) {
        result = fallback
      }

      return Promise.resolve(result).then(
        (value) => {
          setItem(value)
          return value
        },
        (err) => {
          clearItem()
          throw err
        },
      )
    } else {
      return Promise.resolve(result)
    }
  }

  return {
    getItem,
    setItem,
    getItemAsync,
    clearItem,
    refreshItem,
  }
}

export function setTokenCookie(
  token: string,
  expirationDays: number = COOKIE_EXPIRE_DAYS,
) {
  // 计算 cookie 的过期时间
  const date = new Date()
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000)
  const expires = `expires=${date.toUTCString()}`

  // 设置 cookie
  document.cookie = `${TOKEN_COOKIE}=${token}; ${expires}; path=/`
}

export function cleanTokenCookie() {
  document.cookie = `${TOKEN_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
}

export default createStorage
