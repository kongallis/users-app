import Details from "./Details"

const Card = ({ text, className }) => {
  return (
    <article className="card">
      <img
        src="https://robohash.org/estinea.png?size=300x300&set=set1"
        alt=""
        width=""
        height=""
        loading="lazy"
      />
      <Details />
    </article>
  )
}

export default Card