import React from "react";
import Hyperlink from "../Components/Hyperlink";

function Gallery() {
  return (
    <div className=" w-100vw  flex flex-row justify-center">
      <div className=" min-h-[50vh] flex flex-col justify-center">
        <div className="border-2 border-black rounded-[0.5rem] p-[1rem] flex flex-col gap-[1vh]">
          <h2>🚧 Under Construction</h2>
          <p>
            Woah! You've stumbled across a section that isn't quite built yet!
            Stay tuned.
          </p>
          <div className="mt-[1rem]">
            <Hyperlink
              Text="Back to Home"
              Link="/"
              Color="--black"
              HoverColor="--purple"
            ></Hyperlink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
