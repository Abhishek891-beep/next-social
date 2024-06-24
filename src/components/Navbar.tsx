import React from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { ClerkLoading  , SignIn , SignedIn , ClerkLoaded , SignedOut , UserButton} from '@clerk/nextjs'

function Navbar() {
  return (
    <div  className='flex  justify-between items-center h-24'>
        <div className='md:hidden lg:block w-[20%]'>
            <Link href="/" className='font-bold tex-xl text-blue-600 '>LAMASOCIAL</Link>
        </div>
        <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
            <div className='flex gap-6 text-gray-600'>
                <Link className='flex items-center gap-2' href='/'>
                    <Image src="/home.png" className='w-4 h-4' alt='Homepage' width={16} height={16} />
                    <span>HOmePage</span>
                </Link>
                <Link className='flex items-center gap-2' href='/'>
                    <Image src="/friends.png" className='w-4 h-4' alt='Friends' width={16} height={16}  />
                    <span>Friends</span>
                </Link>
                <Link className='flex items-center gap-2' href='/'>
                    <Image src="/stories.png" className='w-4 h-4' alt='Stories' width={16}  height={16} />
                    <span>Stories</span>
                </Link>
            </div>
            <div className='hidden md:flex p-2 bg-slate-100 items-center rounded-xl ' >
                <input type="text"placeholder='search...' className='bg-transparent outline-none' />
                <Image src="/search.png" alt='search' width={14} height={14}></Image>
            </div>   
        </div>

        <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
            <ClerkLoading>
            <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
            </ClerkLoading>
            <ClerkLoaded>
            <SignedIn>
                <div className="cursor-pointer">
                <Image src="/people.png" alt="people" width={24} height={24} />
                </div>
                <div className="cursor-pointer">
                <Image src="/messages.png" alt="messages" width={20} height={20} />
                </div>
                <div className="cursor-pointer">
                <Image src="/notifications.png" alt="notifications" width={20} height={20} />
                </div>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <div className="flex items-center gap-2 text-sm">
                <Image src="/search.png" alt="login" width={20} height={20} />
                <Link href="/sign-in">Login/Register</Link>
                </div>
            </SignedOut>

            </ClerkLoaded>
            <MobileMenu/>
        </div>
    </div>
  )
}

export default Navbar;