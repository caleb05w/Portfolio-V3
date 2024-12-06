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
  srcset,
}) {
  return (
    <section>
      <div
        className="lg:w-[100%] w-[100%] flex flex-col gap-[1.5rem] lg:gap-[1.6rem]"
        id={ID}
      >
        <Textbox
          Title={Title}
          Body={Body}
          Body2={Body2}
          LabelName={LabelName}
          LabelColor={LabelColor}
          
        ></Textbox>

        <div className="w-[100]  ">
          <div className="object-cover">
            <img
              className=" w-[100%] h-[100%]  mx-auto"
              src={Image}
              alt={AltText}
              width={Width}
              height={Height}
              loading={Speed}
              srcSet={srcset}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentBox;
