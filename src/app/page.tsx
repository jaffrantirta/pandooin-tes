import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SectionMain from "./components/SectionMain";
import Destination from "./components/Destination";
import LuxuryFottage from "./components/LuxuryFottage";

export default function Home() {
  return (
    <main className="font-albert-sans bg-vista-white text-black">
      <Nav />
      <Hero />
      <SectionMain />
      <Destination/>
      <LuxuryFottage/>
    </main>
  );
}
