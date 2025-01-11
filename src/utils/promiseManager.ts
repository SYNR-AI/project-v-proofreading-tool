// 管理异步请求的Promise对象，executeRequest 避免重复请求, executeOnceRequest 表示只请求一次
class PromiseManager<T> {
  private isRequesting: boolean = false
  private isDone: boolean = false
  private promise: Promise<T> | null = null

  async executeRequest(requestFn: () => Promise<T>): Promise<T> {
    if (this.isRequesting) {
      return this.promise!
    } else {
      this.isRequesting = true
      this.promise = requestFn()
      try {
        const result = await this.promise
        return result
      } finally {
        this.isRequesting = false
        this.promise = null
      }
    }
  }

  async executeOnceRequest(requestFn: () => Promise<T>): Promise<T> {
    if (this.isDone) {
      return this.promise!
    } else {
      this.isDone = true
      this.promise = requestFn()
      return await this.promise
    }
  }
}

export default PromiseManager
