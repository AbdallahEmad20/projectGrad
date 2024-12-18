/* eslint-disable no-irregular-whitespace */
import hero from "../assets/hero.jpg";
import AboutPhoto from "../assets/Rectangle special.png";
//  images section three
import imageJoin1 from "../assets/imageHome1.png";
import imageJoin2 from "../assets/imageHome2.png";
import imageJoin4 from "../assets/imageHome3.png";
import imageJoin3 from "../assets/imageHome4.png";
import Card1Image from "../assets/imageHome5.png";
import CardImage2 from "../assets/imageHome6.png";
import CardImage3 from "../assets/imageHome8.png";
//  section photos
import imagesec1 from "../assets/Rectangle 22.png";
import imagesec2 from "../assets/Rectangle 8.png";
import imagesec3 from "../assets/Rectangle 10.png";
import imagesec4 from "../assets/Rectangle 12.png";
import imagesec5 from "../assets/Rectangle 13.png";
import imagesec6 from "../assets/Rectangle 14.png";
import imagesec7 from "../assets/Rectangle 16.png";
import imagesec8 from "../assets/Rectangle 17.png";
import CardInfo from "../components/cardInfo/CardInfo";
import GiftScroll from "../components/GiftsScroll/GiftScroll";
import { useEffect } from "react";

