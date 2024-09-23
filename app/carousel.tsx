"use client"
import React, { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

export default function EmblaCarousel() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({playOnInit: true, delay: 3000})])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  const [windowSize, setWindowSize] = useState(0)
    useEffect(() => {
        if (typeof window !== "undefined"){
            setWindowSize(window.innerWidth)
        }
    }, [])
    console.log("window size", windowSize)

  if (windowSize <= 780) {
    return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide_mobile">
          <Image src="/creeper.jpg" alt="creeper lady" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/black-sheer.jpg" alt="black-sheer" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/black.png" alt="black" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/men-green.jpg" alt="men green" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/blue.jpg" alt="blue" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/goth-guy.jpeg" alt="goth-guy" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/green-sheer.jpg" alt="green-sheer" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/men-emerald.jpg" alt="men emerald" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/grey.jpg" alt="grey" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/men-red.jpg" alt="men red" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/hair.jpg" alt="hair" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/long-slit.jpg" alt="long-slit" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/men-grey.jpg" alt="men grey" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/red-dress.jpg" alt="red dress" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/rpatts.jpg" alt="rpatts" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/sequin-skirt.jpg" alt="sequin skirt" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/stars-dress.jpg" alt="stars dress" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/waters.jpg" alt="waters" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/wine-dress.jpg" alt="wine dress" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/Zoe-Benson-Coven.jpg" alt="Zoe Benson Coven" width={545} height={500}></Image>
        </div>
      </div>
    </div>
  )
} else {
    return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image src="/creeper.jpg" alt="creeper lady" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/black-sheer.jpg" alt="black-sheer" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/black.png" alt="black" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/men-green.jpg" alt="men green" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/blue.jpg" alt="blue" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/goth-guy.jpeg" alt="goth-guy" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/green-sheer.jpg" alt="green-sheer" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/men-emerald.jpg" alt="men emerald" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/grey.jpg" alt="grey" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/men-red.jpg" alt="men red" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/hair.jpg" alt="hair" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/long-slit.jpg" alt="long-slit" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/men-grey.jpg" alt="men grey" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/red-dress.jpg" alt="red dress" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/rpatts.jpg" alt="rpatts" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/sequin-skirt.jpg" alt="sequin skirt" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/stars-dress.jpg" alt="stars dress" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/waters.jpg" alt="waters" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/wine-dress.jpg" alt="wine dress" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/Zoe-Benson-Coven.jpg" alt="Zoe Benson Coven" width={545} height={500}></Image>
        </div>
      </div>
    </div>
  )}

  
}

