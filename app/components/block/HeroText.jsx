import Link from "next/link";
import bg from "../../../public/hero.jpg";
import Image from "next/image";
const HeroText = () => {
  return (
    <div className="bg-base-100 text-gray-800 space-y-5 container mx-auto text-center pt-10">
      <h1 className="text-5xl font-extrabold bg-base-100 text-gray-800">
        Be in safe hands
      </h1>
      <p>Choose Mec Healfy experts to find your health solutions.</p>
      <button className="btn">
        <Link href={"/signup"}>SignUp Now</Link>
      </button>
      <Image className="mx-auto" src={bg}></Image>
    </div>
  );
};

export default HeroText;
