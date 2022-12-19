import Icon from './Icon'
import Svg from "../images"

type DateProps = {
  date_of_birth: string
}

const formatDate = (date: string) => {
  const [year, month, day] = date.split("-")
  return `${day}/${month}/${year}`
}

const Date = ({ date_of_birth }: DateProps) => {
  return (
    <p className="details__birthday">
      <Icon path={Svg.Calendar}
        className="icon"
        alt=""
      />
      {formatDate(date_of_birth)}
    </p>
  )
}

export default Date