import React from "react";
import "../output.css";
import "../input.css"; // Tailwind stylesheet
import ContentBox from "../Components/ContentBox";
import ContainerImage from "../Components/ContainerImage";
import Textbox from "../Components/Textbox";
import MultiContentBox from "../Components/MultiContentBox";
import Label from "../Components/Label";

/* Images */
import AxisCover from "../assets/images/Animated/AxisCover.gif";
import Axis1 from "../assets/images/Animated/Axis1.gif";
import Axis2 from "../assets/images/Animated/Axis2.gif";
import Axis3 from "../assets/images/Animated/Axis3.gif";

import AxisContent_1 from "../assets/images/AxisContent_1.png";
import AxisContent2 from "../assets/images/AxisContent_2.png";
import AxisContent_3 from "../assets/images/AxisContent_3.png";
import AxisContent_4 from "../assets/images/AxisContent_4.png";
import AxisContent_5 from "../assets/images/AxisContent_5.png";
import AxisContent_6 from "../assets/images/AxisContent_6.png";
import AxisContent_7 from "../assets/images/AxisContent_7.png";
import AxisContent_8 from "../assets/images/Axis_Content_8.png";
import AxisContent_9 from "../assets/images/AxisContent_9.png";
import AxisContent_10 from "../assets/images/AxisContent_10.png";
import AxisContent_11 from "../assets/images/AxisContent_11.png";

