import React from "react";
import { Squash as Hamburger } from "hamburger-react";

const SideMenu = ({ navOpen, setNavOpen, navBgOn }) => {
  // const handleHamburgerOn = () => {
  //   setNavOpen(true);
  // };
  // const handleHamburgerOff = () => {
  //   setNavOpen(false);
  // };
  const handleHamburger = () => {
    if (!navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className="flex flex-row-reverse items-center justify-end gap-x-[100px]  md:gap-x-[44px]">
      {/* {navOpen ? (
        <img
          className="hover:cursor-pointer"
          width={30}
          src="/img/X.svg"
          onClick={handleHamburgerOff}
        ></img>
      ) : (
        <div
          onClick={handleHamburgerOn}
          className="flex h-[22px] w-[30px] flex-col items-end justify-between hover:cursor-pointer"
        >
          <div
            className={`w-[30px]  ${navBgOn ? "bg-hamburgerDark" : "bg-white"} h-[3px] rounded-[2px] transition-all duration-500`}
          ></div>
          <div
            className={`w-[30px] ${navBgOn ? "bg-hamburgerDark" : "bg-white"} h-[3px] rounded-[2px] transition-all duration-500`}
          ></div>
          <div
            className={`w-[24px] ${navBgOn ? "bg-hamburgerDark" : "bg-white"} h-[3px] rounded-[2px] transition-all duration-500`}
          ></div>
        </div>
      )} */}
      <div onClick={handleHamburger}>
        <Hamburger
          color={`${navBgOn && !navOpen ? "#585880" : "white"}`}
          toggled={navOpen}
          toggle={setNavOpen}
        />
      </div>

      <button
        style={{
          background: "linear-gradient(90deg, #4EE5EA 3.94%, #26D0A8 94.73%)",
        }}
        className={`${!navOpen ? "opacity-100" : "opacity-0"}  h-[41.026px] w-32 rounded-[24px] pl-[13px] pr-[10px] text-center text-[14px] tracking-[1.143px] transition-all duration-300 hover:text-[#ffff93] md:w-full md:text-nowrap`}
      >
        START YOUR PROJECT
      </button>
    </div>
  );
};

export default SideMenu;
