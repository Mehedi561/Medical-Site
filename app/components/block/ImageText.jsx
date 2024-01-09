import Image from "next/image";
import i1 from "../../../public/Image 1.png";
import i2 from "../../../public/Image 2.png";
import i3 from "../../../public/Image 3.png";
import i4 from "../../../public/Image 4.png";
import i5 from "../../../public/Image 5.png";
import Link from "next/link";
const ImageText = () => {
  return (
    <div className="bg-base-100 text-gray-800 space-y-5 container mx-auto  py-24 ">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-base-100 text-gray-800">
          Book an appointment for any health consultation
        </h1>
        <p>Find experienced doctors across all specialties with Mec Healfy</p>
      </div>
      <div className="flex items-center flex-col gap-12 bg-yellow-50 p-10">
        <div className="flex gap-20">
          <Image src={i1} className="w-96 h-auto rounded-xl" />
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold">Dentist</h2>
            <p className="text-xl text-gray-600">
              Teething troubles? Schedule a dental checkup. Book As soon as
              possible
            </p>
            <div>
              <Link className="text-blue-700 " href={""}>
                CONSULT NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-20 flex-row-reverse">
          <Image src={i2} className="w-96 h-auto rounded-xl" />
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold">
              Gynecologist/Obstetrician
            </h2>
            <p className="text-xl text-gray-600">
              Explore for women's health, pregnancy and infertility treatments.
            </p>
            <div>
              <Link className="text-blue-700 " href={""}>
                CONSULT NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <Image src={i3} className="w-96 h-auto rounded-xl" />
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold">Dietitian/Nutrition</h2>
            <p className="text-xl text-gray-600">
              Get guidance on eating right, weight management and sports
              nutrition.
            </p>
            <div>
              <Link className="text-blue-700 " href={""}>
                CONSULT NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold">
              Read top articles <br />{" "}
              <span className="text-gray-500 font-medium">from Mec Healfy</span>{" "}
              <br />{" "}
              <span className="text-gray-400 font-normal">health experts</span>
            </h2>
            <p className="text-xl text-gray-600">
              Mec Healfy articles that keep you informed about good health
              practices and achieving your goals.
            </p>
            <div>
              <Link className="text-blue-700 btn " href={""}>
                Read all articles
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-20 mb-7">
              <Image src={i4} className="w-96 h-auto rounded-xl" />
              <div className="space-y-5">
                <h2 className="text-4xl font-semibold">CORONAVIRUS</h2>
                <p className="text-xl text-gray-600">
                  Coronavirus Myths and Facts That You Should Be Aware Of
                </p>
                <div>
                  <Link className="text-blue-700 " href={""}>
                    Dr. shamim Ansari
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex gap-20 flex-row-reverse">
              <Image src={i5} className="w-96 h-auto rounded-xl" />
              <div className="space-y-5">
                <h2 className="text-4xl font-semibold">
                  VITAMINS AND SUPPLEMENTS
                </h2>
                <p className="text-xl text-gray-600">
                  Eating Right to Build Immunity Against Cold and Viral
                  Infections
                </p>
                <div>
                  <Link className="text-blue-700 " href={""}>
                    Dr. Fahad Anis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ImageText;
