import {
    useQuery,
  } from "@tanstack/react-query";
  import User from "../types/User";

export default function useUsers() {
    return useQuery({
      queryKey: ["posts"],
      queryFn: async () => {
        const data = await fetch('https://random-data-api.com/api/v2/users?size=25')
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
    });
  }