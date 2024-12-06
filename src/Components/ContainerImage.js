import React from "react";

function ImageContainer({ Image, Speed, altText, Width, Height, srcset }) {
  return (
    <div className="object-cover rounded-[0.5rem] w-full lg:h-[fit] max-h-[fit] overflow-hidden">
      <img
        className=" w-100 h-full object-cover"
        src={Image}
        loading={Speed}
        alt={altText}
        width={Width}
        srcSet={srcset}
        height={Height}
      ></img>
    </div>
  );
}

export default ImageContainer;
