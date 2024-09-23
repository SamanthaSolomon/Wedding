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

  const [useWindowSize, setUseWindowSize] = useState(0)
    useEffect(() => {
        if (typeof window !== "undefined"){
            setUseWindowSize(window.innerWidth)
        }
    }, [])
    console.log("window size", useWindowSize)

  if (useWindowSize <= 780) {
    return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image src="/creeper.jpg" alt="creeper lady" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/pewter-cannes-liquid-satin-tiered-maxi-dress.jpg" alt="pewter tiered" width={545} height={500}></Image>
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
          <Image src="/fur-cape.jpg" alt="fur cape" width={545} height={500}></Image>
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
          <Image src="/plus-size-gothic.jpg" alt="plus-size-gothic" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/green-cape.jpg" alt="green cape" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/men-red.jpg" alt="men red" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/royal-blue.jpg" alt="royal blue" width={545} height={500}></Image>
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
          <Image src="/dark-pink.jpg" alt="dark pink" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/sequin-skirt.jpg" alt="sequin skirt" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/stars-dress.jpg" alt="stars dress" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/blue-bell-sleeve.jpg" alt="stars dress" width={545} height={500}></Image>
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
        <div className="embla__slide_mobile">
          <Image src="/black-gold.jpg" alt="black gold" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/black-long-sleeve.jpg" alt="black long sleeve" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/grey-turtle.jpg" alt="grey turtle" width={545} height={500}></Image>
        </div>
        <div className="embla__slide_mobile">
          <Image src="/Saylorpewter.jpg" alt="saylor pewter" width={545} height={500}></Image>
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
          <Image src="/pewter-cannes-liquid-satin-tiered-maxi-dress.jpg" alt="pewter tiered" width={545} height={500}></Image>
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
          <Image src="/fur-cape.jpg" alt="fur cape" width={545} height={500}></Image>
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
          <Image src="/plus-size-gothic.jpg" alt="plus-size-gothic" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/green-cape.jpg" alt="green cape" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/men-red.jpg" alt="men red" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/royal-blue.jpg" alt="royal blue" width={545} height={500}></Image>
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
          <Image src="/dark-pink.jpg" alt="dark pink" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/sequin-skirt.jpg" alt="sequin skirt" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/stars-dress.jpg" alt="stars dress" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/blue-bell-sleeve.jpg" alt="stars dress" width={545} height={500}></Image>
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
        <div className="embla__slide">
          <Image src="/black-gold.jpg" alt="black gold" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/black-long-sleeve.jpg" alt="black long sleeve" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/grey-turtle.jpg" alt="grey turtle" width={545} height={500}></Image>
        </div>
        <div className="embla__slide">
          <Image src="/Saylorpewter.jpg" alt="saylor pewter" width={545} height={500}></Image>
        </div>
      </div>
    </div>
  )}

  
}

