import React, { useState } from "react";
import "../output.css";
import "../input.css"; // Tailwind stylesheet
import ContentBox from "../Components/ContentBox";
import ContainerImage from "../Components/ContainerImage";
import Textbox from "../Components/Textbox";
import MultiContentBox from "../Components/MultiContentBox";
import Hyperlink from "../Components/Hyperlink";

//Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

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
import AxisContent_12 from "../assets/images/AxisContent_12.png";
import AxisReflection1 from "../assets/images/AxisReflection1.png";
import AxisReflection2 from "../assets/images/AxisReflection2.png";
import AxisReflection3 from "../assets/images/AxisReflection3.png";

function Axis() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-row justify-between pb-[3vh] lg:pb-[4vh]">
      {/* <div className="bg-my-purple-dark rounded-full px-[1rm] py-[0.5rem] h-fit fixed bottom-0 mb-[5vh] right-0">
        <button onClick={toggleNavbar}>
          <h5 className="text-white ">Open Timeline +</h5>
        </button>
      </div> */}
      <nav
        className={`fixed lg:bg-white bg-my-purple-dark w-[100vw] lg:w-[20%] flex flex-row justify-start md:justify-center lg:justify-center lg:pb-0 pb-[3vh] ${
          isOpen ? "top-[69vh]" : "top-[94vh]"
        } lg:top-0 lg:overflow-hidden lg:overscroll-none overscroll-x-auto overflow-x-auto lg:p-0 p-[5%] py-[0.5rem] bg-my-purple-dark rounded-[0.5rem] ease-in-out duration-300`}
      >
        <div className="lg:h-[100vh] h-fit lg:mt-[15vh] flex flex-col gap-[1.5%]">
          {/* Navbar Header */}

          <nav className=" lg:relative fixed z-10">
            <div className="lg:flex flex flex-row justify-between lg:w-fit  w-[90vw]">
              <h3 className="hidden  lg:block">Hello! I'm a sidebar.</h3>
              <button
                onClick={toggleNavbar}
                aria-label={
                  isOpen
                    ? "Close sidebar and hide project journey"
                    : "Open sidebar and show project journey"
                }
              >
                <h3 className="lg:hidden text-white">
                  {isOpen
                    ? "Hello! I'm a sidebar."
                    : "Press Me! Project Journey"}
                </h3>
              </button>
              <button
                className="lg:hidden relative text-white text-lg"
                onClick={toggleNavbar}
                aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
              >
                {isOpen ? "X" : ""}
              </button>
            </div>
          </nav>

          {/* Links */}
          <div className="flex flex-col min-h-[20vh] lg:mt-[0] mt-[6vh] z-10">
            <div className="flex flex-col lg:gap-[1%] gap-[0rem] h-full">
              <Hyperlink
                Text={"Problem"}
                Link={"#problem"}
                Color={"my-gray"}
                HoverColor={"--purple"}
                Display={"none"}
              />
              <Hyperlink
                Text={"Solution Ideation"}
                Link={"#solution-ideation"}
                Color={"my-gray"}
                HoverColor={"--purple"}
                Display={"none"}
              />
              <Hyperlink
                Text={"Implementation Strategy"}
                Link={"#implementation-strategy"}
                Color={"my-gray"}
                HoverColor={"--purple"}
                Display={"none"}
              />
              <Hyperlink
                Text={"Design Decisions"}
                Link={"#design-decisions"}
                Color={"my-gray"}
                HoverColor={"--purple"}
                Display={"none"}
              />
              <Hyperlink
                Text={"Work Showcase"}
                Link={"#work-showcase"}
                Color={"my-gray"}
                HoverColor={"--purple"}
                Display={"none"}
              />
              <Hyperlink
                Text={"Impact"}
                Link={"#impact"}
                Color={"my-gray"}
                HoverColor={"--purple"}
                Display={"none"}
              />
            </div>
          </div>

          <Hyperlink
            Text={"Back to Top"}
            Link={"#Top"}
            Color={"my-gray"}
            HoverColor={"--purple"}
          />
        </div>
      </nav>

      <div className=" fixed w-0 md:w-[17%] lg:w-[17%] flex flex-row justify-start lg:justify-center top-[90vh]">
        <div className="h-[100vh] w-[80%] flex flex-col gap-[1.5%]">
          <div className="flex flex-col min-h-[20vh]">
            <div className="lg:flex hidden flex-col gap-[1%] h-full">
              <div className="flex gap-[0.6rem] ">
                <FaGithub className="text-2xl text-my-gray hover:text-my-purple-dark ease-in-out duration-300 hover:cursor-pointer" />
                <FaLinkedin className="text-2xl text-my-gray hover:text-my-purple-dark ease-in-out duration-300 hover:cursor-pointer" />
                <CiMail className="text-2xl text-my-gray hover:text-my-purple-dark ease-in-out duration-300 hover:cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100vw] flex flex-row justify-end  lg:px-[3%] md:px-[3%] px-[7%]">
        <section className="lg:w-[70vw] w-[95vw] flex flex-col gap-[4rem] md-[6rem] lg:gap-[8rem] ml-[5vw]">
          <div className=" flex flex-col gap-[1rem] " id="top">
            <h5>Director of Design | 2024</h5>
            <h1>
              Re-Defining a Narrative: Curating a new Brand to Invoke Awe.
            </h1>
            {/* <div className=" flex flex-row gap-[1rem]">
              <Label name={"UX/UI"} color={"--red"} />
              <Label name={"Front End"} color={"--blue"} />
              <Label name={"Product Design"} color={"--purple"} />
              <Label name={"End-to-End"} color={"--emerald"} />
            </div> */}
            <ContainerImage
              Image={AxisCover}
              alt={"Cover Gif for Axis Consulting Case Study"}
              Width={"1080px"}
              Height={"675px"}
            ></ContainerImage>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex flex-col">
                <h4>Client</h4>
                <p>SFU Axis Consulting</p>
              </div>
              <div className="flex flex-col">
                <h4>Team</h4>
                <p>Director (Me), 2 Design, 1 Media</p>
              </div>
              <div className="flex flex-col">
                <h4>Tools</h4>
                <p>Figma, AE</p>
              </div>
              <div className="flex flex-col">
                <h4>Duration</h4>
                <p>4 Months, Ongoing</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[2.5rem]">
            <Textbox
              Title={"About The Client"}
              Body={
                "Axis Consulting is a student-run pro bono business club. It’s focused on creating opportunities for prospective consultants (anywhere from 2nd - to 5th year), delivering value for students through driving personal growth, and instilling community impact through the positive solutions we bring to the clients we work alongside.."
              }
            ></Textbox>
            <Textbox
              Title={"My Role"}
              Body={
                "As the Director of Design and marketing, I was responsible for managing Axis Consulting’s online identity and its many portrayal mediums. I acted as a crossroads for every graphical asset, animation, post, and reel posted on our social media channels. "
              }
            ></Textbox>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <div className="flex lg:flex-row flex-col h-fit w-full gap-[1rem]">
              <ContainerImage
                Image={Axis1}
                alt={"Animated Gif Showcase of Axis Consulting Events"}
                Height={"540px"}
                Width={"540px"}
                Loading={"lazy"}
              ></ContainerImage>
              <ContainerImage
                Image={Axis2}
                alt={"Animated Gif Showcase of Axis Consulting Events"}
                Height={"540px"}
                Width={"540px"}
                Loading={"lazy"}
              ></ContainerImage>
            </div>
            <ContainerImage
              Image={Axis3}
              alt={"Animated Gif Showcase of Axis Consulting Events"}
              Height={"1085px"}
              Width={"1085px"}
              Loading={"lazy"}
            ></ContainerImage>
          </div>

          <ContentBox
            ID={"problem"}
            Title={"The Problem"}
            Body={
              "Axis’s current brand identity was cohesive, and disorganized, and lacked any compelling or distinguishable traits outside of the insistent use of blue, lacking a unifying art direction. "
            }
            LabelName={"The Issue"}
            LabelColor={"--red"}
            Image={AxisContent_1}
            Alt={"Axis Consulting's Current Branding"}
            Width={"1085px"}
            Height={"670px"}
          ></ContentBox>

          <ContentBox
            Title={"Conducting Competitive Analysis"}
            Body={
              "This meant it wasn’t able to stand out against SFU’s other 15+ business clubs.They all share similar hiring dates, similar events, and cater to the same body of students."
            }
            LabelName={"Problem Discovery #1"}
            LabelColor={"--red"}
            Image={AxisContent2}
            Alt={
              "Compilation of SFU Business Club Posts compared to Axis Consulting's Posts"
            }
            Width={"1085px"}
            Height={"473px"}
          ></ContentBox>

          <ContentBox
            ID={"solution-ideation"}
            Title={"What Now?"}
            Body={
              "With these two pain points, I created a unifying vision to guide my art direction."
            }
            LabelName={"Solution Ideation"}
            LabelColor={"--orange"}
            Image={AxisContent_3}
            AltText={"My product vision for Axis Consulting"}
            Width={"1085px"}
            Height={"572px"}
          ></ContentBox>

          {/* removed for word count */}
          {/* <ContentBox
            Title={"What Now?"}
            Body={
              "A unifying art direction to evoke a sense of awe in the student, and showcase that consulting wasn’t a linear process, but equal parts creative."
            }
            LabelName={"Art Direction"}
            LabelColor={"--orange"}
            Image={AxisContent_4}
            AltText={"Competing at Forward Vision Case Competition"}
            Width={"1085px"}
            Height={"158px"}
          ></ContentBox> */}

          <ContentBox
            Title={" Building the Vision"}
            Body={
              "I started the art direction ideation by creating a moodboard, inspired by  unified by common “evokers of wonder”. These were things that made you go woah, creating a sense of awe."
            }
            LabelName={"Solution Ideation"}
            LabelColor={"--orange"}
            Image={AxisContent_5}
            AltText={"Moodboard that inspired the art direction"}
            Width={"1085px"}
            Height={"380px"}
          ></ContentBox>

          <ContentBox
            Title={" The Direction"}
            Body={
              "Moving forwards from the mood board, I chose a singular point to drive the direction forward: The night sky. This enveloping darkness of the pitch-black sky was the perfect canvas to justify simple graphics and inspiring copy. "
            }
            LabelName={"Solution Ideation"}
            LabelColor={"--purple"}
            Image={AxisContent_6}
            AltText={"The inspiration that birthed the art direction"}
            Width={"1085px"}
            Height={"530px"}
          ></ContentBox>

          <ContentBox
            ID={"design-decisions"}
            Title={" Design Pillars"}
            Body={
              "To ensure graphical consistency when creating assets, I developed three pillars to guide the art direction, inspired by stars in the night sky, luminescence to draw wonder, Noise to convey movement, and constellations to engage empty space."
            }
            LabelName={"Design Decisions"}
            LabelColor={"--purple"}
            Image={AxisContent_8}
            AltText={"The 3 pillars that drove the new art direction"}
            Width={"1085px"}
            Height={"347px"}
          ></ContentBox>

          <ContentBox
            Title={" Art Direction"}
            Body={
              "Apfel Grotesk and Helvetica were chosen for their distinct legibility on black canvas’s. I adpated the trademark Axis blue to ensure recognizability of the legacy brand across the rebrand."
            }
            LabelName={"Design Decisions"}
            LabelColor={"--purple"}
            Image={AxisContent_9}
            AltText={"Axis's new type and color pallete"}
            Width={"1085px"}
            Height={"530px"}
          ></ContentBox>

          <ContentBox
            ID={"implementation-strategy"}
            Title={" Strategies of Implementation"}
            Body={
              "With my art direction complete, I focused on how I could bring it to life, coming up with 3 different projects to drive the directions visual representation across Axis."
            }
            LabelName={"Implementation Strategy"}
            LabelColor={"--purple"}
            Image={AxisContent_7}
            AltText={"Strategies for implementing the new art direction"}
            Width={"1085px"}
            Height={"347px"}
          ></ContentBox>

          <ContentBox
            ID={"work-showcase"}
            Title={" Work Showcase"}
            Body={
              "After finalizing the graphical vision, I began translating it into posters for our various initiatives. The busy noise, blue highlights, and thin lines became an Axis trademark."
            }
            LabelName={"Solution Showcase"}
            LabelColor={"--purple"}
            Image={AxisContent_10}
            AltText={
              "A collection of Instagram posts I designed for Axis Consulting"
            }
            Width={"1085px"}
            Height={"1085px"}
          ></ContentBox>

          <ContentBox
            Title={"The Crowning Achievement"}
            Body={
              "Aftering creating the posts, I started looking for other ways to engage users. "
            }
            Body2={
              "Classmates kept approaching me about Axis and asking questions. One of the most popular questions I would receive was: “What are you guys doing this year?”.  Beedie clubs traditionally market event-by-event, leaving students in the dark about what’s next. To address this, I created a motion graphic outlining our timeline in an engaging way, building on the success of the previous one."
            }
            LabelName={"Going Beyond the Scope"}
            LabelColor={"--emerald"}
            Image={AxisContent_11}
            AltText={
              "The motion graphic timeline I created for Axis Consulting"
            }
            Width={"1085px"}
            Height={"540px"}
          ></ContentBox>

          <ContentBox
            ID={"impact"}
            Title={"⭐ My Impact"}
            Body={
              "The rebrand was a massive success. Our LinkedIn impressions spiked by almost 500%, and our Instagram content reached 101% more accounts. Our cumulative applicant pool experienced a 40% increase, and the amount of overwhelming feedback from the team and alumni was inspiring."
            }
            LabelName={"Key Take Away(s)"}
            LabelColor={"--yellow"}
            Image={AxisContent_12}
            AltText={
              "The impact of the rebrand on Axis Consulting, measured across Linkedin and Instagram"
            }
            Width={"1085px"}
            Height={"1130px"}
          ></ContentBox>

          <MultiContentBox
            ID={"reflection"}
            Title={"⭐ What I learned"}
            Reflection1={"💡 Good Ideas Come From Everywhere"}
            Body1={
              "I learned to balance my vision with my team’s, where collaboration fueled our weekly meetings, sparking innovative marketing initiatives and refining ideas through collective creativity."
            }
            Reflection2={"🧩 Chase Feedback... in Moderation"}
            Body2={
              "At the start of my term, I would always ask for feedback on all my designs from the entire exec team. As time went on, I realized how unsustainable this was, asking 13+ people to nitpick every aspect of my design, while catering to each of their niches was way too time-consuming and hard. Now, I’m not saying feedback isn’t good -- feedback is great, I just needed to learn how to scope it appropriately, to avoid it being buried under a mountain of critique. "
            }
            LabelName={"Reflection"}
            LabelColor={"--red"}
          ></MultiContentBox>
          <div className="flex flex-col lg:flex-row justify-between gap-[1rem]">
            <ContainerImage
              Image={AxisReflection1}
              alt={"A photo of me at my first every Axis business shoot"}
              Width={"408.18px"}
              Height={"540px"}
            ></ContainerImage>
            <ContainerImage
              Image={AxisReflection2}
              alt={"The Axis Marketing & Design Team 2024-2025"}
              Width={"535.2px"}
              Height={"540px"}
            ></ContainerImage>
            <ContainerImage
              Image={AxisReflection3}
              alt={"My first case competition"}
              Width={"733.39px"}
              Height={"540px"}
            ></ContainerImage>
          </div>
          <div className="w-[100%] flex flex-row justify-center lg:mb-[5%] mb-[20%]">
            <div className="flex flex-col gap-[1rem]">
              <a href="/Innota">
                <button className="text-white bg-my-purple-dark px-[1rem] py-[0.5rem] rounded-full hover:cursor-pointer hover:bg-my-purple-light ease-in-out duration-300 focus:border-2 focus:border-black">
                  Innota Technologies
                  <span className="inline-block ml-[1rem]">
                    <FaArrowRight />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Axis;
