import NavBar from '@/components/NavBar'
import { SparklesCore } from '@/components/ui/sparkles'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='h-full relative w-full from-[#000212] to-primary/20 flex flex-col overflow-hidden rounded-md'>
      <div className='w-full absolute inset-0 h-full'>
        <SparklesCore
          id='tsparticlesfullpage'
          background='transparent'
          minSize={1}
          maxSize={2}
          particleDensity={20}
          className='w-full h-full'
          particleColor='#5561bf'
        />
      </div>
      <NavBar />
      {children}
    </div>
  )
}
