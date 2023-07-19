"use client"

import { images } from "@/components/Images"
import { PhotoAlbum } from "react-photo-album"
import { useState } from "react";
import NextJsImage from "@/components/NextJsImage"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function ImageGallery() {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <PhotoAlbum
                layout="masonry"
                photos={images}
                renderPhoto={NextJsImage}
                defaultContainerWidth={1200}
                sizes={{
                    size: "calc(100vw - 40px)",
                    sizes: [
                        { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
                        { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
                        { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
                    ],
                }}
                onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
                slides={images}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Thumbnails, Zoom]}
            />
        </>
    )
}