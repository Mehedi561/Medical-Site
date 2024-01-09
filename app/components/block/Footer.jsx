import React from "react";
import s6 from "../../../public/Screenshot_6.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="pt-10  bg-blue-800 text-white py-20">
        <div className="container mx-auto  grid grid-cols-2 gap-5 p-2 md:flex md:justify-between">
          <div>
            <h2 className="text-2xl py-2 font-semibold">Mec Healfy</h2>
            <p className="text-sm   py-2">Join Mec Healfy</p>
            <div>
              <img src={""} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Company</h2>
            <p className="text-sm my-2">About Us</p>
            <p className="text-sm my-2">Work</p>
            <p className="text-sm my-2">Latest News</p>
            <p className="text-sm my-2">Careers</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Product</h2>
            <p className="text-sm my-2">Prototype</p>
            <p className="text-sm my-2">Plan & Pricing</p>
            <p className="text-sm my-2">Customers</p>
            <p className="text-sm my-2">Integrations</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Support</h2>
            <p className="text-sm my-2">Help Desk</p>
            <p className="text-sm my-2">Sales</p>
            <p className="text-sm my-2">Become a Partner</p>
            <p className="text-sm my-2">Developers</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="text-sm my-2">Near Your Home, 24/7</p>
            <p className="text-sm my-2">+8801791111111</p>
            <p className="text-sm my-2">+8801600000000</p>
            <div className="space-x-5 flex">
              <a
                href="https://www.facebook.com/profile.php?id=100007217809134"
                target="_blank">
                {" "}
              </a>
              <a href="https://www.instagram.com/sifat10/" target="_blank">
                {" "}
              </a>
              <a href="https://github.com/Sifat-E-Sadakin" target="_blank">
                {" "}
              </a>
            </div>
            <p className="text-sm my-2"></p>
          </div>
        </div>
        <hr className="text-white bg-white my-5 container mx-auto" />

        <div className="container mx-auto md:flex justify-between">
          <p>
            <small>
              @ <b>Mec Healfy.</b> All Right Reserved
            </small>
          </p>
          <p>
            Powered by <b>Mec Healfy.</b>
          </p>
        </div>
        <Image className="w-96 mx-auto" src={s6} />
      </div>
    </div>
  );
};

export default Footer;
