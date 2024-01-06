import { useState, useEffect } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./photos.ts";

export default function Portfolio() {
  const [index, setIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  const handleResize = () => {
    window.innerWidth > 600 ? setIsMobile(false) : setIsMobile(true)
   }
   
   window.addEventListener('resize', handleResize);
   
   return () => {
    window.removeEventListener('resize', handleResize);
   };
}, [])

  return (
    <>
    <div>
      <h1 className='font-header' style={{fontSize: 60, margin: '0px auto'}}>Click Photos to get a closer look!</h1>
    </div>
      <PhotoAlbum photos={photos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
