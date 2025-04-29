import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import ListeningNow from '@/components/ListeningNow'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { getRepositories } from '@/lib/github'

const Home = async () => {
  const repositories = await getRepositories()

  return (
    <>
      <Hero />
      <Skills />
      <ListeningNow />
      <Projects repositories={repositories} />
      <Contact />
    </>
  )
}

export default Home
