//import { meddon } from "./fonts"
import Image from "next/image";
import Link from "next/link";
import { abhaya_libre } from "./fonts";

export default function Home() {
  return (
  <main className="flex justify-center min-h-screen items-center p-7 xl:p-24 bg-gradient-to-r from-amber to-stone-200">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 justify-items-center ">
      <div className="flex flex-col justify-center">
        <Image src="/std.png" alt="save the date" width={545} height={500}></Image>
        {/* <h1 className={`${meddon.className} xl:text-5xl text-stone-950 leading-loose`}>Wedding and Handfasting of Samantha and Chuck</h1> */}
      </div>
      <div className="flex flex-col justify-center  xl:max-w-[500px]"> 
          <Link target="blank" href="https://forms.gle/VEKxyEejELfjuyE78" className="button">
            <button className={`${abhaya_libre.className} text-xl`}>Survey</button>
          </Link>
        <Link target="blank" href="https://mimslyninn.com/luray-hotel-accommodations/" className="button mt-5 lg:mt-10">
            <button className={`${abhaya_libre.className} text-xl`}>Book Your Room</button>
        </Link>  
        <p className={`${abhaya_libre.className} text-base xl:text-xl mt-4`}>This will be a weekend event at The Mimslyn Inn in Luray, VA with ceremony and reception on Saturday and breakfast on Sunday. Guests are welcome to arrive on Friday or Saturday. Less expensive rooms in group house available; contact Samantha or Chuck for info.</p>
      </div>
    </div>
  </main>
  );
}


//https://docs.google.com/forms/d/139-OC-rS0JWLOR3JoMXxDzFx-nz5sUFjY8jEKdXasHA/edit
