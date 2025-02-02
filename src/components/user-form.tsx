import React from "react"
import { Team } from "@/type"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Label } from "./ui/label"

namespace UserForm {
  export type Props = Partial<User>

  export type State = Partial<Omit<User, "id">> & {
    id?: string
  }
}

export const UserForm: React.FC<UserForm.Props> = ({ id, name, age, team }) => {
  const [data, action] = React.useActionState(formAction, {
    id,
    name,
    age,
    team,
  })

  return (
    <div className="m-4 rounded-md border p-8">
      <form action={action} className="flex flex-col gap-4">
        <Input type="hidden" name="id" value={data.id} />
        <Label htmlFor="name">Name</Label>
        <Input type="text" name="name" id="name" defaultValue={data.name} />
        <Label htmlFor="age">Age</Label>
        <Input type="number" name="age" id="age" defaultValue={data.age} />

        <RadioGroup
          defaultValue={data.team}
          name="team"
          orientation="horizontal"
          className="flex justify-between"
        >
          <Label>Team</Label>
          {Object.values(Team).map((value) => (
            <div key={value} className="flex items-center space-x-2">
              <RadioGroupItem value={value} id={value} />
              <Label htmlFor={value}>{value}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button type="submit">Submit</Button>

        <pre className="overflow-auto">{JSON.stringify(data, null, 2)}</pre>
      </form>
    </div>
  )
}
async function formAction(
  prevState: UserForm.State,
  formData: FormData,
): Promise<UserForm.State> {
  const id = prevState.id
  const name = formData.get("name") as string
  const age = Number(formData.get("age") as string)
  const team = formData.get("team") as unknown as Team

  if (!id) {
    const player = await addUser({ name, age, team })

    if (!player) {
      throw new Error(`Could not add ${name}`)
    }

    return player
  }

  const player = await getUserById(id)

  if (!player) {
    throw new Error(`Player ${id} not found`)
  }

  return player
}
