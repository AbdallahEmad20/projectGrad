import { Link } from "react-router-dom";
import signupPic from "../assets/signup.png";
import { Input } from "antd";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useEffect } from "react";

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-main text-gray-900 flex justify-center p-5">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 rounded">
          <div className="lg:w-1/2 xl:w-5/12 p-3">
            <div className="flex items-center justify-center flex-col">
              <h3 className="text-4xl font-semibold text-main py-3 capitalize">
                Join Loaf of Life
              </h3>
              <span className="text-sm">
                Enter your information to register with{" "}
                <span className="text-main font-bold">LoafOfLife</span>
              </span>
            </div>
            <div className=" flex flex-col items-center">
              <div className="w-full flex-1 mt-5">
                <form action="">
                  <div className="mx-auto max-w-xs flex flex-col gap-5">
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="fName" className="capitalize">
                          first name:
                        </label>
                        <Input
                          id="fName"
                          size="large"
                          placeholder="first name"
                          prefix={<CiUser />}
                          className="p-3 outline-none border-main hover:border-main"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="lName" className="capitalize">
                          last name:
                        </label>
                        <Input
                          id="lName"
                          size="large"
                          placeholder="last name"
                          prefix={<CiUser />}
                          className="p-3 outline-none border-main hover:border-main"
                        />
                      </div>
                    </div>
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
                      <label htmlFor="Address" className="capitalize">
                        Address:
                      </label>{" "}
                      <Input
                        id="Address"
                        size="large"
                        placeholder="Enter your Address"
                        prefix={<FaRegAddressCard />}
                        className="p-3 outline-none border-main hover:border-main"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="password" className="capitalize">
                        password:
                      </label>
                      <Input.Password
                        id="password"
                        placeholder="Password"
                        className="p-3 outline-none border-main hover:border-main"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        prefix={<RiLockPasswordLine />}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="C-password" className="capitalize">
                        Confirm Password:
                      </label>
                      <Input.Password
                        id="C-password"
                        placeholder="Confirm Password"
                        className="p-3 outline-none border-main hover:border-main"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        prefix={<RiLockPasswordLine />}
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
                      <span className="mx-3 text-white">Sign In </span>
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
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-blue-400 capitalize font-semibold"
                  >
                    login
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-green-100 text-center hidden lg:flex rounded">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat rounded-none"
              style={{ backgroundImage: `url(${signupPic})` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
