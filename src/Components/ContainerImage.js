import React from "react";

function ImageContainer({ Image, Speed, altText, Width, Height }) {
  return (
    <div>
      {" "}
      <div className="object-cover rounded-[0.5rem] overflow-hidden">
        <img
          className=" w-full h-fit"
          src={Image}
          loading={Speed}
          alt={altText}
          width={Width}
          height={Height}
        ></img>
      </div>
    </div>
  );
}

export default ImageContainer;
