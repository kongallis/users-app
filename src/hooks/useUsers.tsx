import {
  useInfiniteQuery,
} from "@tanstack/react-query";
import User from "../types/User";

export default function useUsers() {
  return useInfiniteQuery({
    queryKey: ["users"],
    queryFn: async ({ pageParam = 25 }) => {
      const data = await fetch(`https://random-data-api.com/api/v2/users?size=${pageParam}`)
        .then(response => response.json())
        .then(data => {
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

          return dto
        })

      return data
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 15
      return nextPage
    }
  });
}