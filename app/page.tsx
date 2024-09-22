import { meddon } from "./fonts"
import Image from "next/image";
import Link from "next/link";
import { abhaya_libre } from "./fonts";

export default function Home() {
  return (
  <main className="flex justify-center min-h-screen items-center p-7 xl:p-24 bg-gradient-to-r from-stone-700 to-stone-200">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 justify-items-center">
      <div className="flex flex-col justify-center">
        <Image src="/invite-front.jpeg" alt="invite front" width={545} height={500}></Image>
      </div>
      <div className="flex flex-col justify-center  xl:max-w-[500px]"> 
          <Link target="blank" href="#" className="button">
            <button className={`${meddon.className} text-2xl`}>Lodging</button>
          </Link>
          <Link target="blank" href="#" className="button mt-5 lg:mt-10">
            <button className={`${meddon.className} text-2xl`}>Ceremony & Reception</button>
          </Link>
        <Link target="blank" href="#" className="button mt-5 lg:mt-10">
            <button className={`${meddon.className} text-2xl`}>Order of the Weekend</button>
        </Link>
        <Link target="blank" href="#" className="button mt-5 lg:mt-10">
            <button className={`${meddon.className} text-2xl`}>Gift Registry</button>
        </Link>
        <Link target="blank" href="#" className="button mt-5 lg:mt-10">
            <button className={`${meddon.className} text-2xl`}>Attire Inspiration</button>
        </Link>   
      </div>
      <div className="flex flex-col justify-center xl:max-w-[500px] my-40">
        <h1 className={`${meddon.className} text-base xl:text-6xl my-8`}>Lodging</h1>
        <p className={`${abhaya_libre.className} text-base xl:text-xl mt-4`}> The Mimslyn Inn<br></br>401 W. Main St.<br></br>Luray, VA 22835-5260</p>
        <p className={`${abhaya_libre.className} font-bold text-base xl:text-xl mt-4`}>Please call (540) 743-5105 and specify you are a Dye-Solomon Wedding Guest to get our event rate.</p>
        <p className={`${abhaya_libre.className} text-base xl:text-xl mt-4`}> Less expensive rooms in group house available. Contact Samantha or Chuck for info.</p>
      </div>
      <div className="flex flex-col justify-center  xl:max-w-[500px] mt-8">
        <Image src="/mimslyn-color.jpg" alt="invite front" width={545} height={500}></Image>
      </div>
    </div>
  </main>
  );
}


