import React from "react";
import ContainerImage from "../Components/ContainerImage";

// Images

import Caleb1 from "../assets/images/Caleb1.png";
import Caleb2 from "../assets/images/Caleb2.png";
import Caleb3 from "../assets/images/Caleb3.png";

const About = () => {
  return (
    <div className="w-[100vw] flex flex-row justify-center lg:px-[3%] md:px-[3%] px-[7%] pb-[3vh] lg:pb-[4vh]">
      <div className="lg:w-[70vw] w-[95vw] flex flex-col gap-[1rem] md-[2rem] lg:gap-[2.375rem]">
        <div className=" flex flex-col gap-[1rem] lg:gap-[1.125rem]" id="top">
          <h5>Director of Design | 2024</h5>
          <h1>Designer by Day, Developer by Night</h1>
        </div>
        <div className="flex flex-col gap-[2rem]">
          <p>
            I’m a product designer focused on the intersection between design
            and business. With 3x hackathon wins under my belt, I’m proficient
            in both front end & design -- specializing in producing quick
            streamlined interfaces under short periods of time.{" "}
          </p>
          <p>
            Currently I’m pursuing a Beedle School of Business and Interactive
            Arts & Technologies joint major at SFU, concentrating in design &
            development for web + mobile, and interactive design.
          </p>
          <p>
            My go to tech stack for design is the Adobe Suite & Figma -- for
            bringing these designs to life I use Tailwind & ReactJS with a bit
            of FramerMotion -- and for project management I’m proficient in
            Hubspot, Microsoft Suite, and Notion.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-[fit] justify-between gap-[1rem]">
          <ContainerImage
            Image={Caleb1}
            alt={"a photo of me trying to play the Ukelele"}
            Width={"408.18px"}
            Height={"540px"}
          ></ContainerImage>
          <ContainerImage
            Image={Caleb2}
            alt={"Me and my friends staring at the ocean"}
            Width={"535.2px"}
            Height={"540px"}
          ></ContainerImage>
          <ContainerImage
            Image={Caleb3}
            alt={"A photo of me attempting to give a presentation"}
            Width={"733.39px"}
            Height={"540px"}
          ></ContainerImage>
        </div>
      </div>
    </div>
  );
};

export default About;
