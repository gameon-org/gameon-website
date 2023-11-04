import { Button } from "@nextui-org/react";
import { Footer, Navbar, Popup } from "@/components";
import { AboutUs, Events, Gallery, LandingPage, PhoneApp } from "@/containers";

export default function App() {
  return (
    <main className="">
      <Navbar />
      <LandingPage />
      <AboutUs />
      <Events />
      <Gallery />
      <PhoneApp />
      
      <Footer />
    </main>
  );
}
