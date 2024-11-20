import React from "react";
import Textbox from "../Components/Textbox";

function ContentBox({ Title, Body, LabelName, LabelColor, Image }) {
  return (
    <div>
      <div className="lg:w-[65vw] w-[80vw] flex flex-col gap-[1.5rem] lg:gap-[2.5rem]">
        <Textbox
          Title={Title}
          Body={Body}
          LabelName={LabelName}
          LabelColor={LabelColor}
        ></Textbox>

        <div className="border-2 border-black object-cover">
          <img className="border-2 border-black w-full h-fit" src={Image}></img>
        </div>
      </div>
    </div>
  );
}

export default ContentBox;
