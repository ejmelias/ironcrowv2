import Link from "next/link"

export const metadata = {
    title: 'Iron Crow Studio',
    description: 'Custom CNC cut steel signs and handmade decorative metalwork.',
}

export default function Home() {
	return (
        <div className="relative flex place-items-center text-center text-white [text-shadow:_0px_0px_5px_rgb(0_0_0_/_100%)] text-3xl">
            <span>
            We specialize in crafting custom CNC cut steel signs and handmade decorative metalwork that is both functional and beautiful.
            Whether you're looking for a personalized sign for your business or a unique piece of metal art for your home, we've got you covered. 
            Browse our &nbsp;
            <Link href={'/gallery'} className="inline underline">gallery</Link> 
            &nbsp;and&nbsp;
            <Link href={'/contact'} className="inline underline">contact us</Link> 
            &nbsp;today to start bringing your vision to life.
            </span>
        </div>
	)
}
