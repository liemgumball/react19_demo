import { LoginForm } from "@/components/login-form"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export default function Login() {
  return (
    <Card className="mx-auto max-w-96">
      <CardHeader>
        <CardTitle className="font-bold uppercase">Login form</CardTitle>
      </CardHeader>
      <LoginForm />
    </Card>
  )
}
