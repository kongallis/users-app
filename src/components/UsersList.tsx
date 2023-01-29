import { useState, useEffect } from "react"
import Card from "./Card"
import User from "../types/User";
import useUsers from "../hooks/useUsers";

const UserList = () => {
  const { status, data, error, isFetching } = useUsers();

  if (status === 'error') {
    return <div className="error">Error: {(error as Error).message}</div>
  } else if (isFetching) {
    return <div className="loading">Loading...</div>
  } else {
    return (
      <ul className="users-list">
        {
          data.map((user: User) => (
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