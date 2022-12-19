import Button from './Button'
import Icon from './Icon'
import Badge from './Badge'
import Email from './Email'
import Date from './Date'
import Svg from "../images"
import User from "../types/User"

const Details = ({ user }: { user: User }) => {
  return (
    <div className="details">
      <div className='details__headline'>
        <h2 className="details__title">
          {user.first_name} {user.last_name}
        </h2>
        <Badge text="New" />
      </div>

      <hr />

      <Email email={user.email} />
      <p className="details__location">
        <Icon path={Svg.Location}
          className="icon"
          alt=""
        />
        {`${user.address.city}, ${user.address.country}`}
      </p>
      <Date date_of_birth={user.date_of_birth} />
      <div className="details__button-wrapper">
        <a href={`tel:${user.phone_number}`}>
          <Button
            text="Contact"
            className="btn"
          />
        </a>
      </div>
    </div>)
}

export default Details