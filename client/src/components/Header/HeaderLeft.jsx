import PropTypes from "prop-types";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeaderLeft = ({ toggle, setToggle, navBar }) => {
  return (
    <>
      <div className="flex gap-1">
        <Link
          to="/donate"
          className="capitalize text-white bg-main px-10 py-1 rounded-2xl text-sm hidden md:block hover:border-main border-main hover:bg-white hover:text-main border duration-300"
        >
          donate now
        </Link>
        <Link
          to="/create-account"
          className="capitalize text-white bg-green-400 px-10 py-1 rounded-2xl text-sm hidden md:block hover:border-main border-main hover:bg-white hover:text-main border duration-300"
        >
          sign up
        </Link>
      </div>
      <div className="md:hidden">
        {!toggle ? (
          <IoMenu
            onClick={() => setToggle(!toggle)}
            size={35}
            className={`cursor-pointer ${navBar ? "text-main" : "text-white"}`}
          />
        ) : (
          <IoCloseSharp
            onClick={() => setToggle(!toggle)}
            size={35}
            className={`cursor-pointer ${navBar ? "text-main" : "text-white"}`}
          />
        )}
      </div>
    </>
  );
};

HeaderLeft.propTypes = {
  toggle: PropTypes.bool,
  navBar: PropTypes.bool,
  setToggle: PropTypes.func,
};

export default HeaderLeft;
