import Button from './Button'
import Icon from './Icon'
import Badge from './Badge'

const Details = ({ user }) => {
  return (
    <div className="details">
      <div className='details__headline'>
        <h2 className="details__title">
          {user.first_name} {user.last_name}
        </h2>
        <Badge text="New" />
      </div>

      <hr />

      <p className="details__email">
        <Icon
          path={new URL('../images/email.svg', import.meta.url)}
          className="icon"
          alt=""
        />
        {user.email}
      </p>
      <p className="details__location">
        <Icon path={new URL('../images/location.svg', import.meta.url)}
          className="icon"
        />
        {`${user.address.city}, ${user.address.country}`}
      </p>
      <p className="details__birthday">
        <Icon path={new URL('../images/calendar.svg', import.meta.url)}
          className="icon"
          alt=""
        />
        {user.date_of_birth}
      </p>
      <div className="details__button-wrapper">
        <Button
          text="Contact"
          className="btn"
          alt=""
        />
      </div>
    </div>)
}

export default Details