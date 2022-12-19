import Icon from "./Icon"
import Svg from "../images"

type EmailProps = {
  email: string
}

const Email = ({ email }: EmailProps) => {
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