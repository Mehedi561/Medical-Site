import Image from "next/image";
import Navbar from "./components/block/Navbar";
import HeroText from "./components/block/HeroText";
import ImageText from "./components/block/ImageText";

export default function Home() {
  return (
    <main className="bg-base-100 text-black">
      <HeroText />
      <ImageText />
    </main>
  );
}
