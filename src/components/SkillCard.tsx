import Image from 'next/image'
import { FC } from 'react'

interface ISkill {
  name: string
  imageUrl: string
}

const SkillCard: FC<ISkill> = ({ name, imageUrl }) => {
  return (
    <li>
      <Image src={imageUrl} width={50} height={50} alt={name} />
    </li>
  )
}

export default SkillCard
