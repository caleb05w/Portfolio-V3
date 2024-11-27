import React from "react";
import ImageContainer from "./ContainerImage";

function CaseStudy({ Title, Body, Image, Link, Year, Skills, AltText }) {
  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="rounded-[0.5rem] overflow-hidden ">
        <a href={Link} className="hover:cursor-pointer">
          <div className="group">
            <div className=" ">
              <div className="relative">
                <div className="flex flex-row justify-between absolute w-full px-[5%] lg:px-[2.5%] py-[2%]">
                  <h3 className="text-white z-10">{Title}</h3>
                  <h3 className="text-white z-10">{Year}</h3>
                </div>

                <div className="flex flex-row gap-[3%] absolute bottom-0 group-hover:bottom-[3%] ease-in-out duration-300 w-full px-[5%] lg:px-[2.5%] ">
                  <h5 className="text-my-gray z-10 opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                    {Body}
                  </h5>
                </div>

                <div className="flex flex-row gap-[3%] absolute bottom-[3%] group-hover:bottom-[8%] ease-in-out duration-300 w-full px-[5%] lg:px-[2.5%] ">
                  <h5 className="text-my-gray z-10 opacity-100 group-hover:opacity-0 ease-in-out duration-300">
                    {Skills}
                  </h5>
                </div>
                <div className=" min-h-[50vh] lg:min-h-[70vh] w-full">
                  <img
                    src={Image}
                    alt={AltText}
                    className="w-full h-[50vh] lg:min-h-[70vh] object-cover  ease-in-out duration-300 transform group-hover:scale-110 group-hover:brightness-[20%]"
                  ></img>
                </div>
              </div>
            </div>
          </div>{" "}
        </a>
      </div>
    </div>
  );
}

export default CaseStudy;
