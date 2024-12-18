import { Link } from "react-router-dom";
import loginPic from "../assets/login.png";
import { Input } from "antd";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useEffect } from "react";

const Login = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <>
      <div className="min-h-screen bg-main text-gray-900 flex justify-center p-5">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 rounded">
          <div className="lg:w-1/2 xl:w-5/12 p-3">
            <div className="flex items-center justify-center flex-col">
              <h3 className="text-4xl font-semibold text-main py-3">
                LoafOfLife
              </h3>
            </div>
            <div className=" flex flex-col items-center">
              <div className="w-full flex-1 mt-5">
                <div className="flex flex-col items-center">
                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[#c0fecf] text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Sign In with Google</span>
                  </button>
                </div>

                <div className="my-10 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign In with E-mail
                  </div>
                </div>
                <form action="">
                  <div className="mx-auto max-w-xs flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="capitalize">
                        email:
                      </label>
                      <Input
                        id="email"
                        size="large"
                        placeholder="Enter your Email"
                        prefix={<MdOutlineMail />}
                        className="p-3 outline-none border-main hover:border-main"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="password" className="capitalize">
                        password:
                      </label>
                      <Input
                        id="password"
                        size="large"
                        placeholder="Enter your Password"
                        prefix={<RiLockPasswordLine />}
                        className="p-3 outline-none border-main hover:border-main"
                      />
                    </div>

                    <button className="mt-3 tracking-wide font-semibold bg-main text-white-500 w-full py-4 rounded-lg hover:bg-[#185e72] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      <svg
                        className="w-6 h-6  text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="mx-3 text-white">Login </span>
                    </button>
                    <p className="mt-6 text-xs text-gray-600 text-center">
                      I agree to abide by Cartesian Kinetics{" "}
                      <a href="#" className="text-blue-400">
                        Terms of Service
                      </a>{" "}
                      and its{" "}
                      <a href="#" className="text-blue-400">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </form>
                <p className="text-center text-sm py-2">
                  Don’t have an account?{" "}
                  <Link
                    to="/create-account"
                    className="text-blue-400 capitalize font-semibold"
                  >
                    create-account
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#c0fecf] text-center hidden lg:flex rounded">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat rounded"
              style={{ backgroundImage: `url(${loginPic})` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
