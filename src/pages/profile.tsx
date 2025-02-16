import { NewProfileForm } from "@/components/new-profile-form.tsx"
import { ProfileForm } from "@/components/profile-form.tsx"
import { Button } from "@/components/ui/button.tsx"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { LightbulbIcon } from "lucide-react"
import { useState } from "react"

const Profile = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="relative my-16 flex items-center justify-center">
      <Card className="mx-auto p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="font-bold">Profile form</CardTitle>
        </CardHeader>
        <CardContent>
          <ProfileForm />
        </CardContent>
      </Card>
      {show && (
        <Card className="mx-auto p-6 shadow-lg">
          <CardHeader>
            <CardTitle className="font-bold">
              Profile form with useActionState
            </CardTitle>
          </CardHeader>
          <CardContent>
            <NewProfileForm />
          </CardContent>
        </Card>
      )}
      <Button
        onClick={() => setShow(!show)}
        className="absolute right-0 top-0"
        size="icon"
        variant="ghost"
      >
        <LightbulbIcon />
      </Button>
    </div>
  )
}

export default Profile
