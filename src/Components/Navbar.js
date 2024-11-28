import React, { useState } from "react";
import Hyperlink from "./Hyperlink";

/*Icons*/
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="mb-[15%] lg:mb-[3%] ">
      <div
        className=" z-20 flex flex-row justify-between fixed h-[fit] lg:h-[10%] w-full 
       top-0 left-0 bg-white backdrop-blur-[8px]"
        //  lg:[mask-image:linear-gradient(180deg,_rgba(255,255,255,1)_20%,_rgba(255,255,255,0)_80%)]
      ></div>

      <div
        className={`flex flex-col lg:flex-row justify-between w-full h-fit z-30 py-[5%] lg:py-[2%] px-[7%] lg:px-[3%] fixed lg:mt-[0%] mt-[-2%] rounded-[0.5rem] lg:rounded-none ease-in-out duration-[500ms] lg:bg-transparent ${
          isOpen ? "bg-black" : "bg-white"
        }
        `}
      >
        <div className="flex flex-row w-[90vw] justify-between lg:relative fixed">
          <Hyperlink
            Text={"Caleb Wu"}
            Link={"/"}
            Color={"--purple"}
            HoverColor={"--purple"}
            Display={"flex"}
          />

          <button
            onClick={toggleNavbar}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <span
              className={`text-md lg:hidden font-bold ease-in-out duration-300 ${isOpen ? "text-white" : "text-black"}`}
            >
              {isOpen ? "x" : <IoMenu />}
            </span>
          </button>
        </div>
        <div
          className={`flex flex-col lg:flex-row lg:gap-0 gap-[0.5rem] w-fit lg:w-[20%] lg:mt-0 justify-between z-10 ease-in-out duration-300 ${
            isOpen ? "mt-[8%]" : "mt-[-20vh]"
          }`}
        >
          <Hyperlink
            Text={"Resume"}
            Link={"/gallery"}
            Color={"my-black"}
            HoverColor={"--purple"}
            Display={"none"}
          />
          <Hyperlink
            Text={"Gallery"}
            Link={"/gallery"}
            Color={"my-black"}
            HoverColor={"--purple"}
            Display={"none"}
          />
          <Hyperlink
            Text={"About"}
            Link={"/gallery"}
            Color={"my-black"}
            HoverColor={"--purple"}
            Display={"none"}
          />
        </div>
      </div>
      <div className="pb-[3%]"></div>
    </nav>
  );
}

export default Navbar;
