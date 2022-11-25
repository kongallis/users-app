import { useState, useEffect } from "react";
import Card from "./components/Card"

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const result = fetch('https://random-data-api.com/api/v2/users?size=5')
        .then(response => response.json())
        .then(data => setUsers(data))
        .then(console.log(users))
    }

    getUsers();
  }, []);

  return (
    <ul className="users-list">
      {
        users.map(user => <li key={user.id}><Card user={user} /></li>)
      }
    </ul>
  )
}

export default App