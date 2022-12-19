type User = {
  id: number,
  avatar: string,
  first_name: string,
  last_name: string,
  email: string,
  address: { city: string, country: string },
  date_of_birth: string,
  phone_number: string
}

export default User