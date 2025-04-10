import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { getUserRepos } from '@/lib/github'

const Home = async () => {
  const projects = await getUserRepos('alexf0xdev')

  return (
    <>
      <Hero />
      <Skills />
      <Projects projects={projects} />
      <Contact />
    </>
  )
}

export default Home
