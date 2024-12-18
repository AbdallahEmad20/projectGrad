import AboutPhoto from "../assets/workOur.jpeg";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import imgSec1 from "../assets/imageAbout1.webp";
import imgSec2 from "../assets/imageAbout2.webp";
import imgSec3 from "../assets/imageAbout3.webp";
import icon1 from "../assets/iconAbout1.svg";
import icon2 from "../assets/iconAbout2.svg";
import icon3 from "../assets/iconAbout3.svg";
import bannerAbout from "../assets/bannerAbout.jpg";
import ImageAbout7 from "../assets/imageAbout7.webp";
import ImageAbout8 from "../assets/imageAbout8.jpg";
import ImageAbout9 from "../assets/imageAbout9.jpg";

import CardAbout from "../components/CardAbout/CardAbout";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cardsData = [
    {
      id: 1,
      title: "Food Rescue",
      description:
        "We intercept surplus food from becoming waste and redirect it to feed those experiencing hunger. This proactive approach ",
      image: icon1,
      bg: "white",
      HeadTxt: "#092f3d",
      paraTxt: "#33335b",
    },
    {
      id: 2,
      title: "Food Collection",
      description:
        "We intercept surplus food from becoming waste and redirect it to feed those experiencing hunger. This proactive approach ",
      image: icon2,
      bg: "#092f3d",
      HeadTxt: "#fff",
      paraTxt: "#fff",
    },
    {
      id: 3,
      title: "Food Distribution",
      description:
        "We intercept surplus food from becoming waste and redirect it to feed those experiencing hunger. This proactive approach ",
      image: icon3,
      bg: "white",
      HeadTxt: "#092f3d",
      paraTxt: "#33335b",
    },
  ];
  return (
    <>
      <main id="our-work" className="w-full min-h-[270px] mb-[40px]">
        <div className="absolute w-full h-1/2 top-0">
          <div className="h-[350px] w-full  relative">
            <img
              src={AboutPhoto}
              className="w-full h-full"
              alt="hero"
              loading="lazy"
            />
            <div className="absolute w-full h-full top-0 flex items-center justify-center z-10">
              <div className="flex flex-col items-center">
                <h2 className="text-white capitalize font-bold text-3xl sm:text-5xl text-center leading-snug md:text-[73px] md:leading-[95.33px]">
                  About US
                </h2>
                <Breadcrumb path1={"about"} />
              </div>
            </div>
            <div className="w-full h-full bg-black absolute top-0 opacity-30"></div>
          </div>
        </div>
      </main>

      <section className=" px-5 md:px-24  py-[30px]  mb-10  ">
        <div className=" grid grid-cols-1 xl:grid-cols-2  gap-y-6 xl:gap-y-0 gap-x-16  bg-white ">
          <div className=" relative   mb-[100px]  ">
            <img
              src={imgSec1}
              alt="Kids with masks"
              className=" shadow-lg h-[full] w-full max-w-[550px] mx-auto object-contain"
            />

            <div className=" absolute  left-[50%]  translate-x-[-50%]  bottom-[-30px] shadow-lg  sm:bottom-[-50px] w-full h-[100px]  sm:h-[120px] flex items-center justify-center gap-6  bg-white  px-4 sm:px-0  max-w-[350px]  object-contain  ">
              <div className="   h-[60px] xl:w-[70px]  w-[60px]  xl:h-[70px] bg-[#F4F4F9]  flex  items-center justify-center ">
                <img src={icon1} alt="icon" />
              </div>

              <div className=" xl:w-[70px] xl:h-[70px] w-[60px] h-[60px] bg-[#F4F4F9]  flex  items-center justify-center ">
                <img src={icon2} alt="icon" />
              </div>

              <div className="  w-[60px] xl:w-[70px]  h-[60px] xl:h-[70px] bg-[#F4F4F9]  flex  items-center justify-center ">
                <img src={icon3} alt="icon" />
              </div>
            </div>
          </div>

          {/* Section Right - Text and Numbers */}
          <div className="   flex items-center ">
            <div className=" w-full">
              <h5 className="text-sm font-[600] text-gray-500 uppercase tracking-wide">
                Our Results
              </h5>
              <h2 className=" text-3xl md:text-5xl font-bold text-main  mt-4">
                Learn about the <br /> change and impacts
              </h2>
              <p className=" text-[18px] leading-[30px] text-[#33335b] font-[400] mt-4 xl:w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit seddo
                eiusmod tempor incididunt ut labore et.
              </p>

              <div className=" grid grid-cols-2   sm:flex-row  mt-8 border-solid border-2 shadow-sm h-[100px]   sm:w-[400px] ">
                <div className="flex items-center border-r-2   p-4 h-[60px] w-full  my-auto  ">
                  <span className=" text-xl sm:text-4xl font-bold text-main">
                    100+
                  </span>
                  <p className=" text-md text-[#1a1a42] mt-1 ml-2  sm:text-lg">
                    Schools Built
                  </p>
                </div>
                <div className="flex items-center  pl-6 w-full h-[60px]  my-auto">
                  <span className=" text-xl sm:text-4xl font-bold text-main ">
                    500+
                  </span>
                  <p className=" text-md text-[#1a1a42] mt-1 ml-2  sm:text-lg">
                    Houses Built
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Big Section contain Two sections */}

      <section className="bg-main text-white flex items-center justify-center  h-[50vh]  md:h-[100vh] ">
        {/* Heading */}
        <h1 className=" text-center text-2xl md:text-[54px] font-bold leading-[1.2em] ">
          Capturing the heart of our <br /> CharityFlow s journey <br /> in
          images
        </h1>

        {/* Image Section */}
      </section>

      <section className="bg-white   border-[1px] border-transparent mb-[50px] ">
        <div
          className="   mt-[-100px] md:mt-[-200px] rounded-2xl   mx-auto  h-[300px]  w-[90%]  md:h-[500px] md:w-[80%]     bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerAbout})` }}
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-[20px]  px-[10%]">
          <div className=" overflow-hidden  h-[400px] rounded-2xl ">
            <img
              className="h-full  l rounded-2xl w-full hover:scale-[1.2] transition-all duration-200 ease-in-out"
              src={ImageAbout7}
            />
          </div>

          <div className=" overflow-hidden  h-[400px] rounded-2xl ">
            <img
              className="h-full  rounded-2xl w-full hover:scale-[1.2] transition-all duration-200 ease-in-out"
              src={ImageAbout8}
            />
          </div>

          <div className=" overflow-hidden  h-[400px] rounded-2xl ">
            <img
              className="h-full  w-full  rounded-2xl hover:scale-[1.2] transition-all duration-200 ease-in-out"
              src={ImageAbout9}
            />
          </div>
        </div>
      </section>

      {/*  start sec2 */}

      <section className=" px-5 md:px-24  pt-[30px]  pb-[100px] lg:pb-[50px]  mb-10  bg-[#F4F4F9] ">
        <div className=" grid grid-cols-12  gap-y-10 xl:gap-y-0    ">
          {/* Section Right - Text and Numbers */}
          <div
            className="  pl-10  col-span-12 xl:col-span-6  

 "
          >
            <div className=" w-full">
              <h5 className="text-md font-[600] text-gray-500 uppercase tracking-wide mt-8">
                ABOUT US
              </h5>
              <h2 className=" text-3xl md:text-6xl font-bold text-main  mt-8">
                Learn about our team <br /> of volunteers
              </h2>
              <p className=" text-[20px] leading-[33px]  text-[#33335b] font-[400]  xl:w-[470px] mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>

              <div className=" mt-8">
                {/* Checklist Section */}
                <ul className="space-y-4">
                  {/* Item 1 */}
                  <li className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#F4F4F9] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-indigo-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700 text-[20px]">
                      Excepteur sint occaecat cupidatat non proident
                    </p>
                  </li>

                  {/* Item 2 */}
                  <li className="flex items-center mt-8">
                    <div className="flex items-center justify-center  w-10 h-10 bg-[#F4F4F9] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-indigo-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3  text-gray-700 text-[20px]">
                      Pellentesque elit ullamcorper dignissim
                    </p>
                  </li>
                </ul>

                {/* Button Section */}
                <div className="mt-14">
                  <button className="bg-main text-white w-[150px] h-[70px]">
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section Left - Image */}
          <div
            className=" relative col-span-12 xl:col-span-6  

  "
          >
            <img
              src={imgSec2}
              alt="Kids with masks"
              className=" shadow-lg  h-full w-full max-w-[550px] mx-auto object-contain"
            />

            {/* Section Bottom - Icons */}
            <div className=" absolute      shadow-lg   sm:bottom-[50px]  w-full h-[100px]   flex items-center justify-center gap-6  bg-white  px-4 sm:px-0  max-w-[270px]  object-contain  ">
              <div className="   h-[60px] xl:w-[70px]  w-[60px]  xl:h-[70px] bg-[#F4F4F9]  flex  items-center justify-center ">
                <img src={icon1} alt="icon" />
              </div>
              <div className="">
                <span className=" text-xl sm:text-4xl font-bold text-main ">
                  500+
                </span>
                <p className=" text-md text-[#1a1a42] mt-1 ml-2  sm:text-lg">
                  Houses Built
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  sec3 */}

      <section className=" px-5 md:px-24  py-[50px]  mb-10  ">
        <div className="text-center mb-16">
          <h2 className="text-[20px]   text-main  sm:text-5xl font-[600]  mt-5   ">
            Check Out
            <br />
            Our Impact in Action
          </h2>
          <p className="text-[#163C45E5] xl:w-[700px]   mx-auto mt-5">
            Through our efforts in food collection, distribution, and rescue, we
            turn surplus food into vital meals for those in need. Explore the
            photos below to see the difference we are making in the community.
          </p>
        </div>

        <div className="grid gap-16 grid-cols-1  md:grid-cols-2  lg:grid-cols-3  ">
          {cardsData.map((card) => (
            <CardAbout
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              bg={card.bg}
              HeadTxt={card.HeadTxt}
              paraTxt={card.paraTxt}
            />
          ))}
        </div>
      </section>

      {/*  sec 4 */}

      <section className=" px-5 md:px-24  py-[50px]  mb-10  ">
        <div className="relative bg-main text-white h-[400px] flex items-center w-full">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 "
            style={{ backgroundImage: `url(${imgSec3})` }}
          ></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center w-full justify-between p-8 lg:p-16 ">
            <div className="max-w-lg text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-4">Become a Volunteer</h2>
              <p className="text-lg mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="mt-4 lg:mt-0">
              <button className="flex items-center gap-2 bg-white  text-main px-6 py-3 rounded-lg text-lg font-medium shadow-md transition">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
