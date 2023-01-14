import { useState, useEffect } from "react"
import Card from "./Card"
import User from "../types/User";

const UserList = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function getUsers() {
      const result = await fetch('https://random-data-api.com/api/v2/users?size=25')
        .then(response => response.json())
        .then(
          data => {
            setIsLoaded(true);

            const dto = data.map((user: User) => ({
              id: user.id,
              avatar: user.avatar,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              address: { city: user.address.city, country: user.address.country },
              date_of_birth: user.date_of_birth,
              phone_number: user.phone_number
            }))

            setUsers(dto)
          },
          error => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }

    getUsers()
  }, [])

  if (error) {
    return <div className="error">Error: {(error as Error).message}</div>
  } else if (!isLoaded) {
    return <div className="loading">Loading...</div>
  } else {
    return (
      <ul className="users-list">
        {
          users.map(user => (
            <li key={user.id}>
              <Card user={user} />
            </li>
          ))
        }
      </ul>
    )
  }

}

export default UserList