import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import footerLogo from "../../assets/DESIGN 1.png";
const Footer = () => {
  return (
    <footer className="bg-main flex flex-col gap-5 text-white px-5 md:px-24 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <p className="w-full md:w-1/2">
          Loaf Of Life rescues perfectly good, nutritious food that would
          otherwise go to waste and delivers it for free to Egypt s experiencing
          hunger. Our mission is to combat food insecurity by redistributing
          surplus food from restaurants, supermarkets, and farms directly to
          those in need. By partnering with charities, we ensure that no meal
          goes unshared and that every individual has access to healthy and
          wholesome food.
        </p>
        <div className="w-full md:w-1/2 flex justify-between items-baseline gap-5 flex-wrap">
          <div>
            <h3 className="font-bold text-3xl capitalize mb-5">company</h3>
            <ul className="capitalize text-[#4f6a74] flex flex-col gap-2">
              <li>
                <a href="#" className="hover:text-green-300 duration-300">
                  about us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 duration-300">
                  contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 duration-300">
                  donate{" "}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-3xl capitalize mb-5">resources</h3>
            <ul className="capitalize text-[#4f6a74] flex flex-col gap-2">
              <li>
                <a href="#" className="hover:text-green-300 duration-300">
                  security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 duration-300">
                  global
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 duration-300">
                  charts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 duration-300">
                  otc
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-3xl capitalize mb-5">contacts</h3>
            <ul className="capitalize text-[#4f6a74] flex flex-col gap-2">
              <li>
                <a href="#" className="hover:text-green-300 duration-300">
                  questions or feedbACK
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-300 duration-300">
                  we,d love to hear from you
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-5 flex items-center justify-center md:justify-between flex-wrap gap-10">
        <div className="flex flex-col gap-5">
          <ul className="flex gap-3 items-center">
            <li>
              <a href="#">
                <FaInstagram size={35} className=" text-gray-300" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookF size={35} className=" text-gray-300" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter size={35} className=" text-gray-300" />
              </a>
            </li>
          </ul>
          <p className="">
            Copyright © 2024 for Loaf Of Life. All rights reserved.
          </p>
        </div>
        <div>
          <img src={footerLogo} alt="logo" loading="lazy" className="w-[150px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
