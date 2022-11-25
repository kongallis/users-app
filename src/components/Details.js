import Button from './Button'
import Icon from './Icon'

const Details = () => {
  return (
    <div className="details">
      <h2 className="details__title">Jessica Award</h2>

      <hr />

      <p className="details__email">
        <Icon
          path={new URL('../images/email.svg', import.meta.url)}
          className="icon"
          alt=""
        />
        jessaw56@gmail.com
      </p>
      <p className="details__location">
        <Icon path={new URL('../images/location.svg', import.meta.url)}
          className="icon"
        />
        Paris, France
      </p>
      <p className="details__birthday">
        <Icon path={new URL('../images/calendar.svg', import.meta.url)}
          className="icon"
          alt=""
        />
        12/01/2002
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