import { useEffect } from "react"
import Card from "./Card"
import User from "../types/User";
import useUsers from "../hooks/useUsers";

const UserList = () => {
  const { data, error, isFetching, isSuccess, fetchNextPage, isFetchingNextPage, hasNextPage } = useUsers()

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e) => {
      const {scrollHeight, scrollTop, clientHeight} = e.target.scrollingElement;
      if(!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true
        if(hasNextPage) await fetchNextPage()
        fetching = false
      }
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [fetchNextPage, hasNextPage])


  return (
    <>
      <ul className="users-list" >
        {isSuccess && (
          data.pages.map((page) => (
            page.map((user: User) => (
              <li key={user.id}>
                <Card user={user} />
              </li>
            ))
          ))
        )
        }
      </ul>

      <div>
        {isFetching && !isFetchingNextPage
          ? 'Background Updating...'
          : null}
      </div>
    </>
  )

}

export default UserList