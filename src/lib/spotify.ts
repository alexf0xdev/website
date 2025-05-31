import { ICurrentlyPlaying } from '@/types/spotify'
import axios from 'axios'

export const getAccessToken = async () => {
  const basic = getBasicToken()

  const { data } = await axios.post(
    'https://accounts.spotify.com/api/token',
    {
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${basic}`,
      },
    },
  )

  return data?.access_token
}

export const getCurrentlyPlaying =
  async (): Promise<ICurrentlyPlaying | null> => {
    const accessToken = await getAccessToken()

    const { data } = await axios.get(
      'https://api.spotify.com/v1/me/player/currently-playing',
      { headers: { Authorization: `Bearer ${accessToken}` } },
    )

    if (!data || !data.is_playing) return null

    return {
      name: data.item.name,
      artists: data.item.artists.map((artist: any) => artist.name).join(', '),
      imageUrl: data.item.album.images[0].url,
    }
  }

const getBasicToken = () => {
  const credentials = `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`

  return Buffer.from(credentials).toString('base64')
}
