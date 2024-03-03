//import { meddon } from "./fonts"
import Image from "next/image";
import Link from "next/link";
import { abhaya_libre } from "./fonts";

export default function Home() {
  return (
  <main className="flex justify-center min-h-screen items-center p-7 xl:p-24 bg-gradient-to-r from-amber to-stone-200">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 content-around">
      <div className="flex flex-col justify-center">
        <Image src="/std.png" alt="save the date" width={500} height={500}></Image>
        {/* <h1 className={`${meddon.className} xl:text-5xl text-stone-950 leading-loose`}>Wedding and Handfasting of Samantha and Chuck</h1> */}
      </div>
      <div className="flex flex-col justify-center"> 
        <div className="button">
          <Link target="blank" href="https://forms.gle/VEKxyEejELfjuyE78">
            <button className={`${abhaya_libre.className} text-xl`}>Survey</button>
          </Link>
        </div>
        <div className="button mt-5 lg:mt-10">
          <Link target="blank" href="https://mimslyninn.com/">
            <button className={`${abhaya_libre.className} text-xl`}>Book Your Room</button>
          </Link>  
        </div>
        <p className={`${abhaya_libre.className} text-base mt-4`}>Less expensive rooms in group house available. Contact Samantha or Chuck for info.</p>
      </div>
    </div>
  </main>
  );
}


//https://docs.google.com/forms/d/139-OC-rS0JWLOR3JoMXxDzFx-nz5sUFjY8jEKdXasHA/edit
