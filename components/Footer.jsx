import SocialIcon from '@/components/SocialIcon'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='z-10 mt-auto opacity-50'>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    <SocialIcon kind="mail" href={'mailto:james@ironcrowstudio.ca'} size="24" />
                    <SocialIcon kind="facebook" href={'https://www.facebook.com/profile.php?id=100083110963493'} size="24" />
                    <SocialIcon kind="instagram" href={'https://www.instagram.com/ironcrowstudio/'} size="24" />
                </div>
                <div className="mb-2 flex space-x-2 text-sm text-white">
                    <div>{`© ${new Date().getFullYear()}`}</div>
                    <div>{` • `}</div>
                    <Link href="/">{'Iron Crow Studio'}</Link>
                    <div>{` • `}</div>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <div>Domain, MB</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
