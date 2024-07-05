import Image from "next/image";
import heroImage from "../assets/heroSectionImage.jpg";
import hero from "../assets/toa-heftiba-FV3GConVSss-unsplash.jpg";
import { Button } from "./button";
const HeroSection = () => {
  return (
    <header className="w-full relative">
      <Image
        className="z-0 relative object-cover bg-no-repeat bg-cover"
        alt="hero-section-image"
        width={1920}
        height={1080}
        src={heroImage}
        priority
      />
      <main className="w-full flex justify-center items-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-6 md:gap-12 justify-center items-center max-w-full md:w-1/2 p-8 z-50 bg-transparent md:bg-white md:bg-opacity-20 backdrop-filter backdrop-contrast-75 md:backdrop-blur-md">
            <h2 className="font-bold text-center text-4xl ">Drisos</h2>
            <p className="tracking-widest bg-white bg-opacity-40 backdrop-filter backdrop-blur-2xl md:bg-transparent md:bg-opacity-0 text-lime-950 text-base font-medium">
              So cozzy, <span className="md:text-lime-50 border-b-2 border-lime-950">No fuzzy!</span>
            </p>
          <div className="flex items-center gap-16">
            <Button classname="bg-lime-950 transition duration-400 ease-in-out hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded">
              Shop
            </Button>
            <Button classname="bg-lime-950 transition duration-400 ease-in-out hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded">
              contact
            </Button>
          </div>
        </div>
      </main>
      {/* <main className="grid grid-cols-4 gap-4">
                <div className="col-start-2 col-span-1 p-12 bg-slate-400"></div>
                <div className="col-start-3 col-end-4 p-12 bg-slate-400"></div>
                <div className="col-span-full p-12 bg-teal-600"></div>
            </main> */}
    </header>
  );
};

export default HeroSection;