function Axis() {
  return (
    <div>
      <div className="w-[100vw] flex flex-row justify-center">
        <div className="lg:w-[65vw] w-[80vw] flex flex-col gap-[4rem] lg:gap-[9.375rem]">
          <div className=" flex flex-col gap-[2.125rem]">
            <h5>Director of Design | 2024</h5>
            <h1>
              Re-Defining the Narrative: Curating a new Brand to Invoke Awe.
            </h1>
            <div className=" flex flex-row gap-[1rem]">
              <Label name={"UX/UI"} color={"--red"} />
              <Label name={"Front End"} color={"--blue"} />
              <Label name={"Product Design"} color={"--purple"} />
              <Label name={"End-to-End"} color={"--emerald"} />
            </div>
            <ContainerImage Image={AxisCover}></ContainerImage>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <h4>Client</h4>
                <p>SFU Axis Consulting</p>
              </div>
              <div className="flex flex-col">
                <h4>Team</h4>
                <p>Director, 2 Design, 1 Media</p>
              </div>
              <div className="flex flex-col">
                <h4>Tools</h4>
                <p>Figma, AE</p>
              </div>
              <div className="flex flex-col">
                <h4>Duration</h4>
                <p>4 Months ongoing</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[2.5rem]">
            <Textbox
              Title={"About Axis"}
              Body={
                "Axis Consulting is a student-run pro bono business club that pairs aspiring consultants with real world clients."
              }
            ></Textbox>
          </div>

          <div className="flex flex-col gap-[1%]">
            <div className="flex flex-row h-full w-fit gap-[1%]">
              <ContainerImage Image={Axis1}></ContainerImage>
              <ContainerImage Image={Axis2}></ContainerImage>
            </div>
            <ContainerImage Image={Axis3}></ContainerImage>
          </div>

          <ContentBox
            Title={"The Problem"}
            Body={
              "Axis’s current brand identity was cohesive, and disorganized, and lacked any compelling or distinguishable traits outside of the insistent use of blue, lacking a unifying art direction. "
            }
            LabelName={"The Issue"}
            LabelColor={"--red"}
            Image={AxisContent_1}
          ></ContentBox>

          <ContentBox
            Title={"Conducting Competitive Analysis"}
            Body={
              "This meant it wasn’t able to stand out against SFU’s other 15+ business clubs.They all share similar hiring dates, similar events, and cater to the same body of students."
            }
            LabelName={"Problem Discovery #1"}
            LabelColor={"--red"}
            Image={AxisContent2}
          ></ContentBox>

          <ContentBox
            Title={"What Now?"}
            Body={
              "With these two pain points, I created a unifying vision to guide my art direction."
            }
            LabelName={""}
            LabelColor={"--orange"}
            Image={AxisContent_3}
          ></ContentBox>

          <ContentBox
            Title={"What Now?"}
            Body={
              "A unifying art direction to evoke a sense of awe in the student, and showcase that consulting wasn’t a linear process, but equal parts creative."
            }
            LabelName={"Art Direction"}
            LabelColor={"--orange"}
            Image={AxisContent_4}
          ></ContentBox>

          <ContentBox
            Title={" Building the Vision"}
            Body={
              "The moodboard was unified by common “evokers of wonder”. These were things that made you go woah, creating a sense of awe."
            }
            LabelName={"Solution Ideation"}
            LabelColor={"--orange"}
            Image={AxisContent_5}
          ></ContentBox>

          <ContentBox
            Title={" The Direction"}
            Body={
              "The direction chosen to drive the art direction was stars in the night sky. The pitch-black sky was the perfect canvas to justify simple graphics and inspiring copy. "
            }
            LabelName={"Solution Ideation"}
            LabelColor={"--purple"}
            Image={AxisContent_6}
          ></ContentBox>

          <ContentBox
            Title={" Strategies of Implementation"}
            Body={
              "To bring this vision to life, I came up with 3 tangible initiatives to drive my team and I’s progress through the rest of the year."
            }
            LabelName={"Implementation Strategy"}
            LabelColor={"--purple"}
            Image={AxisContent_7}
          ></ContentBox>

          <ContentBox
            Title={" Design Pillars"}
            Body={
              "From the mood board, I developed three pillars to guide the art direction, inspired by stars in the night sky, luminescence to draw wonder, Noise to convey movement, and Constellations to engage empty space."
            }
            LabelName={"Design Decisions"}
            LabelColor={"--purple"}
            Image={AxisContent_8}
          ></ContentBox>

          <ContentBox
            Title={" Art Direction"}
            Body={
              "Apfel Grotesk and Helvetica were chosen for their distinct legibility on black canvas’s. The colors consisted of the trademark Axis blue to ensure recognizability of the legacy brand across the rebrand."
            }
            LabelName={"Design Decisions"}
            LabelColor={"--purple"}
            Image={AxisContent_9}
          ></ContentBox>

          <ContentBox
            Title={" Work Showcase"}
            Body={
              "After finalizing the graphical vision, I began translating it into posters for our various initiatives. The busy noise, blue highlights, and thin lines became an Axis trademark."
            }
            LabelName={"Solution Showcase"}
            LabelColor={"--purple"}
            Image={AxisContent_10}
          ></ContentBox>

          <ContentBox
            Title={"The Crowning Achievement"}
            Body={
              "Classmates often asked, “What are you guys doing this year?” as Beedie clubs traditionally market event-by-event. To address this, I created an engaging motion graphic timeline to provide clarity and build on past successes."
            }
            LabelName={"Going Beyond the Scope"}
            LabelColor={"--turquoise"}
            Image={AxisContent_11}
          ></ContentBox>

          <ContentBox
            Title={"⭐ My Impact"}
            Body={
              "The rebrand was a success, launched in July, it boosted LinkedIn impressions by 500%, Instagram reach by 101%, and applications by 40%. The feedback from the team and alumni was inspiring."
            }
            LabelName={"Key Take Away(s)"}
            LabelColor={"--yellow"}
          ></ContentBox>

          {/* <MultiContentBox
            Title={"⭐ What I learned"}
            Reflection1={"💡 Designing within Constraints"}
            Body1={
              "As the sole student amongst a team of adults (developing an app designed for students), my perspective was invaluable for shaping the direction the product and its portrayal took. I got the amazing opportunity to drive a lot of the design decisions, lead research, and learn how and why to justify my decisions. One of my biggest regrets was that I wasn’t able to stay with the product for its end-to-end journey. As a result, I didn’t get to see a lot of my solutions come to fruition until a few months later when the product and webpage were officially launched and wasn’t able to see the subsequent results."
            }
            Reflection2={"🤔 Moderating my Ideas"}
            Body2={
              "Given the tiny size of the team, (it was just me, a backend developer, front end developer, and the CEOs) I had to learn to moderate the grandeur of my ideas. Solutions like a live app demo on the home page sound amazing on paper, but the actual implementation for both the backend and front end is a nightmare. "
            }
            Reflection3={"🧩 Working with Limited Data"}
            Body3={
              "As a startup working towards producing an mvp, we really had no data to work with. I had to learn to be scrappy, leading interviews, pressing my friends, and slipping the product into conversations to see how people perceived it. "
            }
            LabelName={"Reflection"}
            LabelColor={"--red"}
          ></MultiContentBox> */}
        </div>
      </div>
    </div>
  );
}

export default Axis;
