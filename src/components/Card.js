import Details from "./Details"

const Card = ({ user }) => {
  return (
    <article className="card">
      <img
        src={user.avatar}
        alt=""
        width=""
        height=""
        loading="lazy"
      />
      <Details user={user} />
    </article>
  )
}

export default Card