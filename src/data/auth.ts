import { waitAndCallback, waitAndResolve } from "@/utils/fake-fetch"

export type AuthError = {
  message: string
  code?: string
}

export async function login(
  username: string,
  password: string,
): Promise<AuthError | void> {
  if (!username || !password) {
    return await waitAndResolve({ message: "Failed to login" })
  }

  await waitAndCallback(() => {
    console.log("login", username, password)
  })
}
