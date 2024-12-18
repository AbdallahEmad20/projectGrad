import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import hero from "../assets/workOur.jpeg";
import Card1Image from "../assets/imageHome5.png";
import CardImage2 from "../assets/imageHome6.png";
import CardImage3 from "../assets/imageHome8.png";
import charity1 from "../assets/charity1.avif";
import charity2 from "../assets/charity2.jpg";
import charity3 from "../assets/charity3.jpg";
import charity4 from "../assets/charity4.jpg";
import donateNow from "../assets/handDonate.webp";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { LiaUserShieldSolid } from "react-icons/lia";
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

const OurWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main id="our-work" className="w-full min-h-[270px]">
        <div className="absolute w-full h-1/2 top-0">
          <div className="h-[350px] w-full  relative">
            <img
              src={hero}
              className="w-full h-full"
              alt="hero"
              loading="lazy"
            />
            <div className="absolute w-full h-full top-0 flex items-center justify-center z-10">
              <div className="flex flex-col items-center">
                <h2 className="text-white capitalize font-bold text-3xl sm:text-5xl text-center leading-snug md:text-[73px] md:leading-[95.33px]">
                  our work
                </h2>
                <Breadcrumb path1={"our-work"} />
              </div>
            </div>
            <div className="w-full h-full bg-black absolute top-0 opacity-30"></div>
          </div>
        </div>
      </main>

      <section id="" className="px-5 md:px-[100px] py-5 w-full">
        <div className="cards w-full flex flex-col gap-10">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              className={`card flex flex-col gap-10 md:flex-row items-center justify-between p-5 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-10">
                <h4 className="border-b-2 border-main py-2 text-2xl md:text-4xl font-semibold text-main md:w-[300px]">
                  {card.title}
                </h4>
                <p className="text-gray-400">{card.description}</p>
                <button className="capitalize text-white bg-main px-10 py-1 rounded-2xl text-sm  block hover:border-main border-main hover:bg-white hover:text-main border duration-300">
                  donate now
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={card.image}
                  className="w-full h-[300px]"
                  alt={card.title}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="sponsors" className="px-5 md:px-[100px] py-10 w-full">
        <div className="flex flex-col gap-3 capitalize text-center py-5 mb-5">
          <h3 className="font-bold text-3xl">our sponsors</h3>
          <p className="text-gray-400">latest news & event of our schools</p>
        </div>
        <div className="cards flex flex-wrap gap-5 justify-evenly">
          <div className="card flex flex-col items-center justify-center hover:scale-125 duration-300">
            <img
              src={charity1}
              className="h-20 w-20"
              alt="charity1"
              loading="lazy"
            />
            <span className="capitalize font-semibold text-main">
              charity name{" "}
            </span>
          </div>
          <div className="card flex flex-col items-center justify-center hover:scale-125 duration-300">
            <img
              src={charity2}
              className="h-20 w-20"
              alt="charity1"
              loading="lazy"
            />
            <span className="capitalize font-semibold text-main">
              charity name{" "}
            </span>
          </div>
          <div className="card flex flex-col items-center justify-center hover:scale-125 duration-300">
            <img
              src={charity3}
              className="h-20 w-20"
              alt="charity1"
              loading="lazy"
            />
            <span className="capitalize font-semibold text-main">
              charity name{" "}
            </span>
          </div>
          <div className="card flex flex-col items-center justify-center hover:scale-125 duration-300">
            <img
              src={charity4}
              className="h-20 w-20"
              alt="charity1"
              loading="lazy"
            />
            <span className="capitalize font-semibold text-main">
              charity name{" "}
            </span>
          </div>
        </div>
      </section>
      <section className="px-5 md:px-[100px] py-10 my-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-5 justify-center md:justify-between">
          <h3 className="text-5xl font-semibold text-center md:text-start">
            We are here to support <br />{" "}
            <span className="font-serif font-bold text-main">LoafOFLife</span>{" "}
            communities.{" "}
          </h3>
        </div>
        <div className="py-20 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <img
              src={donateNow}
              alt="donateNow"
              className="rounded mx-auto"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col justify-center md:flex-row items-center gap-5 border-b-2 py-10">
              <FaHandHoldingHeart className="bg-main rounded-full h-full p-3 text-white text-6xl md:text-[200px]" />
              <div className="flex flex-col gap-3 text-center md:text-start">
                <h4 className="font-bold capitalize text-2xl">category 1</h4>
                <p className="text-gray-400 font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  unde dignissimos consequatur non, error deserunt voluptate
                  eius ratione quam, doloribus quos vitae est libero quae facere
                  saepe hic magni distinctio.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center md:flex-row items-center gap-5 border-b-2 py-10">
              <FaHeart className="bg-main rounded-full h-full p-3 text-white text-6xl md:text-[200px]" />
              <div className="flex flex-col gap-3 text-center md:text-start">
                <h4 className="font-bold capitalize text-2xl">category 2</h4>
                <p className="text-gray-400 font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  unde dignissimos consequatur non, error deserunt voluptate
                  eius ratione quam, doloribus quos vitae est libero quae facere
                  saepe hic magni distinctio.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center md:flex-row items-center gap-5 border-b-2 py-10">
              <LiaUserShieldSolid className="bg-main rounded-full h-full p-3 text-white text-6xl md:text-[200px]" />
              <div className="flex flex-col gap-3 text-center md:text-start">
                <h4 className="font-bold capitalize text-2xl">category 3</h4>
                <p className="text-gray-400 font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  unde dignissimos consequatur non, error deserunt voluptate
                  eius ratione quam, doloribus quos vitae est libero quae facere
                  saepe hic magni distinctio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
