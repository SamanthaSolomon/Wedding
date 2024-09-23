"use client"
import { meddon } from "./fonts"
import Image from "next/image";
import Link from "next/link";
import { abhaya_libre } from "./fonts";
import EmblaCarousel from "./carousel"
import { useState, useEffect } from "react";


export default function Home() { 

  const [useWindowSize, setUseWindowSize] = useState(0)
    useEffect(() => {
        if (typeof window !== "undefined"){
            setUseWindowSize(window.innerWidth)
        }
    }, [])
    console.log("window size", useWindowSize)
  
  if (useWindowSize <= 780){
    return (
    <main className="flex justify-center min-h-screen items-center p-7 xl:p-24 bg-gradient-to-r from-stone-700 to-stone-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 justify-items-center">
        {/* navigation */}
        <div id="top" className="flex flex-col justify-center">
          <Image src="/invite-front.jpeg" alt="invite front" width={545} height={500}></Image>
        </div>
        <div className="flex flex-col justify-center"> 
            <Link href="#lodging" className="button">
              <button className={`${meddon.className}`}>Lodging</button>
            </Link>
            <Link href="#ceremony" className="button mt-5 lg:mt-10">
              <button className={`${meddon.className}`}>Ceremony & Reception</button>
            </Link>
          <Link href="#schedule" className="button mt-5 lg:mt-10">
              <button className={`${meddon.className}`}>Order of the Weekend</button>
          </Link>
          <Link target="blank" href="https://registry.theknot.com/chuck-dye-samantha-solomon-january-2025-md/67476230" className="button mt-5 lg:mt-10">
              <button className={`${meddon.className}`}>Gift Registry</button>
          </Link>
          <Link href="#attire" className="button mt-5 lg:mt-10">
              <button className={`${meddon.className}`}>Attire Inspiration</button>
          </Link>   
        </div>
        {/* lodging */}
        <div className="flex flex-col justify-center mt-8">
          <Image src="/mimslyn-color.jpg" alt="mimslyn inn" width={545} height={500}></Image>
        </div>
        <div id="lodging" className="flex flex-col justify-center">
          <h1 className={`${meddon.className} text-4xl my-8`}>Lodging</h1>
          <p className={`${abhaya_libre.className} text-lg mt-4`}> The Mimslyn Inn<br></br>401 W. Main St.<br></br>Luray, VA 22835-5260</p>
          <p className={`${abhaya_libre.className} font-bold text-lg mt-4`}>Please call (540) 743-5105 and specify you are a Dye-Solomon Wedding Guest to get our event rate.</p>
          <p className={`${abhaya_libre.className} text-lg mt-4`}> Less expensive rooms in group house available. Contact Samantha or Chuck for info.</p>
          <Link href="#top" className={`${abhaya_libre.className} text-lg mt-4 underline underline-offset-8`}>Back to top</Link>
        </div>
        {/* Ceremony & Reception */}
        <div id="ceremony" className="flex flex-col justify-center mt-8">
          <Image src="/Luray-Vertical.jpg" alt="luray" width={545} height={500}></Image>
        </div>
        <div className="flex flex-col justify-center my-8">
          <h1 className={`${meddon.className} text-4xl my-8`}>Ceremony & Reception</h1>
          <p className={`${abhaya_libre.className} text-lg mt-4`}>Luray Caverns<br></br>101 Cave Hill Rd.<br></br>Luray, VA 22835-5260</p>
          <p className={`${abhaya_libre.className} text-lg mt-4`}>Ceremony include a 1.75 mile guided walking tour through the caverns. The path is well lit with small inclines.</p>
          <p className={`${abhaya_libre.className} text-lg mt-4`}> A shortcut directly to the ceremony site is available. Please get in touch with Chuck or Sam if interested.</p>
          <p className={`${abhaya_libre.className} text-lg mt-4`}>Reception to follow at The Mimslyn Inn.</p>
          <Link href="#top" className={`${abhaya_libre.className} text-lg mt-4 underline underline-offset-8`}>Back to top</Link>
        </div>
        {/* Order of the Weekend */}
        <div className="flex flex-col justify-center  mt-8">
          <Image src="/tarot.jpg" alt="tarot" width={545} height={500}></Image>
        </div>
        <div id="schedule" className="flex flex-col justify-center my-8">
          <h1 className={`${meddon.className} text-4xl my-8`}>Order of the Weekend</h1>
          <p className={`${abhaya_libre.className} text-lg mt-4 underline underline-offset-8`}>Saturday, January 18th</p>
          <p className={`${abhaya_libre.className} text-lg mt-4`}>3:00pm<br></br>Check In at The Mimslyn Inn</p>
          <p className={`${abhaya_libre.className} text-lg mt-4`}>4:30pm<br></br>Gather at Luray Caverns Entrance</p>
          <p className={`${abhaya_libre.className} text-lg mt-4`}>5:00pm<br></br>Tour & Ceremony Begins</p>
          <p className={`${abhaya_libre.className} text-lg`}>Latecomers will not be able to enter</p>
          <p className={`${abhaya_libre.className} text-lg mt-4`}>6:00pm<br></br>Cocktails & Reception at The Mimslyn Inn</p>
          <p className={`${abhaya_libre.className} text-lg mt-4`}>10:30pm<br></br>After Party at The Manor House</p>
          <p className={`${abhaya_libre.className} text-lg mt-4 underline underline-offset-8`}>Sunday, January 19th</p>
          <p className={`${abhaya_libre.className} text-lg mt-4`}>9:00am - 11:00am<br></br>Brunch in The Blue Room</p>
          <p className={`${abhaya_libre.className} text-lg mt-4`}>11:00am<br></br>Check Out and Farewell</p>
          <Link href="#top" className={`${abhaya_libre.className} text-lg mt-4 underline underline-offset-8`}>Back to top</Link>
        </div>
        {/* attire inspiration */}
        <div className="flex flex-col justify-center mt-8">
          <EmblaCarousel/>
        </div>
        <div id="attire" className="flex flex-col justify-center my-8">
          <h1 className={`${meddon.className} text-4xl my-8`}>Attire Inspriation</h1>
          <p className={`${abhaya_libre.className} text-lg mt-4`}>Formal wedding attire sits between cocktail and black tie on the wedding dress code scale. It"s slightly more elevated than cocktail attire and a touch less dressy than a black-tie nuptial. We encourage guests to lean into our theme of wintery woods, pagan, witchy, and rituals.</p>
          <Link href="#top" className={`${abhaya_libre.className} text-lg xl:text-xl mt-4 underline underline-offset-8`}>Back to top</Link>
        </div>
      </div>
    </main>
    )
  } else { 
    return (
  <main className="flex justify-center min-h-screen items-center p-7 xl:p-24 bg-gradient-to-r from-stone-700 to-stone-200">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 justify-items-center">
      {/* navigation */}
      <div id="top" className="flex flex-col justify-center">
        <Image src="/invite-front.jpeg" alt="invite front" width={545} height={500}></Image>
      </div>
      <div className="flex flex-col justify-center  xl:max-w-[500px]"> 
          <Link href="#lodging" className="button">
            <button className={`${meddon.className} xl:text-2xl`}>Lodging</button>
          </Link>
          <Link href="#ceremony" className="button mt-5 lg:mt-10">
            <button className={`${meddon.className} xl:text-2xl`}>Ceremony & Reception</button>
          </Link>
        <Link href="#schedule" className="button mt-5 lg:mt-10">
            <button className={`${meddon.className} xl:text-2xl`}>Order of the Weekend</button>
        </Link>
        <Link target="blank" href="https://registry.theknot.com/chuck-dye-samantha-solomon-january-2025-md/67476230" className="button mt-5 lg:mt-10">
            <button className={`${meddon.className} xl:text-2xl`}>Gift Registry</button>
        </Link>
        <Link href="#attire" className="button mt-5 lg:mt-10">
            <button className={`${meddon.className} xl:text-2xl`}>Attire Inspiration</button>
        </Link>   
      </div>
      {/* lodging */}
      <div id="lodging" className="flex flex-col justify-center xl:max-w-[500px] xl:my-40">
        <h1 className={`${meddon.className} text-6xl my-8`}>Lodging</h1>
        <p className={`${abhaya_libre.className} text-xl mt-4`}> The Mimslyn Inn<br></br>401 W. Main St.<br></br>Luray, VA 22835-5260</p>
        <p className={`${abhaya_libre.className} font-bold text-xl mt-4`}>Please call (540) 743-5105 and specify you are a Dye-Solomon Wedding Guest to get our event rate.</p>
        <p className={`${abhaya_libre.className} text-xl mt-4`}> Less expensive rooms in group house available. Contact Samantha or Chuck for info.</p>
        <Link href="#top" className={`${abhaya_libre.className} text-xl mt-4 underline underline-offset-8`}>Back to top</Link>
      </div>
      <div className="flex flex-col justify-center  xl:max-w-[500px] mt-8">
        <Image src="/mimslyn-color.jpg" alt="mimslyn inn" width={545} height={500}></Image>
      </div>
      {/* Ceremony & Reception */}
      <div id="ceremony" className="flex flex-col justify-center  xl:max-w-[500px] mt-8">
        <Image src="/Luray-Vertical.jpg" alt="luray" width={545} height={500}></Image>
      </div>
      <div className="flex flex-col justify-center xl:max-w-[500px] my-40">
        <h1 className={`${meddon.className} text-6xl my-8`}>Ceremony & Reception</h1>
        <p className={`${abhaya_libre.className} text-xl mt-4`}>Luray Caverns<br></br>101 Cave Hill Rd.<br></br>Luray, VA 22835-5260</p>
        <p className={`${abhaya_libre.className} text-xl mt-4`}>Ceremony include a 1.75 mile guided walking tour through the caverns. The path is well lit with small inclines.</p>
        <p className={`${abhaya_libre.className} text-xl mt-4`}> A shortcut directly to the ceremony site is available. Please get in touch with Chuck or Sam if interested.</p>
        <p className={`${abhaya_libre.className} text-xl mt-4`}>Reception to follow at The Mimslyn Inn.</p>
        <Link href="#top" className={`${abhaya_libre.className} text-xl mt-4 underline underline-offset-8`}>Back to top</Link>
      </div>
      {/* Order of the Weekend */}
      <div id="schedule" className="flex flex-col justify-center xl:max-w-[500px] my-40">
        <h1 className={`${meddon.className} text-6xl my-8`}>Order of the Weekend</h1>
        <p className={`${abhaya_libre.className} text-xl mt-4 underline underline-offset-8`}>Saturday, January 18th</p>
        <p className={`${abhaya_libre.className} text-xl mt-4`}>3:00pm<br></br>Check In at The Mimslyn Inn</p>
        <p className={`${abhaya_libre.className} text-xl mt-4`}>4:30pm<br></br>Gather at Luray Caverns Entrance</p>
        <p className={`${abhaya_libre.className} text-xl mt-4`}>5:00pm<br></br>Tour & Ceremony Begins</p>
        <p className={`${abhaya_libre.className} text-xl`}>Latecomers will not be able to enter</p>
        <p className={`${abhaya_libre.className} text-xl mt-4`}>6:00pm<br></br>Cocktails & Reception at The Mimslyn Inn</p>
        <p className={`${abhaya_libre.className} text-xl mt-4`}>10:30pm<br></br>After Party at The Manor House</p>
        <p className={`${abhaya_libre.className} text-xl mt-4 underline underline-offset-8`}>Sunday, January 19th</p>
        <p className={`${abhaya_libre.className} text-xl mt-4`}>9:00am - 11:00am<br></br>Brunch in The Blue Room</p>
        <p className={`${abhaya_libre.className} text-lg xl:text-xl mt-4`}>11:00am<br></br>Check Out and Farewell</p>
        <Link href="#top" className={`${abhaya_libre.className} text-xl mt-4 underline underline-offset-8`}>Back to top</Link>
      </div>
      <div className="flex flex-col justify-center  xl:max-w-[500px] mt-8">
        <Image src="/tarot.jpg" alt="tarot" width={545} height={500}></Image>
      </div>
      {/* attire inspiration */}
      <div className="flex flex-col justify-center  xl:max-w-[500px] mt-8">
        <EmblaCarousel/>
      </div>
      <div id="attire" className="flex flex-col justify-center xl:max-w-[500px] my-40">
        <h1 className={`${meddon.className} text-6xl my-8`}>Attire Inspriation</h1>
        <p className={`${abhaya_libre.className} text-xl mt-4`}>Formal wedding attire sits between cocktail and black tie on the wedding dress code scale. It"s slightly more elevated than cocktail attire and a touch less dressy than a black-tie nuptial. We encourage guests to lean into our theme of wintery woods, pagan, witchy, and rituals.</p>
        <Link href="#top" className={`${abhaya_libre.className} text-xl mt-4 underline underline-offset-8`}>Back to top</Link>
      </div>
    </div>
  </main>
  );}
}


