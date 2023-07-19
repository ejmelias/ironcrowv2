import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="z-10 mb-10 text-center md:mb-0 md:grid-cols-3 md:grid hidden text-white [text-shadow:_0px_0px_5px_rgb(0_0_0_/_100%)]">
            <Link
                href={'/'}
                className="group rounded-lg px-5 py-4 transition hover:scale-125"
            >   
                <h2 className={`mb-3 text-3xl font-semibold`}>
                    About
                </h2>
            </Link>

            <Link
                href={"/gallery"}
                className="group rounded-lg px-5 py-4 hover:scale-125 transition"
            >
                <h2 className={`mb-3 text-3xl font-semibold`}>
                    gallery
                </h2>
            </Link>

            <Link
                href={"/contact"}
                className="group rounded-lg px-5 py-4 transition hover:scale-125"
            >
                <h2 className={`mb-3 text-3xl font-semibold`}>
                    Contact
                </h2>
            </Link>
        </nav>
    )
}