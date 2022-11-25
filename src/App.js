import { useState, useEffect } from "react";
import Card from "./components/Card"

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const result = await fetch('https://random-data-api.com/api/v2/users?size=25')
        .then(response => response.json())
        .then(data => setUsers(data))
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