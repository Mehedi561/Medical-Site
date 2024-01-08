import Image from "next/image";
import Navbar from "./components/block/Navbar";
import HeroText from "./components/block/HeroText";

export default function Home() {
  return (
    <main className="bg-base-100 text-black">
      <HeroText />
    </main>
  );
}
