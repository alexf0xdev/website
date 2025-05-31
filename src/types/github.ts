export interface IRepository {
  name: string
  description: string
  language: string
  url: string
  homepage: string
  fork: boolean
  starsCount: number
  forksCount: number
}

export interface ILanguageColor {
  color: string
  url: string
}
