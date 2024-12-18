import PropTypes from "prop-types";
import logo from "../../assets/loaf white.png";
import logo2 from "../../assets/loaf color.png";

const HeaderRight = ({ navBar }) => {
  return (
    <div>
      <img
        src={!navBar ? logo : logo2}
        loading="lazy"
        className="h-[70px] rounded"
        alt="logo"
      />
    </div>
  );
};

HeaderRight.propTypes = {
  navBar: PropTypes.string,
};

export default HeaderRight;
