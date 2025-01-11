import {
  Configuration,
  ErrorContext,
  FetchParams,
  Middleware,
  RequestContext,
  ResponseContext,
} from '@/api'

import {
  clientMiddlewarePost,
  clientMiddlewarePre,
} from '@/plugins/http/interceptors'
function createMiddleware(
  pre?: (context: RequestContext) => Promise<FetchParams | void>,
  post?: (context: ResponseContext) => Promise<Response | void>,
  onError?: (context: ErrorContext) => Promise<Response | void>,
) {
  return { pre, post, onError } as Middleware
}
const apiDomain = import.meta.env.VITE_API_DOMAIN

//client config
const clientMiddleware = createMiddleware(
  clientMiddlewarePre,
  clientMiddlewarePost,
  (context: ErrorContext) => {
    throw new Error(`An error occurred: ${context.error}`)
  },
)

const apiClient = new Configuration({
  basePath: apiDomain,
  headers: {
    'Content-Type': 'application/json',
  },
  middleware: [clientMiddleware],
})

export default apiClient