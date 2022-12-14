import { useState, useEffect } from "react"
import Card from "./Card"

const UserList = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      const result = await fetch('https://random-data-api.com/api/v2/users?size=25')
        .then(response => response.json())
        .then(
          data => {
            setIsLoaded(true);
            setUsers(data)
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
    return <div className="error">Error: {error.message}</div>
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