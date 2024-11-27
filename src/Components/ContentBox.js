import React from "react";
import Textbox from "../Components/Textbox";

function ContentBox({
  Title,
  Body,
  Body2,
  LabelName,
  LabelColor,
  Image,
  Speed,
  ID,
  AltText,
  Width,
  Height,
}) {
  return (
    <section>
      <div
        className="lg:w-[100%] w-[100%] flex flex-col gap-[1.5rem] lg:gap-[2.5rem]"
        id={ID}
      >
        <Textbox
          Title={Title}
          Body={Body}
          Body2={Body2}
          LabelName={LabelName}
          LabelColor={LabelColor}
        ></Textbox>

        <div className="object-cover">
          <img
            className=" w-full h-fit"
            src={Image}
            alt={AltText}
            width={Width}
            height={Height}
            loading={Speed}
          ></img>
        </div>
      </div>
    </section>
  );
}

export default ContentBox;
