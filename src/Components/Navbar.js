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
    <nav className="mb-[15%] lg:mb-[3%] w-full ">
      <div
        className=" z-20 flex flex-row justify-between fixed h-[fit] lg:h-[10%] w-full
       top-0 left-0 bg-white backdrop-blur-[8px]"
        //  lg:[mask-image:linear-gradient(180deg,_rgba(255,255,255,1)_20%,_rgba(255,255,255,0)_80%)]
      ></div>

      <div
        className={`flex flex-col lg:flex-row justify-between w-full h-fit z-30 py-[5%] lg:py-[2%] lg:px-[3%] fixed lg:mt-[0%] mt-[-3%] pt-[10%] pb-[10%] rounded-[0.5rem] lg:rounded-none ease-in-out duration-[500ms] lg:bg-transparent ${
          isOpen ? "bg-black" : "bg-white"
        }
        `}
      >
        <div className="flex flex-row w-[100vw] h-fit justify-between lg:relative fixed lg:px-0 px-[7%]">
          <div className=" flex flex-col justify-center">
            <Hyperlink
              Text={"Caleb Wu"}
              Link={"/"}
              Color={"--purple"}
              HoverColor={"--purple"}
              Display={"flex"}
            />
          </div>

          <button
            onClick={toggleNavbar}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <span
              className={`text-3xl lg:hidden font-bold ease-in-out duration-300 h-full mt-[-1vh] flex flex-col justify-center  ${isOpen ? "text-white" : "text-black"}`}
            >
              {isOpen ? "x" : <IoMenu className="w-[8] h-[8]" />}
            </span>
          </button>
        </div>
        <div
          className={`flex flex-col lg:flex-row lg:gap-0 gap-[0.5rem] w-fit lg:w-[20%] pt-[5%] lg:px-0 px-[7%] lg:pt-0 lg:mt-0 justify-between z-10 ease-in-out duration-300 ${
            isOpen ? "mt-[9%]" : "mt-[-20vh]"
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
            Link={"/About"}
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
