import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Hyperlink({ Text, Link, Color, HoverColor, Display }) {
  return (
    <div className="group w-fit">
      <a href={Link}>
        <h5
          className="ease-in-out duration-300 flex flex-row"
          style={{
            color: `var(${Color})`, // Use the CSS variable for text color
          }}
        >
          {Text}
          <div
            className="flex flex-col justify-center"
            style={{
              display: Display, // Referenced from stack overflow.
            }}
          >
            <MdArrowOutward />
          </div>
        </h5>
      </a>
      <div
        className="border-b-2 w-full translate-x-[-10%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ease-in-out duration-300"
        style={{
          borderColor: `var(${HoverColor})`, // Use the CSS variable for border color
        }}
      ></div>
    </div>
  );
}

export default Hyperlink;
