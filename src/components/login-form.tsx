import React from "react"

import { AuthError, login } from "@/data/auth"

import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useLog } from "@/hooks/use-log"

export const LoginForm: React.FC = () => {
  const { log } = useLog()

  const [error, action, isPending] = React.useActionState(
    async (...args: Parameters<typeof formAction>) => {
      const result = await formAction(...args)

      log({ data: result })

      return result
    },
    null,
    "/",
  )

  return (
    <form action={action} className="min-w-80 space-y-5 rounded-md p-4">
      <div>
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" name="username" />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" />
      </div>

      <p className="text-destructive">{error?.message}</p>
      <Button type="submit" disabled={isPending}>
        Login
      </Button>
    </form>
  )
}

async function formAction(_: AuthError | null, formData: FormData) {
  const username = formData.get("username") as string
  const password = formData.get("password") as string

  const error = await login(username, password)

  if (error) {
    return error
  }

  return null
}
