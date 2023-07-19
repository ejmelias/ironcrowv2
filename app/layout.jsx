

import './globals.css'
import { Domine } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Background from '@/components/Background'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const domine = Domine({ subsets: ['latin'] })

export const metadata = {
    title: 'Iron Crow Studio',
    description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={domine.className}>
                <main className="flex flex-col min-h-screen items-center ">
                    
                    <Background />
                    
                    <div className=" z-20 h-full w-full max-w-5xl flex-col">
                        {/*Title*/}
                        <div className="p-6 flex md:justify-center justify-between items-center">
                            <Link
                                className="flex pointer-events-auto md:p-0"
                                href="/"
                            >
                                <h1 className='text-3xl md:text-7xl lg:text-8xl font-bold text-white [text-shadow:_0px_0px_5px_rgb(0_0_0_/_100%)]'>Iron Crow Studio</h1>
                            </Link>
                            <MobileNav />
                        </div>                 

                        <Nav />

                    </div>
                    
                    {/*content*/}
                    <div className='z-10 max-w-5xl flex-grow flex items-center justify-center'>
                        <div className='p-5 w-screen'>
                            {children}
                        </div>
                    </div>

                    <Footer/>
                    
                </main>
            </body>
        </html>
    )
}
