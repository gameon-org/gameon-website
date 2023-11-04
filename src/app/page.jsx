import { Button } from "@nextui-org/react";
import { Footer, Navbar } from "@/components";
import { AboutUs, Events, Gallery, LandingPage } from "@/containers";
import PhoneApp from "@/containers/phoneApp/PhoneApp";

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
