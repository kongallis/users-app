import Icon from './Icon'

const formatDate = (date) => {
  const [year, month, day] = date.split("-")
  return `${day}/${month}/${year}`
}

const Date = ({ date_of_birth }) => {
  return (
    <p className="details__birthday">
      <Icon path={new URL('../images/calendar.svg', import.meta.url)}
        className="icon"
        alt=""
      />
      {formatDate(date_of_birth)}
    </p>
  )
}

export default Date