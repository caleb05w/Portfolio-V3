import React from "react";

import InnotaCover from "../assets/images/InnotaCover.png";
import AxisContent_5 from "../assets/images/AxisContent_5.png";

import CaseStudy from "../Components/CaseStudy";
import Hyperlink from "../Components/Hyperlink";

// Next js src set optijization

function Home() {
  return (
    <div>
      <div className="w-[100vw] flex flex-row justify-center">
        <div className="lg:w-[65vw] w-[80vw] flex flex-col gap-[4rem] lg:gap-[9.375rem]">
          <div className=" flex flex-col gap-[9.375rem]">
            <div className="flex flex-col gap-[1.125rem]">
              <h1>
                Hi, I’m Caleb I’m a product designer based in Vancouver, BC.{" "}
              </h1>
              <div className="flex flex-row gap-[1%]">
                <h5>Incoming Product Designer at </h5>{" "}
                <Hyperlink
                  Text="Metalab"
                  Link="https://www.metalab.com/"
                  Weight={"h3"}
                ></Hyperlink>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-[1rem]">
              <CaseStudy
                Title="Innota"
                Body="Compeling prompt to read"
                Image={InnotaCover}
                Link="/Innota"
              ></CaseStudy>

              <CaseStudy
                Title="Axis Consulting"
                Body="Designing a Narrative to Inspire Creativity"
                Image={AxisContent_5}
                Link="/Axis"
              ></CaseStudy>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
