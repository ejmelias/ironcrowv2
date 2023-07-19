import ImageGallery from "@/components/ImageGallery"

export const metadata = {
    title: 'Gallery',
    description: 'An image gallery showcasing some of the work completed by Iron Crow Studio',
}


export default function page() {

    return (
        <div className="text-center">
            <h2 className="text-center text-white [text-shadow:_0px_0px_5px_rgb(0_0_0_/_100%)] text-2xl pb-16">A small sampling of our completed projects</h2>
            <ImageGallery />
        </div>
    )
}

