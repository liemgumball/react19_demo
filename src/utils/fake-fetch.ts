export function waitAndResolve<Data>(
  data: Data,
  timeout: number = 1000,
): Promise<Data> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), timeout)
  })
}
export function waitAndReject<Data>(
  data: Data,
  timeout: number = 1000,
): Promise<Data> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(data), timeout)
  })
}

export function waitAndCallback<CallBack extends () => unknown>(
  callback: CallBack,
  timeout: number = 1000,
): Promise<unknown> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(callback()), timeout)
  })
}

export async function wait(timeout: number = 1000): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), timeout)
  })
}
