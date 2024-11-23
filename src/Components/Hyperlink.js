import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Hyperlink({ Text, Link }) {
  return (
    <div className="group w-fit ">
      <a href={Link}>
        <h5 className="text-[#9384f4] group-hover:text-[#5d4ae1] ease-in-out duration-300 flex flex-row">
          {Text}
          <div className=" flex flex-col justify-center">
            <MdArrowOutward />
          </div>
        </h5>
      </a>
      <div className="border-b-2 border-[#5d4ae1] w-100% translate-x-[-10%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100  ease-in-out duration-300"></div>
    </div>
  );
}

export default Hyperlink;
