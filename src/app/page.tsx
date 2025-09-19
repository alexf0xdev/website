import CurrentlyPlaying from '@/components/CurrentlyPlaying'
import Hero from '@/components/Hero'
import Repositories from '@/components/Repositories'
import Skills from '@/components/Skills'
import { getRepositories } from '@/lib/github'
import { getCurrentlyPlaying } from '@/lib/spotify'

const Home = async () => {
  const [currentlyPlaying, repositories] = await Promise.all([
    getCurrentlyPlaying(),
    getRepositories(),
  ])

  return (
    <>
      <Hero />
      <Skills />
      <CurrentlyPlaying currentlyPlaying={currentlyPlaying} />
      <Repositories repositories={repositories} />
    </>
  )
}

export default Home
