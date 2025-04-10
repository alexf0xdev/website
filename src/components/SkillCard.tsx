import Image from 'next/image'

interface ISkill {
  name: string
  imageUrl: string
}

const SkillCard = ({ skill }: { skill: ISkill }) => {
  return (
    <li>
      <Image src={skill.imageUrl} width={50} height={50} alt={skill.name} />
    </li>
  )
}

export default SkillCard
