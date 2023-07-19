import Image from "next/image"

export const metadata = {
    title: 'Contact',
    description: 'Get in touch with Iron Crow Studio',
}

export default function page() {

    return (
        <>
            <h2 className="text-center text-white [text-shadow:_0px_0px_5px_rgb(0_0_0_/_100%)] text-5xl pb-10">Get in touch:</h2>
            <div className="text-center text-white [text-shadow:_0px_0px_5px_rgb(0_0_0_/_100%)] text-3xl pb-10 space-y-6">
                <a
                    className="items-center text-center flex justify-center transition hover:scale-125"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"mailto:james@ironcrowstudio.ca"}
                >
                    <span className="sr-only">Email</span>
                    <Image
                        src={"/mail.svg"}
                        alt={"email"}
                        width={24}
                        height={24}
                    />
                    <div className="p-2">Email</div>
                </a>
                <a
                    className="items-center text-center flex justify-center transition hover:scale-125"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://www.instagram.com/ironcrowstudio/"}
                >
                    <span className="sr-only">Instagram</span>
                    <Image
                        src={"/instagram.svg"}
                        alt={"instagram"}
                        width={24}
                        height={24}
                    />
                    <div className="p-2">Instagram</div>
                </a>
                <a
                    className="items-center text-center flex justify-center transition hover:scale-125"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://www.facebook.com/profile.php?id=100083110963493"}
                >
                    <span className="sr-only">Facebook</span>
                    <Image
                        src={"/facebook.svg"}
                        alt={"facebook"}
                        width={24}
                        height={24}
                    />
                    <div className="p-2">Facebook</div>
                </a>
            </div>
        </>
    )
}