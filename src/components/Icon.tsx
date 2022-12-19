type IconProps = {
  path: string,
  alt: string,
  className: string
}

const Icon = ({
  path,
  alt,
  className
}: IconProps) => {
  return (
    <img
      src={path}
      alt={alt}
      className={className}
    />
  )
}

export default Icon