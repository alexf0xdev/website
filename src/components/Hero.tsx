import clsx from 'clsx'

const Hero = () => {
  return (
    <div className={clsx('mt-32')}>
      <h1 className={clsx('text-5xl md:text-7xl font-semibold')}>It&apos;s AlexF0x</h1>
      <p className={clsx('text-xl md:text-2xl mt-5')}>
        Here you can see my projects and other stuff.
      </p>
    </div>
  )
}

export default Hero
