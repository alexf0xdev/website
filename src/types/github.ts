export interface IProject {
  name: string
  description?: string
  language?: string
  stargazers_count: number
  forks_count: number
  html_url: string
  homepage?: string
  fork: boolean
}

export interface ILanguageColors {
  [language: string]: {
    color: string
    url: string
  }
}
