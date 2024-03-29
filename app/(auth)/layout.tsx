import React from 'react'
import { GlowingStarsBackgroundCard } from '@/components/ui/glowing-stars'
import { SparklesCore } from '@/components/ui/sparkles'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen relative w-full from-[#000212] to-primary/20 flex flex-col justify-center items-center overflow-hidden rounded-md'>
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
      {children}
    </div>
  )
}

export default Layout
