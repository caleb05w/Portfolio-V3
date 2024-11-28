import React from "react";

function ImageContainer({ Image, Speed, altText, Width, Height }) {
  return (
    <div className="object-cover rounded-[0.5rem] w-full border-2 border-black lg:h-[fit] max-h-[fit] overflow-hidden">
      <img
        className=" w-100 h-fit"
        src={Image}
        loading={Speed}
        alt={altText}
        width={Width}
        height={Height}
      ></img>
    </div>
  );
}

export default ImageContainer;
