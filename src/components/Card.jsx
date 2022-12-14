import Details from "./Details"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'

const Card = ({ user }) => {
  return (
    <article className="card">
      <LazyLoadImage
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name} avatar`}
        width={208}
        height={208}
        effect="blur"
      />
      <Details user={user} />
    </article>
  )
}

export default Card