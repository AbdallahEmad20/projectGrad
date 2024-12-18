
import photo1 from "../assets/Doante.jpg"
import bgWhoweAre from "../assets/bg-whoweAre.png"
import DonationPerson from "../assets/DonationPerson.png"
import Donation1 from"../assets/Donation1 (1).jpg"
import Donation2 from"../assets/Donation2.jpg"
import Donation3 from"../assets/Donation3.jpg"
import whowearepbar from "../assets/whowearebar.webp";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import charity1 from "../assets/charity1.avif"
import charity2 from "../assets/charity2.jpg"
import charity3 from "../assets/charity3.jpg"
import charity4 from "../assets/charity4.jpg"
import charity5 from "../assets/charity1.avif"
import charity6 from "../assets/charity3.jpg"

import { FaCheck } from 'react-icons/fa';
import {FaUsers } from 'react-icons/fa';
const WhoWeAre = () => {
  return (
 
<div>

         <main id="our-work" className="w-full min-h-[270px] mb-[40px]">
            <div className="absolute w-full h-1/2 top-0">
              <div className="h-[350px] w-full  relative">
                <img
                  src={whowearepbar}
                  className="w-full h-full"
                  alt="hero"
                  loading="lazy"
                />
                <div className="absolute w-full h-full top-0 flex items-center justify-center z-10">
                  <div className="flex flex-col items-center">
                    <h2 className="text-white capitalize font-bold text-3xl sm:text-5xl text-center leading-snug md:text-[73px] md:leading-[95.33px]">
                     who we are
                    </h2>
                    <Breadcrumb path1={"about"} />
                  </div>
                </div>
                <div className="w-full h-full bg-black absolute top-0 opacity-30"></div>
              </div>
            </div>
          </main>
    

<div className="px-5 md:px-24  py-[50px]  mb-10">
    <div className="grid grid-cols-1 xl:grid-cols-2  gap-y-6 xl:gap-y-0 gap-x-16">
      {/* Left Image Section */}
      <div
        className="relative "

      >
        <div className="relative h-[400px]">
          {/* Border Effect */}
          <div className="absolute inset-0 border-4 border-main rounded-lg top-0 left-0 right-12 bottom-12"></div>
          {/* Image */}
          <img
            src={photo1}
            alt="About Us"
            className="absolute top-12 left-12 w-[calc(100%-3rem)] h-[calc(100%-3rem)] object-cover rounded-lg"
          />
        </div>
      </div>


      {/* Right Content Section */}
      <div
        className="  justify-center "
        
      >
        <h6 className="relative font-semibold leading-tight inline-block uppercase text-main bg-white pr-3 mb-2 before:absolute before:top-1 before:right-[-40px] before:w-[calc(100%+40px)] before:h-[2px] before:bg-main before:-z-10 after:absolute after:bottom-1 after:right-[-60px] after:w-[calc(100%+60px)] after:h-[2px] after:bg-main after:-z-10">
   who we are
        </h6>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          #1 Digital Solution With{' '}
          <span className="text-main">10 Years</span> Of Experience
        </h1>
        <p className="text-gray-600 mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet.
        </p>
        <p className="text-gray-600 mb-4">
          Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
          stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo
          nonumy clita sit at, sed sit sanctus dolor eos.
        </p>

        <div className="flex flex-wrap mb-6">
      {/* Left Column */}
      <div className="w-full sm:w-1/2 px-2 mb-3 animate-zoom-in" style={{ animationDelay: '0.2s' }}>
        <h5 className="flex items-center mb-3 text-lg font-semibold text-gray-700">
          <FaCheck className="text-main mr-3" /> Award Winning
        </h5>
        <h5 className="flex items-center mb-3 text-lg font-semibold text-gray-700">
          <FaCheck className="text-main mr-3" /> Professional Staff
        </h5>
      </div>

      {/* Right Column */}
      <div className="w-full sm:w-1/2 px-2 mb-3 animate-zoom-in" style={{ animationDelay: '0.4s' }}>
        <h5 className="flex items-center mb-3 text-lg font-semibold text-gray-700">
          <FaCheck className="text-main mr-3" /> 24/7 Support
        </h5>
        <h5 className="flex items-center mb-3 text-lg font-semibold text-gray-700">
          <FaCheck className="text-main mr-3" /> Fair Prices
        </h5>
      </div>
    </div>
        {/* Team Info */}
      
        {/* Button */}
        <a
          href="#"
          className="inline-block bg-main text-white text-sm rounded-full py-3 px-5  transition duration-300"
        >
       Donation Now
        </a>
      </div>
    </div>
  </div>

{/*  start  section 2  */}




<section className=" bg-white px-5 md:px-24  py-[50px]  ">
      {/* Title Section */}
      <div className="text-center  mb-8 lg:mb-16">
        <h2 className="text-3xl relative md:text-4xl font-bold text-main mb-2">
          Support Our Food Donation Drive
        </h2>
        <p className="text-gray-600 mt-2">
          Together, we can make a difference by providing meals to those in need.
        </p>
   
      </div>

      {/* Image Grid Section */}
<div className="">

<button className=" mx-auto block mt-[-20px] mb-[20px] lg:mb-0  lg:mt-[40px] px-6 py-2  border border-main text-main rounded-full hover:bg-main hover:text-white transition">
          Donate Now
        </button>
<div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 ">

<div className="top-[-10px] h-[550px] lg:mt-[-60px] relative group overflow-hidden">
  <img
    src={Donation1}
    alt="Donated Food Packages"
    className="w-[100%] h-[100%] rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:opacity-90 group-hover:brightness-125"
  />
  <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
</div>


<div className="top-[-10px] h-[550px] lg:mt-[20px] relative group overflow-hidden">
  <img
    src={Donation2}
    alt="Donated Food Packages"
    className="w-[100%] h-[100%] rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:opacity-90 group-hover:brightness-125"
  />
  <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
</div>

<div className="top-[-10px] h-[550px] lg:mt-[-60px] relative group overflow-hidden">
  <img
    src={Donation3}
    alt="Donated Food Packages"
    className="w-[100%] h-[100%] rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:opacity-90 group-hover:brightness-120"
  />
  <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
</div>

      </div>
</div>
    </section>








{/*  End section2 */}

{/*  start section 3 */}
  



<div
      className="  w-full bg-main  bg-cover bg-center  px-5 md:px-24  my-[50px]  mb-10"
      style={{ backgroundImage: `url(${bgWhoweAre})` }}
    >


        <div className="grid grid-cols-12 ">

          {/* Left Section */}
          <div
            className="  col-span-12 lg:col-span-8    flex items-center   "
            style={{ animationDelay: '0.3s' }}
          >
         <div className="  py-[30px]">


         <div className="inline-block  rounded-full text-white px-4 py-1  text-sm">
              Why Choose Us
            </div>
            <h1 className="text-white text-3xl md:text-4xl font-bold mt-[15px]">
              We are Best in AI Industry with 10 Years of Experience
            </h1>
            <p className="text-blue-200 mb-6">
              Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor
            </p>
          <div className="mt-[25px]">

          <div className="flex items-center text-white mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-white text-main rounded-full mr-3">
                <FaCheck />
              </div>
              <span>Diam dolor diam ipsum et tempor sit</span>
            </div>
            <div className="flex items-center text-white mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-white text-main rounded-full mr-3">
                <FaCheck />
              </div>
              <span>Diam dolor diam ipsum et tempor sit</span>
            </div>
            <div className="flex items-center text-white mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-white text-main rounded-full mr-3">
                <FaCheck />
              </div>
              <span>Diam dolor diam ipsum et tempor sit</span>
            </div>
          </div>
            {/* Stats Section */}
            <div className="flex flex-wrap gap-4 pt-4 mt-[20px]">
         
              <div className="flex items-center bg-white/10 rounded-md px-8 py-4">
                <FaUsers className="text-white text-3xl" />
                <div className="ml-3">
                  <h2 className="text-white text-2xl font-bold">9999</h2>
                  <p className="text-white text-sm">Project Complete</p>
                </div>
              </div>
              <div className="flex items-center bg-white/10 rounded-md px-8 py-4">
                <FaCheck className="text-white text-3xl" />
                <div className="ml-3">
                  <h2 className="text-white text-2xl font-bold">9999</h2>
                  <p className="text-white text-sm">Project Complete</p>
                </div>
              </div>
            </div>
         </div>
          </div>

          {/* Right Image Section */}

          <div
            className="  col-span-12 lg:col-span-4 md:h-[650px] lg:h-auto   "
            
          >
            <img
              src={DonationPerson}
              alt="Feature"
              className=" h-full  w-[100%] "
            />
          </div>


        </div>


    </div>


{/*  start section 4 */}


<section className=" px-5 md:px-44  py-[50px]">
      <div className="  text-center">
      <p className="text-sm text-main font-semibold mb-2">OUR PARTNERS</p>
        <h2 className="text-3xl font-bold text-main mb-4">
          Organizations Supporting Food Donations
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We collaborate with various partners to provide food donations for
          families in need. Thank you to everyone who contributes to our
          humanitarian mission.
        </p>

        {/* شعارات العملاء */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={charity1}
              alt="Partner 1"
              className="h-[100px]"
            />
          </div>
         
         
          <div className="flex justify-center">
            <img
              src={charity2}
              alt="Partner 1"
              className="h-[100px]"
            />
          </div>
         

          <div className="flex justify-center">
            <img
              src={charity3}
              alt="Partner 1"
              className="h-[100px]"
            />
          </div>
         

          <div className="flex justify-center">
            <img
              src={charity4}
              alt="Partner 1"
              className="h-[100px]"
            />
          </div>
         



         

      
        </div>

        <div className=" flex items-center justify-center  mt-4 space-x-8">

<div className="">
  <img
    src={charity5}
    alt="Partner 1"
    className="h-[100px]"
  />
</div>


<div className="  ">
  <img
    src={charity6}
    alt="Partner 1"
    className="h-[100px]"
  />
</div>

</div>
      </div>
    </section>



</div>
  
  )
}

export default WhoWeAre