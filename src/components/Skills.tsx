import { cn } from '@/lib/utils'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <ul className={cn('flex justify-between gap-5 mt-10')}>
      {[
        {
          name: 'JavaScript',
          imageUrl: '/javascript.svg',
        },
        {
          name: 'TypeScript',
          imageUrl: '/typescript.svg',
        },
        {
          name: 'Nest.js',
          imageUrl: '/nestjs.svg',
        },
        {
          name: 'HTML',
          imageUrl: '/html5.svg',
        },
        {
          name: 'React',
          imageUrl: '/react.svg',
        },
        {
          name: 'Vue',
          imageUrl: '/vue.svg',
        },
        {
          name: 'CSS',
          imageUrl: '/css3.svg',
        },
        {
          name: 'Tailwind',
          imageUrl: '/tailwind.svg',
        },
      ].map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </ul>
  )
}

export default Skills
