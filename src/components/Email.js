import Icon from "./Icon"

const Email = ({ email }) => {
  return (
    <p className="details__email">
      <a href={`mailto:${email}`}>
        <Icon
          path={new URL('../images/email.svg', import.meta.url)}
          className="icon"
          alt=""
        />
        {email}
      </a>
    </p>
  )
}

export default Email