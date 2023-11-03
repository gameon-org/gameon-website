import { Button } from "@nextui-org/react";
import { Footer, Navbar } from "@/components";
import { AboutUs, Events, LandingPage } from "@/containers";

export default function App() {
  return (
    <main className="">
      <Navbar />
      <LandingPage />
      <AboutUs />
      <Events />
      <Footer />
    </main>
  );
}
