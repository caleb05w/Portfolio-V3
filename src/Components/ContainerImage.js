import React from "react";

function ImageContainer({ Image, Speed }) {
  return (
    <div>
      {" "}
      <div className="object-cover rounded-[0.5rem] overflow-hidden">
        <img className=" w-full h-fit" src={Image} loading={Speed}></img>
      </div>
    </div>
  );
}

export default ImageContainer;
