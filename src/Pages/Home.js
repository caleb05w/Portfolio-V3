import React from "react";

import InnotaCover from "../assets/images/InnotaCover.png";
import AxisCover from "../assets/images/Animated/AxisCover.gif";

import CaseStudy from "../Components/CaseStudy";
import Hyperlink from "../Components/Hyperlink";
import Label from "../Components/Label";

//Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

// Next js src set optijization

function Home() {
  return (
    <div id="top" className="bg-gray-100">
      <div className="w-[100vw] flex flex-row justify-center pb-[3vh] lg:pb-[4vh]">
        <div className="lg:w-[95vw] w-[90vw] flex flex-col lg:flex-row gap-[2rem] lg:gap-[4rem] ">
          <div className="  h-fit lg:h-[80vh] w-[50vw]">
            <div className=" flex flex-col h-fit lg:h-[85vh] justify-between relative lg:fixed w-[100vw] lg:w-[21vw]">
              <div className="flex flex-col gap-[2rem]   ">
                <h1>
                  Hi, I’m Caleb I’m a product designer based in Vancouver, BC.{" "}
                </h1>
                <div className="flex flex-row gap-[0.5rem]">
                  <h5>Incoming Product Designer at </h5>{" "}
                  <Hyperlink
                    Text="Metalab"
                    Link="https://www.metalab.com/"
                    Weight={"h3"}
                    Color={"--purple"}
                    HoverColor={"--purple"}
                  ></Hyperlink>
                </div>
              </div>
              <div className="hidden lg:flex gap-[0.5rem]">
                <FaGithub className="text-2xl text-my-gray hover:text-my-purple ease-in-out duration-300 hover:cursor-pointer" />
                <FaLinkedin className="text-2xl text-my-gray hover:text-my-purple ease-in-out duration-300 hover:cursor-pointer" />
                <CiMail className="text-2xl text-my-gray hover:text-my-purple ease-in-out duration-300 hover:cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-[1.25rem] ">
            {/* <Label name="Case Studies" color="--purple" /> */}
            <div className="flex lg:flex-col flex-col w-full lg:w-[70vw] gap-[1rem]">
              <CaseStudy
                Title="Innota Technologies"
                Body="Compeling prompt to read"
                Image={InnotaCover}
                Link="/Innota"
                Year="2024"
                Skills="UI/UX Design | Branding | Web Development"
              ></CaseStudy>

              <CaseStudy
                Title="Axis Consulting"
                Body="Designing a Narrative to Inspire Creativity"
                Image={AxisCover}
                Link="/Axis"
                Year="2024"
                Skills="UI/UX Design | Branding | Web Development"
              ></CaseStudy>
            </div>
          </div>
          <div className="flex w-full justify-between lg:hidden gap-[0.5rem]">
            <a href="#top">
              <h5> Back to top </h5>
            </a>
            <div className="flex ">
              <FaGithub className="text-2xl text-my-gray hover:text-my-purple ease-in-out duration-300 hover:cursor-pointer" />
              <FaLinkedin className="text-2xl text-my-gray hover:text-my-purple ease-in-out duration-300 hover:cursor-pointer" />
              <CiMail className="text-2xl text-my-gray hover:text-my-purple ease-in-out duration-300 hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
