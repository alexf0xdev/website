import axios from 'axios'
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const fetcher = async (url: string) => axios.get(url).then((res) => res.data)
