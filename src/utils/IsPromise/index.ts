type IsPromiseProps = {
  [key: string]: any
}

export const isPromise = (obj: IsPromiseProps) => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
