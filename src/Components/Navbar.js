import React from "react";
import Hyperlink from "./Hyperlink";

function Navbar() {
  return (
    <nav className="mb-[15%] lg:mb-[3%]">
      <div
        className="flex flex-row justify-between px-[3%] fixed h-[10%] w-full 
       top-0 left-0 bg-white/20  [mask-image:linear-gradient(180deg,_rgba(255,255,255,1)_20%,_rgba(255,255,255,0)_80%)]  backdrop-blur-[8px]"
      ></div>
      <div className="flex flex-row justify-between w-full z-30 pt-[2%] px-[3%] fixed">
        <a href="/">
          <h5 className="text-my-purple">Caleb Wu</h5>
        </a>
        <div className="flex flex-row w-[20%] justify-between z-10">
          <Hyperlink
            Text={"Resume"}
            Link={"/gallery"}
            Color={"my-gray"}
            HoverColor={"--purple"}
            Display={"none"}
          />
          <Hyperlink
            Text={"Gallery"}
            Link={"/gallery"}
            Color={"my-gray"}
            HoverColor={"--purple"}
            Display={"none"}
          />
          <Hyperlink
            Text={"About"}
            Link={"/gallery"}
            Color={"my-gray"}
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
