import React from "react";

function ImageContainer({ Image }) {
  return (
    <div>
      {" "}
      <div className="object-cover">
        <img className=" w-full h-fit" src={Image}></img>
      </div>
    </div>
  );
}

export default ImageContainer;
