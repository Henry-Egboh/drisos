import { Suspense } from "react";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
}
