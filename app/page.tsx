import Image from "next/image";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
