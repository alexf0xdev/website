import { SKILLS } from '@/lib/constants'
import clsx from 'clsx'
import Image from 'next/image'

const Skills = () => {
  return (
    <ul className={clsx('flex justify-between gap-5 mt-10')}>
      {SKILLS.map((skill, index) => (
        <li key={index}>
          <Image src={skill.imageUrl} width={50} height={50} alt={skill.name} />
        </li>
      ))}
    </ul>
  )
}

export default Skills
