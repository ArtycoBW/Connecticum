import { auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'

const NavBar = async () => {
  const { userId }: { userId: string | null } = await auth()

  return (
    <div className='sticky z-50 top-0 inset-x-0 h-14 border-b border-primary/5'>
      <header className='relative py-2 bg-opacity-70 bg-transparent/10'>
        <MaxWidthWrapper>
          <div className='flex justify-between items-center'>
            <div className='ml-4 flex lg:ml-0'>
              <Link href='/' className='flex justify-center items-center'>
                <Image
                  src='assets/logo-icon.svg'
                  width={35}
                  height={35}
                  alt='logo'
                />
                <h1 className='text-xl font-bold hover:text-[#5e6ad2] transition-all'>
                  onnecticum
                </h1>
              </Link>
            </div>

            <div className='flex items-center justify-between gap-12 text-white font-medium pr-20'>
              <Link
                href='/converse'
                className='hover:text-[#5e6ad2] transition-all'
              >
                Converse
              </Link>
              <Link
                href='/uibuilder'
                className='hover:text-[#5e6ad2] transition-all'
              >
                UIBuilder
              </Link>
              <Link
                href='/coding'
                className='hover:text-[#5e6ad2] transition-all'
              >
                Coding
              </Link>
            </div>

            {!userId ? (
              <div className='flex items-center gap-3'>
                <Link
                  href='/sign-in'
                  className={buttonVariants({
                    variant: 'purple',
                    size: 'md'
                  })}
                >
                  Войти
                </Link>
              </div>
            ) : (
              <Link
                href='/main'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm'
                })}
              >
                Open app
              </Link>
            )}
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default NavBar
