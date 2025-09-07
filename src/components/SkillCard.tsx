import Image from 'next/image'

interface ISkill {
  name: string
  imageUrl: string
}

const SkillCard: React.FC<ISkill> = ({ name, imageUrl }) => {
  return (
    <li>
      <Image src={imageUrl} width={50} height={50} alt={name} />
    </li>
  )
}

export default SkillCard
