import { ILanguageColors, IRepository } from '@/types/github'
import axios from 'axios'

export const getRepositories = async (): Promise<IRepository[]> => {
  const { data } = await axios.get(
    `https://api.github.com/users/alexf0xdev/repos`,
  )

  return data.map((item: any) => ({
    name: item.name,
    description: item.description,
    language: item.language,
    url: item.html_url,
    homepage: item.homepage,
    fork: item.fork,
    starsCount: item.stargazers_count,
    forksCount: item.forks_count,
  }))
}

export const getLanguageColors = async (): Promise<ILanguageColors> => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json',
  )

  return data
}
