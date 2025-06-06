import Hero from '@/components/Hero'
import ListeningNow from '@/components/ListeningNow'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { getRepositories } from '@/lib/github'
import { getCurrentlyPlaying } from '@/lib/spotify'
import { unstable_noStore } from 'next/cache'

const Home = async () => {
  unstable_noStore()

  const [currentlyPlaying, repositories] = await Promise.all([
    getCurrentlyPlaying(),
    getRepositories(),
  ])
  return (
    <>
      <Hero />
      <Skills />
      <ListeningNow initialCurrentlyPlaying={currentlyPlaying} />
      <Projects repositories={repositories} />
    </>
  )
}

export default Home
