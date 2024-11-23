import React from "react";
import ImageContainer from "./ContainerImage";

function CaseStudy({ Title, Body, Image, Link }) {
  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="rounded-[0.25rem] overflow-hidden ">
        <a href={Link} className="hover:cursor-pointer">
          <div className="">
            <div className="hover:scale-105 ease-in-out duration-300 hover:brightness-[80%]">
              <ImageContainer Image={Image}></ImageContainer>
            </div>
          </div>{" "}
        </a>
      </div>
      <div className="flex flex-col">
        <h3 className="text-[#383737]">{Title}</h3>
        <h5>{Body}</h5>
      </div>
    </div>
  );
}

export default CaseStudy;
