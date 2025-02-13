"use server"
import { toast } from "@/hooks/use-toast.ts"
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

  if (!username || !password) {
    return Promise.resolve({ message: "Failed to login" })
  }

  return Promise.resolve(null)
}

export async function formAction(_: AuthError | null, formData: FormData) {
  if (!formData) {
    return { message: "No form data!" }
  }

  const username = formData.get("username") as string
  const password = formData.get("password") as string

  const error = await login(username, password)

  if (error) {
    toast({
      title: "Fail",
      description: error.message,
      variant: "destructive",
    })

    return error
  }

  toast({
    title: "Success",
    description: JSON.stringify({ username, password }),
  })

  return null
}
