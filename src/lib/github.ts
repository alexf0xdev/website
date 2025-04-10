import { ILanguageColors, IProject } from '@/types/github'
import axios from 'axios'

export const getUserRepos = async (username: string): Promise<IProject[]> => {
  const { data } = await axios.get(
    `https://api.github.com/users/${username}/repos`,
  )

  return data
}

export const getLanguageColors = async (): Promise<ILanguageColors> => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json',
  )

  return data
}
