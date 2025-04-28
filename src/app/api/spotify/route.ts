import { getCurrentlyPlaying } from '@/lib/spotify'

export const GET = async () => {
  const currentlyPlaying = await getCurrentlyPlaying()

  return Response.json(currentlyPlaying)
}