const cardsData = [
  {
    id: 1,
    title: "Food Rescue",
    description:
      "We intercept surplus food from becoming waste and redirect it to feed those experiencing hunger. This proactive approach helps in reducing food waste while providing meals to the underprivileged.",
    image: CardImage3,
  },
  {
    id: 2,
    title: "Food Collection",
    description:
      "We gather nutritious and perfectly good food from restaurants, supermarkets, and farms before it goes to waste. Our team is trained to transport the food safely to ensure it reaches those in need in excellent condition.",
    image: CardImage2,
  },
  {
    id: 3,
    title: "Food Distribution",
    description:
      "We distribute the collected food to individuals and families in need across Egypt. Our distribution efforts include direct deliveries to homes in collaboration with local charities and community centers.",
    image: Card1Image,
  },
];
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main id="hero" className="h-screen w-full ">
        <div className="h-full w-full absolute top-0">
          <img src={hero} className="w-full h-full" alt="hero" loading="lazy" />
          <div className="absolute w-full h-full top-0 flex items-center justify-center z-10">
            <h2 className="text-white font-bold text-2xl sm:text-5xl text-center leading-snug md:text-[73px] md:leading-[95.33px]">
              EGYPT’s first and largest <br /> food rescue organization
            </h2>
          </div>
          <div className="w-full h-full bg-black absolute top-0 opacity-30"></div>
        </div>
      </main>

      {/* //  start About Section */}
      <section className=" grid grid-cols-1 lg:grid-cols-2   px-5 md:px-24   py-[80px]    gap-8 xl:gap-16  p-8 ">
        <div className="  h-[400px] ">
          <img
            src={AboutPhoto}
            alt="Donations"
            className="rounded-xl h-[100%] w-[100%] "
          />
        </div>

        <div className=" text-main xl:h-[400px]  flex items-center  ">
          <div className=" ">
            <h2 className=" text-xl md:text-4xl text-main   font-[700] mb-[40px] text-primary   ">
              We Believe that no Egyptian <br /> should go hungry.
            </h2>
            <p className=" text-sm md:text-md mb-[20px] w-[400]  text-[#060609] font-medium xl:w-[450px] leading-[25px]">
              Loaf Of Life rescues perfectly good, nutritious food that would
              otherwise go to waste and delivers it for free to Egypt
              experiencing hunger. Our mission is to combat food insecurity by
              redistributing surplus food from restaurants, supermarkets, and
              farms directly to those in need. By partnering with charities, we
              ensure that no meal goes unshared and that every individual has
              access to healthy and wholesome food.
            </p>
            <button className="hover:border-main border-main hover:bg-white hover:text-main border duration-300  text-md h-[58px] w-[198px] mt-[20px] border-2  font-[400] border-solid bg-main text-white rounded-full  transition duration-300">
              About Us
            </button>
          </div>
        </div>
      </section>

      {/*  Three Section */}

      <section className=" xl:py-[130px] py-[70px]  bg-[#F4F5FA]  ">
        <div className=" px-5 md:px-24 ">
          <div className="grid   grid-cols-12   xl:h-[500px]">
            <div className="   grid grid-cols-12  gap-2 xl:gap-0 col-span-12 lg:col-span-3 ">
              <img
                className=" col-span-6 rounded-lg"
                src={imageJoin1}
                alt="photo"
                width={"100%"}
                height={"100%"}
              />

              <img
                className=" col-span-6  lg:mt-[300px]  xl:mt-[320px]  xl:h-[200px] rounded-lg  "
                src={imageJoin4}
                alt="photojoin"
                height={"100px"}
                width={"100%"}
              />
            </div>

            <div className="flex flex-col  lg:col-span-6   col-span-12  items-center p-8  space-y-8 ">
              <h2 className=" text-main  text-2xl xl:text-3xl xl:w-[446px] xl:leading-[40px] font-[600]  text-center  ">
                Join us in the journey to empower communities and transform
                lives.
              </h2>
              <p className="text-6xl xl:text-[120px] font-[600] text-main">
                139,364+
              </p>
              <p className="text-paragraph text-sm text-main">
                people already joined
              </p>
              <button className="w-[198px] hover:border-main border-main hover:bg-white hover:text-main border duration-300 h-[66px]  text-[20px]  bg-main   text-white  text-md  font-[400] rounded-full ">
                Donate now
              </button>
            </div>

            <div className="   grid grid-cols-12  gap-2 xl:gap-0 col-span-12 lg:col-span-3  ">
              <img
                className=" col-span-6  h-[100%] lg:h-[185px]   lg:col-span-10 "
                src={imageJoin2}
                alt="photo"
                width={"100%"}
                height={"100%"}
              />

              <img
                className="col-span-6   lg:col-span-7  lg:mt-[60px]    lg:h-[240px] rounded-lg    "
                src={imageJoin3}
                alt="photojoin"
                height={"100px"}
                width={"100%"}
              />

              {/* border-2 border-red-800 h-[100%] xl:h-[150px] lg:h-auto col-span-12   rounded-lg xl:mt-[50px] */}
            </div>
          </div>
        </div>
      </section>

      {/*  start div scroll */}

      <GiftScroll />
      {/*  start section */}

      <section className="   px-5 md:px-24  py-[80px]  text-center">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 mb-[20px] ">
          <div className="  md:mb-[30px]">
            <h2 className="text-xl md:text-4xl xl:w-[317px] xl:text-[60px]  xl:leading-[70px]  font-[600] mb-6 text-main">
              EXPLORE <br />
              Our work
            </h2>
          </div>
          <div className="">
            <p className=" text-sm text-left xl:text-[18px] leading-[29px]  md:text-md  font-[600] mb-6 text-[#060609] xl:w-[600px]">
              Discover how we’re making a difference and learn how you can get
              involved. Together, we can create a hunger-free future for Egypt.
            </p>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1  md:grid-cols-2  lg:grid-cols-3  ">
          {cardsData.map((card) => (
            <CardInfo
              key={card.id} // تحديد مفتاح فريد
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </section>

      {/* End Section */}

      <div className="bg-[#f4f5fa] py-[80px] px-5 md:px-24 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[48px]  font-600 text-main mb-8">
            Hunger In Egypt
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 py-[50px]  gap-8">
            {/* Card 1 */}
            <div className="space-y-2 border-r-4 border-r-main py-[25px]">
              <p className="text-6xl font-[600] text-main mb-[30px]">32.5%</p>
              <p className="text-[20px] leading-[40px] text-[#060609] font-[400]">
                Approximately 32.5% of Egyptians live below the poverty line,
                struggling to make ends meet.
              </p>
            </div>

            {/* Card 2 */}

            <div className="space-y-2 border-r-4 border-r-main py-[25px]">
              <p className="text-6xl font-[600] text-main mb-[30px]">9.6M</p>
              <p className="text-[20px] leading-[40px] text-[#060609] font-[400]">
                Nearly 9.6 million Egyptians are food insecure, meaning they
                struggle to feed themselves and their families.
              </p>
            </div>

            {/* Card 3 */}

            <div className="space-y-2 border-r-4 border-r-main py-[25px]">
              <p className="text-6xl font-[600] text-main mb-[30px]">1 in 5</p>
              <p className="text-[20px] leading-[40px] text-[#060609] font-[400]">
                Around 20% of children under 5 years old suffer from stunted
                growth due to malnutrition.
              </p>
            </div>

            {/* Card 4 */}
            <div className="space-y-2 border-r-4 border-r-main py-[25px]">
              <p className="text-6xl font-[600] text-main mb-[30px]">20%</p>
              <p className="text-[20px] leading-[40px] text-[#060609] font-[400]">
                Around 20% more people rely on food assistance programs due to
                economic challenges and rising living costs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className=" px-5 md:px-24  py-[80px]  mb-10 ">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="relative overflow-hidden rounded-3xl shadow-xl xl:mt-[80px] h-[350px] group">
            <img
              src={imagesec1}
              alt="Chari Charity Gala"
              className="w-full  h-full object-cover"
            />
            <div className="absolute bottom-0 right-0  w-full  h-[30%] bg-black bg-opacity-40 translate-y-full group-hover:translate-y-0  transition-transform duration-500 ease-in-out flex items-center justify-center ">
              <p className="text-white text-[20px] font-[600] text-center ">
                Ensure effective resource distribution
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden   rounded-3xl  shadow-lg  h-[350px] group">
            <img
              src={imagesec2}
              alt="Chari Charity Gala"
              className="w-full h-full object-cover"
            />
            <div className="absolute  bottom-0 right-0  w-full  h-[30%] bg-black bg-opacity-40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
              <p className="text-white text-[20px] font-[600] text-center ">
                {" "}
                Connect donors with recipients
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden   rounded-3xl  shadow-lg  h-[350px] group">
            <img
              src={imagesec3}
              alt="Chari Charity Gala"
              className="w-full h-full object-cover"
            />
            <div className="absolute  bottom-0 right-0   h-[30%] w-full bg-black bg-opacity-40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
              <p className="text-white text-[20px] font-[600] text-center ">
                {" "}
                Donate food easily
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden r  rounded-3xl  shadow-xl xl:mt-[80px] h-[350px] group">
            <img
              src={imagesec4}
              alt="Chari Charity Gala"
              className="w-full  h-full object-cover"
            />
            <div className="absolute    bottom-0 right-0   h-[30%]  w-full bg-black bg-opacity-40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
              <p className="text-white text-[20px] font-[600] text-center ">
                Increase transparency
                <br />
                in donations
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden   rounded-3xl  shadow-lg   h-[350px] xl:mt-[10px] group">
            <img
              src={imagesec5}
              alt="Chari Charity Gala"
              className="w-full h-full object-cover"
            />
            <div className="absolute    bottom-0 right-0   h-[30%]  w-full bg-black bg-opacity-40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
              <p className="text-white text-[20px] font-[600] text-center ">
                {" "}
                Support local charitable associations
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden   rounded-3xl  shadow-lg xl:mt-[-80px]  h-[350px] group">
            <img
              src={imagesec6}
              alt="Chari Charity Gala"
              className="w-full h-full object-cover"
            />
            <div className="absolute    bottom-0 right-0   w-full h-[30%] bg-black bg-opacity-40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
              <p className="text-white text-[20px] font-[600] text-center ">
                {" "}
                Simplify the donation process
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-lg xl:mt-[-80px]  h-[350px] group">
            <img
              src={imagesec7}
              alt="Chari Charity Gala"
              className="w-full h-full object-cover"
            />
            <div className="absolute    bottom-0 right-0   w-full  h-[30%] bg-black bg-opacity-40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
              <p className="text-white text-[20px] font-[600] text-center ">
                {" "}
                Track your donation impact
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden   rounded-3xl  shadow-lg   h-[350px] xl:mt-[10px] group">
            <img
              src={imagesec8}
              alt="Chari Charity Gala"
              className="w-full  h-full object-cover"
            />
            <div className="absolute    bottom-0 right-0  w-full   h-[30%] bg-black bg-opacity-40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
              <p className="text-white text-[20px] font-[600] text-center ">
                need tody
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  End Section */}
    </>
  );
};

export default Home;
