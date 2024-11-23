import React from "react";

function Navbar() {
  return (
    <nav className="mb-[3%]">
      <div
        className="flex flex-row justify-between px-[3%] fixed h-[10%] w-full 
       top-0 left-0 bg-white/20  [mask-image:linear-gradient(180deg,_rgba(255,255,255,1)_20%,_rgba(255,255,255,0)_80%)]  backdrop-blur-[8px]"
      ></div>
      <div className="flex flex-row justify-between w-full z-30 pt-[2%] px-[3%] fixed">
        <a href="/">
          <h5 className="text-red-500">Caleb Wu</h5>
        </a>
        <div className="flex flex-row w-[20%] justify-between z-10">
          <h5 className="text-black">About</h5>
          <h5 className="text-black">Resume</h5>
          <h5 className="text-black">Gallery</h5>
        </div>
      </div>
      <div className="pb-[5%]"></div>
    </nav>
  );
}

export default Navbar;
