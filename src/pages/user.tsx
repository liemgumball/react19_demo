import { createContext, useContext } from "react"

const UserContext = createContext<IUser | null>(null)

const User = () => {
  return (
    // context as provider
    <UserContext value={{ id: "1", name: "John Doe" }}>
      <UserDetails />
    </UserContext>
  )
}

const UserDetails = () => {
  const user = useContext(UserContext)

  return (
    <div>
      <p>{user?.name}</p>
    </div>
  )
}

export default User

export interface IUser {
  id: string
  name: string
}
