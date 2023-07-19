import Image from "next/image"

// Icons taken from: https://simpleicons.org/

const components = {
    mail: '/mail.svg',
    github: '/github.svg',
    facebook: '/facebook.svg',
    youtube: '/youtube.svg',
    linkedin: '/linkedin.svg',
    twitter: '/twitter.svg',
    instagram: '/instagram.svg',
}

export default function SocialIcon({ kind, href, size = 8 }) {
    if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
        return null

    return (
        <a
            className="text-white fill-white"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
        >
            <span className="sr-only">{kind}</span>
            <Image
                className="fill-white"
                src={components[kind]}
                alt={kind}
                width={size}
                height={size}
            />
        </a>
    )
}