import React from "react";
import { FaArrowLeft } from "react-icons/fa";
function Hyperlink({
  Text,
  Link,
  Color,
  HoverColor,
  Display,
  AdditionalClass,
}) {
  return (
    <div className="group w-fit">
      <a href={Link}>
        <h5
          className={`ease-in-out duration-300 flex gap-[0.5rem] flex-row-reverse group-hover:text-[var(--hover-color)] whitespace-nowrap `}
          style={{
            color: `var(${Color})`,
            "--hover-color": `var(${HoverColor})`,
          }}
        >
          {Text}
          <div className={`flex flex-col justify-center ${AdditionalClass}`}>
            <FaArrowLeft />
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
