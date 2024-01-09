import Image from "next/image";
import i1 from "../../public/Image 1.png";
import i4 from "../../public/Image 4.png";
import i5 from "../../public/Image 5.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-base-100 text-gray-800 space-y-5   py-10">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold my-10">TOP MEC SERVICES</h1>
        <div className="flex justify-center gap-9">
          <div className="w1/2 h-auto">
            <Image src={i1} className=" rounded-xl" />
          </div>
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold">Dentist</h2>
            <p className="text-xl text-gray-600">
              We provides online dental consultation services. You can easily
              create an account and have a virtual dental visit with a licensed
              dentist from the comfort of your home or office
            </p>
            <div>
              <Link className="text-blue-700 " href={""}>
                CONSULT NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-10 my-5">
          <div className="flex gap-20">
            <Image src={i1} className="w-72 h-auto  rounded-xl" />
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold">Dentist</h2>
              <p className="text-base text-gray-600">
                We provides online dental consultation services. You can easily
                create an account and have a virtual dental visit with a
                licensed dentist from the comfort of your home or office
              </p>
              <div>
                <Link className="text-blue-700 " href={""}>
                  CONSULT NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-20">
            <Image src={i1} className="w-72 h-auto rounded-xl" />
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold">Dentist</h2>
              <p className="text-base text-gray-600">
                We provides online dental consultation services. You can easily
                create an account and have a virtual dental visit with a
                licensed dentist from the comfort of your home or office
              </p>
              <div>
                <Link className="text-blue-700 " href={""}>
                  CONSULT NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center my-20 bg-slate-300 p-14">
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
      </div>
    </div>
  );
};

export default page;
