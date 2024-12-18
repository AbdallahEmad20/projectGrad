import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderCenter = ({ toggle, navBar }) => {
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-7">
          <li>
            <Link
              to="/"
              className={`${
                navBar ? "text-main" : "text-white"
              } capitalize hover:text-black`}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`${
                navBar ? "text-main" : "text-white"
              } capitalize hover:text-black`}
            >
              hunger in egypt
            </Link>
          </li>
          <li>
            <Link
              to="/our-work"
              className={`${
                navBar ? "text-main" : "text-white"
              } capitalize hover:text-black`}
            >
              our work
            </Link>
          </li>
          <li>
            <Link
              to="/WhoweAre"
              className={`${
                navBar ? "text-main" : "text-white"
              } capitalize hover:text-black`}
            >
              We are
            </Link>
          </li>

          <li>
            <Link
              to="/our-story"
              className={`${
                navBar ? "text-main" : "text-white"
              } capitalize hover:text-black`}
            >
              our story
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`${
                navBar ? "text-main" : "text-white"
              } capitalize hover:text-black`}
            >
              take action
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                navBar ? "text-main" : "text-white"
              } capitalize hover:text-black`}
            >
              about us
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        className={`bg-slate-50 absolute z-20 ${
          toggle ? "top-[80px]" : "-top-[400px]"
        } w-full rounded py-2 duration-300 md:hidden`}
      >
        <ul className="flex flex-col items-center gap-7">
          <li>
            <Link to="/" className="text-main capitalize hover:text-black">
              home
            </Link>
          </li>
          <li>
            <Link to="/" className="text-main capitalize hover:text-black">
              hunger in egypt
            </Link>
          </li>
          <li>
            <Link
              to="/our-work"
              className="text-main capitalize hover:text-black"
            >
              our work
            </Link>
          </li>
          <li>
            <Link
              to="/our-story"
              className={`${
                navBar ? "text-main" : "text-white"
              } capitalize hover:text-black`}
            >
              our story
            </Link>
          </li>
          <li>
            <Link to="/WhoweAre" className="text-main capitalize hover:text-black">
              we are
            </Link>
          </li>
          <li>
            <Link to="/" className="text-main capitalize hover:text-black">
              take action
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-main capitalize hover:text-black">
              about us
            </Link>
          </li>
          <li>
            <Link
              to="/donate"
              className="capitalize text-white bg-main px-10 py-1 rounded-2xl text-sm hover:border-main border-main hover:bg-white hover:text-main border duration-300"
            >
              donate
            </Link>
          </li>
          <li>
            <Link
              to="/create-account"
              className="capitalize text-white bg-green-500 px-10 py-1 rounded-2xl text-sm hover:border-main border-main hover:bg-white hover:text-main border duration-300"
            >
              sign up
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

HeaderCenter.propTypes = {
  toggle: PropTypes.bool,
  navBar: PropTypes.bool,
};

export default HeaderCenter;
