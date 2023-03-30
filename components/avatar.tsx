type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-7 h-7 rounded-full mr-2" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
