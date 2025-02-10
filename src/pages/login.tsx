import { LoginForm } from "@/components/login-form"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Suspense } from "react"

export default function Login() {
  return (
    <div className={"my-16 flex items-center justify-center"}>
      <Card className="mx-auto p-12 shadow-lg">
        <CardHeader>
          <CardTitle className="font-bold uppercase">Login form</CardTitle>
        </CardHeader>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </Card>
    </div>
  )
}
