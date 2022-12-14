const Icon = ({
  path,
  alt,
  className
}) => {
  return (
    <img
      src={path}
      alt={alt}
      className={className}
    />
  )
}

export default Icon