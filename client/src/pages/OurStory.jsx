import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ourStory from "../assets/donate3.avif";
import ourStory2 from "../assets/ourstory2.jpg";
import person from "../assets/avatar.png";
import video from "../assets/videos/donateVideo.mp4";
import { IoTimerSharp } from "react-icons/io5";
import { CiHeart, CiFlag1 } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const OurStory = () => {
  return (
    <>
      <main id="our-work" className="w-full min-h-[270px] mb-[40px]">
        <div className="absolute w-full h-1/2 top-0">
          <div className="h-[350px] w-full  relative">
            <img
              src={ourStory}
              className="w-full h-full"
              alt="hero"
              loading="lazy"
            />
            <div className="absolute w-full h-full top-0 flex items-center justify-center z-10">
              <div className="flex flex-col items-center">
                <h2 className="text-white capitalize font-bold text-3xl sm:text-5xl text-center leading-snug md:text-[73px] md:leading-[95.33px]">
                  our story
                </h2>
                <Breadcrumb path1={"our story"} />
              </div>
            </div>
            <div className="w-full h-full bg-black absolute top-0 opacity-30"></div>
          </div>
        </div>
      </main>
      <div className="py-10 paddingX flex items-center gap-10 flex-col md:flex-row">
        <div className="w-full md:w-1/2 rounded">
          <video controls width="640" height="360" className="rounded">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full md:w-1/2 text-[#4f4f4f] flex flex-col gap-4 items-center md:items-start">
          <h3 className="uppercase text-3xl font-bold">
            Video About Our Story
          </h3>
          <p className="text-center md:text-start">
            Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Etiam
            porta sem malesuada magna mollis euismod. Vestibulum id ligula porta
            felis euismod semper. Vestibulum id ligula porta felis euismod
            semper. Integer posuere erat a ante venenatis dapibus posuere velit
            aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit.
            Donec sed odio dui. Nulla vitae elit libero.
          </p>
          <button className="bg-main text-white p-2 rounded capitalize border border-main hover:bg-white hover:text-main duration-300">
            learn more
          </button>
        </div>
      </div>
      <div className="paddingX bg-[#f5f5f5] py-10">
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="card text-[#333c44] flex flex-col items-center gap-5 shadow-md hover:scale-95 duration-150 p-2">
            <IoTimerSharp
              size={50}
              className="bg-[#3e3e3e] text-[#62caf5] p-2 rounded-full"
            />
            <h4 className="capitalize text-2xl">Amet Pellentesque Tristique</h4>
            <p className="text-sm text-gray-400 text-center">
              Cras mattis consectetur purus sit amet fermentum. Donec
              ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
              libero, a pharetra augue. Cum sociis natoque.
            </p>
          </div>
          <div className="card text-[#333c44] flex flex-col items-center gap-5 shadow-md hover:scale-95 duration-150 p-2">
            <CiHeart
              size={50}
              className="bg-[#3e3e3e] text-[#62caf5] p-2 rounded-full"
            />
            <h4 className="capitalize text-2xl">Purus Sem Pharetra</h4>
            <p className="text-sm text-gray-400 text-center">
              Cras mattis consectetur purus sit amet fermentum. Donec
              ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
              libero, a pharetra augue. Cum sociis natoque.
            </p>
          </div>
          <div className="card text-[#333c44] flex flex-col items-center gap-5 shadow-md hover:scale-95 duration-150 p-2">
            <CiFlag1
              size={50}
              className="bg-[#3e3e3e] text-[#62caf5] p-2 rounded-full"
            />
            <h4 className="capitalize text-2xl">Consectetur Ridiculus</h4>
            <p className="text-sm text-gray-400 text-center">
              Cras mattis consectetur purus sit amet fermentum. Donec
              ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
              libero, a pharetra augue. Cum sociis natoque.
            </p>
          </div>
        </div>
      </div>
      <div className="paddingX relative h-[400px] flex items-center justify-center">
        <img
          src={ourStory2}
          alt="our-story"
          loading="lazy"
          className=" absolute w-full h-full left-0 -z-10"
        />
        <div className="w-full h-full bg-black absolute top-0 opacity-30 left-0 -z-10"></div>
        <div className="flex flex-col items-center gap-5 z-10 text-white">
          <h5 className="text-3xl font-bold">
            Adipiscing Fringilla Ipsum Fermentum
          </h5>
          <p className="text-center">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Maecenas sed diam eget risus varius blandit sit amet non magna.{" "}
            <br /> Sed posuere consectetur est at lobortis. Sed posuere
            consectetur est at lobortis. <br /> Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo
            sit amet risus.
          </p>
          <button className="bg-main text-white p-2 rounded capitalize border border-main hover:bg-white hover:text-main duration-300">
            donate now
          </button>
        </div>
      </div>
      <div className="paddingX">
        <h4 className="text-center border-b-4 border-[#f3f3f3] text-3xl font-semibold py-4 capitalize">
          Meet The Team
        </h4>
        <div className="cards py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="card p-2 shadow-lg hover:-translate-y-10 duration-200 ">
            <img
              src={person}
              className="w-72 h-72 mb-2 mx-auto rounded hover:scale-105 duration-150"
              alt="person"
              loading="lazy"
            />
            <div className="text-center flex flex-col gap-1">
              <strong className="text-[#3f3d3c] capitalize">
                mohamed youssef
              </strong>{" "}
              <br />
              <small className="capitalize">mern stack developer</small>
              <p className="text-sm text-gray-400">
                Curabitur blandit tempus porttitor. Sed posuere consectetur est
                at lobortis. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Donec ullamcorper nulla non metus auctor.
              </p>
              <div className="socail flex gap-2 items-center mx-auto p-2">
                <a href="">
                  {" "}
                  <FaFacebookF
                    size={25}
                    className="bg-blue-400 text-white p-1 rounded-full"
                  />
                </a>
                <a href="">
                  {" "}
                  <FaLinkedinIn
                    size={25}
                    className="bg-blue-600 text-white p-1 rounded-full"
                  />
                </a>
                <a href="">
                  {" "}
                  <FaWhatsapp
                    size={25}
                    className="bg-green-400 text-white p-1 rounded-full"
                  />
                </a>

                <a href="">
                  {" "}
                  <FaGithub
                    size={25}
                    className="bg-main text-white p-1 rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="card p-2 shadow-lg hover:-translate-y-10 duration-200 ">
            <img
              src={person}
              className="w-72 h-72 mb-2 mx-auto rounded hover:scale-105 duration-150"
              alt="person"
              loading="lazy"
            />
            <div className="text-center flex flex-col gap-1">
              <strong className="text-[#3f3d3c] capitalize">
                mohamed youssef
              </strong>{" "}
              <br />
              <small className="capitalize">mern stack developer</small>
              <p className="text-sm text-gray-400">
                Curabitur blandit tempus porttitor. Sed posuere consectetur est
                at lobortis. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Donec ullamcorper nulla non metus auctor.
              </p>
              <div className="socail flex gap-2 items-center mx-auto p-2">
                <a href="">
                  {" "}
                  <FaFacebookF
                    size={25}
                    className="bg-blue-400 text-white p-1 rounded-full"
                  />
                </a>
                <a href="">
                  {" "}
                  <FaLinkedinIn
                    size={25}
                    className="bg-blue-600 text-white p-1 rounded-full"
                  />
                </a>
                <a href="">
                  {" "}
                  <FaWhatsapp
                    size={25}
                    className="bg-green-400 text-white p-1 rounded-full"
                  />
                </a>

                <a href="">
                  {" "}
                  <FaGithub
                    size={25}
                    className="bg-main text-white p-1 rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="card p-2 shadow-lg hover:-translate-y-10 duration-200 ">
            <img
              src={person}
              className="w-72 h-72 mb-2 mx-auto rounded hover:scale-105 duration-150"
              alt="person"
              loading="lazy"
            />
            <div className="text-center flex flex-col gap-1">
              <strong className="text-[#3f3d3c] capitalize">
                mohamed youssef
              </strong>{" "}
              <br />
              <small className="capitalize">mern stack developer</small>
              <p className="text-sm text-gray-400">
                Curabitur blandit tempus porttitor. Sed posuere consectetur est
                at lobortis. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Donec ullamcorper nulla non metus auctor.
              </p>
              <div className="socail flex gap-2 items-center mx-auto p-2">
                <a href="">
                  {" "}
                  <FaFacebookF
                    size={25}
                    className="bg-blue-400 text-white p-1 rounded-full"
                  />
                </a>
                <a href="">
                  {" "}
                  <FaLinkedinIn
                    size={25}
                    className="bg-blue-600 text-white p-1 rounded-full"
                  />
                </a>
                <a href="">
                  {" "}
                  <FaWhatsapp
                    size={25}
                    className="bg-green-400 text-white p-1 rounded-full"
                  />
                </a>

                <a href="">
                  {" "}
                  <FaGithub
                    size={25}
                    className="bg-main text-white p-1 rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
