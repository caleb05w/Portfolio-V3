import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Hyperlink({
  Text,
  Link,
  Color,
  HoverColor,
  Display,
  Download,
  Target,
}) {
  return (
    <div className="group w-fit">
      <a
        href={Link}
        target={Target ? "_blank" : "_self"}
        rel="noopener noreferrer"
        download={Download}
      >
        <h5
          className="ease-in-out duration-300 flex flex-row group-hover:text-[var(--hover-color)] whitespace-nowrap "
          style={{
            color: `var(${Color})`,
            "--hover-color": `var(${HoverColor})`,
          }}
        >
          {Text}
          <div
            className=" text-xl flex flex-col justify-center items-center  group-hover:w-[1rem] translate-all ease-in-out duration-300 w-0 h-fit right-[0.25rem] scale-0 group-hover:scale-100 group-hover:right-[0rem] ml-[0.15rem] relative"
            style={{
              color: `var(${HoverColor})`,
              "--hover-color": `var(${HoverColor})`,
            }}
          >
            <MdArrowOutward />
          </div>

          {/* <div
            className="flex flex-col justify-center"
            style={{
              display: Display, // Referenced from stack overflow, https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript
            }}
          >
            <MdArrowOutward />
          </div> */}
        </h5>
      </a>
      {/* <div
        className="border-b-2 w-full translate-x-[-10%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ease-in-out duration-300"
        style={{
          borderColor: `var(${HoverColor})`, // Use the CSS variable for border color
        }}
      ></div> */}
    </div>
  );
}

export default Hyperlink;
