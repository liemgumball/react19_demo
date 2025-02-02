import { User } from "@/data/user"
import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { UserForm } from "./user-form"

namespace UserCard {
  export type Props = User
}

export const UserCard: React.FC<UserCard.Props> = (props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card itemID={props.id} className="cursor-pointer">
          <CardHeader>
            <CardTitle>{props.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{props.age}</CardDescription>
          </CardContent>
          <CardFooter>{props.team}</CardFooter>
        </Card>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>User form</DialogTitle>
        </DialogHeader>
        <UserForm {...props} />
      </DialogContent>
    </Dialog>
  )
}
