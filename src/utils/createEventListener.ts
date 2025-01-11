type EventCallback = (...args: unknown[]) => void

interface EventListener {
  subscribe: (key: string, fn: EventCallback) => void
  unsubscribe: (key: string, fn?: EventCallback) => void
  notify: (key: string, ...args: unknown[]) => void
}

const createEventListener = (): EventListener => {
  const cbs: { [key: string]: EventCallback[] } = {}

  const subscribe = (key: string, fn: EventCallback): void => {
    if (cbs[key]) {
      cbs[key].push(fn)
    } else {
      cbs[key] = [fn]
    }
  }

  const unsubscribe = (key: string, fn?: EventCallback): void => {
    if (!fn) {
      if (cbs[key]) {
        cbs[key].length = 0
      }
    } else {
      const fns = cbs[key]
      if (fns) {
        cbs[key] = fns.filter((i) => i !== fn)
      }
    }
  }

  const notify = (key: string, ...args: unknown[]): void => {
    const fns = cbs[key]
    if (fns) {
      fns.forEach((fn) => fn(...args))
    }
  }

  return {
    subscribe,
    unsubscribe,
    notify,
  }
}

export default createEventListener
