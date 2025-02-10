"use server"

import React, { useRef } from "react"

import { AuthError, login } from "@/data/auth"

import { toast } from "@/hooks/use-toast.ts"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export const LoginForm: React.FC = () => {
  const [error, action, isPending] = React.useActionState(formAction, null, "/")
  const ref = useRef<HTMLFormElement | null>(null)

  return (
    <form
      ref={ref}
      action={action}
      className="min-w-80 space-y-5 rounded-md p-4"
    >
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Enter user name"
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>

      <div className={"space-y-4"}>
        <p className="text-sm text-destructive">{error?.message}</p>
        <Button
          type="submit"
          isLoading={isPending}
          className="w-full"
          formAction={action}
        >
          Login
        </Button>

        {/*<ResetFormButton formref={ref} className="w-full">*/}
        {/*  Reset Form*/}
        {/*</ResetFormButton>*/}
      </div>
    </form>
  )
}

async function formAction(_: AuthError | null, formData: FormData) {
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
