import { wait } from "@/utils/fake-fetch"

export type AuthError = {
  message: string
  code?: string
}

export async function login(
  username: string,
  password: string,
): Promise<AuthError | null> {
  await wait(1000)

  console.log("Logging in with", { username, password })

  if (!username || !password) {
    return Promise.resolve({ message: "Failed to login" })
  }

  return Promise.resolve(null)
}
