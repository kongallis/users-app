import Icon from "./Icon"
import Svg from "../images"

const Email = ({ email }) => {
  return (
    <p className="details__email">
      <a href={`mailto:${email}`}>
        <Icon
          path={Svg.Email}
          className="icon"
          alt=""
        />
        {email}
      </a>
    </p>
  )
}

export default Email