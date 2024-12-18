import { useState } from "react";
import HeaderRight from "./HeaderRight";
import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      className={`flex items-center justify-between h-[80px] duration-300 md:paddingX sticky top-0 z-20 ${
        navBar ? "bg-white" : "bg-transparent"
      }`}
    >
      <HeaderRight navBar={navBar} />
      <HeaderCenter toggle={toggle} navBar={navBar} />
      <HeaderLeft toggle={toggle} setToggle={setToggle} navBar={navBar} />
    </header>
  );
};

export default Header;
