import React from "react";
import "../output.css";
import "../input.css"; // Tailwind stylesheet
import ContentBox from "../Components/ContentBox";
import ContainerImage from "../Components/ContainerImage";
import Textbox from "../Components/Textbox";
import MultiContentBox from "../Components/MultiContentBox";
import Label from "../Components/Label";

/* Images */
import InnotaCover from "../assets/images/InnotaCover.png";
import Innota1 from "../assets/images/Innota1.png";
import Innota2 from "../assets/images/Innota2.png";
import Innota3 from "../assets/images/Innota3.png";
import mindmap from "../assets/images/Innota_Mindmap.png";
import InnotaContent2 from "../assets/images/InnotaContent2.png";
import InnotaContent_3 from "../assets/images/InnotaContent_3.png";
import InnotaContent_4 from "../assets/images/InnotaContent_4.png";
import InnotaContent_5 from "../assets/images/InnotaContent_5.png";
import InnotaContent_6 from "../assets/images/InnotaContent_6.png";
import InnotaContent_7 from "../assets/images/InnotaContent_7.png";
import InnotaContent_8 from "../assets/images/InnotaContent_8.png";
import InnotaContent_9 from "../assets/images/InnotaContent_9.png";
import InnotaContent_10 from "../assets/images/InnotaContent_10.png";
import InnotaContent_11 from "../assets/images/InnotaContent_11.png";

function Innota() {
  // const InnotaCover =
  //   "https://dash.cloudflare.com/13c71e6e0afbadf78c6fa2572b98316f/r2/default/buckets/portfolio/objects/InnotaCover.png";

  return (
    <div>
      <div className="w-[100vw] flex flex-row justify-center">
        <div className="lg:w-[65vw] w-[80vw] flex flex-col gap-[4rem] lg:gap-[9.375rem]">
          <div className=" flex flex-col gap-[2.125rem]">
            <h5>Product Design Intern | Summer 2023</h5>
            <h1>A User-Centric Redesign to Drive Engagement and Clarity</h1>
            <div className=" flex flex-row gap-[1rem]">
              <div className="border-2 border-my-gray rounded-[999rem] px-[0.5rem] py-[0.25rem] h-fit">
                <h5 className="">UX/UI</h5>
              </div>
              <Label name={"UX/UI"} color={"--red"} />
              <Label name={"Front End"} color={"--blue"} />
              <Label name={"Product Design"} color={"--purple"} />
              <Label name={"End-to-End"} color={"--emerald"} />
            </div>
            <ContainerImage
              Image={InnotaCover}
              Speed={"eager"}
            ></ContainerImage>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <h4>Client</h4>
                <p>Innota Technologies</p>
              </div>
              <div className="flex flex-col">
                <h4>Team</h4>
                <p>1 Product Design (Me), 1FE, 2BE</p>
              </div>
              <div className="flex flex-col">
                <h4>Tools</h4>
                <p>Figma, HTML/CSS</p>
              </div>
              <div className="flex flex-col">
                <h4>Duration</h4>
                <p>1 Month</p>
              </div>
            </div>
          </div>
          <ContainerImage Image={Innota1} Speed={"lazy"}></ContainerImage>
          <ContainerImage Image={Innota2} Speed={"lazy"}></ContainerImage>
          <ContainerImage Image={Innota3} Speed={"lazy"}></ContainerImage>

          <div className="flex flex-col gap-[2.5rem]">
            <Textbox
              Title={"Meet Innota"}
              Body={
                "Innota is an AI-driven mind-mapping service built for students. Rather than providing black-and-white answers like other AI tools, Innota focuses on active learning -- supporting the student's journey through interactive features, such as mind maps, flashcards, and quizzes."
              }
            ></Textbox>

            <Textbox
              Title={"What I did"}
              Body={
                "I was the project's sole product design intern and was responsible for finding meaningful channels to drive impact, as the product was still in its MVP stage. During my time at Innota, I had the opportunity to spearhead the redesign of the company's website."
              }
            ></Textbox>
          </div>

          <ContentBox
            Title={"📚 Do people still use mind maps..?"}
            Body={
              "When I joined the team, the executives mentioned that although they were about 70% through developing the product, and had been advertising for months, student engagement was low. I noticed the company's value proposition relied heavily on users already understanding and using mind maps, and wasn’t sure how many students still used them. To validate my concerns, I conducted a survey to test the product’s value propositions."
            }
            Body2={
              "To my horror, my concerns proved to be true. In fact, of the 62 people I surveyed, only ~10 used mind maps in their current routine. Yikes"
            }
            LabelName={"Problem Discovery"}
            LabelColor={"--red"}
            Image={mindmap}
            Speed={"lazy"}
          ></ContentBox>

          <ContentBox
            Title={"📊 Analyzing Channels of Impact"}
            Body={
              " This got me thinking—how can I drive this value? With a tight timeline and only 2 existing channels of engagement, Instagram and the website — I had to choose one."
            }
            Body2={
              "While Instagram had potential, its small audience limited its reach. The website, being the primary source of key information, offered a greater opportunity to make an impact. With my web development experience, I focused on enhancing its design and functionality."
            }
            LabelName={"Problem Discovery"}
            LabelColor={"--red"}
            Image={InnotaContent2}
            Speed={"lazy"}
          ></ContentBox>

          <ContentBox
            Title={"🚨 Confronting the Issue"}
            Body={
              "Taking a step back, I did some affinity mapping, synthesizing the pain points, and survey results, and began brainstorming solutions on how I could tackle these issues."
            }
            LabelName={"Problem Discovery"}
            LabelColor={"--orange"}
            Image={InnotaContent_3}
            Speed={"lazy"}
          ></ContentBox>

          <ContentBox
            Title={"🔍 Asking the Big Question(s)"}
            Body={
              "Moving forward, I created a singular product vision to unite my goals for the rest of the project duration, developing a tangible scope to drive my progress forward."
            }
            Image={InnotaContent_4}
            Speed={"lazy"}
          ></ContentBox>

          <ContentBox
            Title={" 🛠️ Proposed Solutions"}
            Body={
              "Empowered by my newfound vision, I started brainstorming, coming up with 3 different directions to drive the webpage and online identity. After bouncing my ideas back and fourth with my directors, we decided on pursuing a refined user flow, as it represented the most feasible solution for the term."
            }
            LabelName={"Solution Ideation"}
            LabelColor={"--orange"}
            Image={InnotaContent_5}
            Speed={"lazy"}
          ></ContentBox>

          <ContentBox
            Title={" 🗣️ Developing a Tone of Voice to drive Content Copy"}
            Body={
              "Going back to the survey results, one of the biggest issues was that students simply didn’t care for mind maps. How could I change this perspective?"
            }
            Body2={
              "While I couldn’t change the actual branding of the website, I could do other things to influence the brand personality. After watching a good chunk of “inspiration” gym videos, and consulting ChatGPT — “how would you inspire me to do 100 sit-ups”,  I shaped the copy with the goal for it to inspire and empower students — like a gym teacher encouraging students to push their limits."
            }
            LabelName={"Solution Implementation #1"}
            LabelColor={"--purple"}
            Image={InnotaContent_6}
            Speed={"lazy"}
          ></ContentBox>

          <ContentBox
            Title={" 🚀 Reworking the User Journey"}
            Body={
              "There’s only so much copy you can read before you get bored. Another one of our biggest issues was on-site congestion -- users might not even make it to signing up for our product, getting lost or disengaged in the process."
            }
            Body2={
              "Knowing that I couldn’t change the user journey, I instead opted to bring the product to the user. Inspired by ChatGPT and Zapier’s streamlined onsite navigation, I cleared out the top half of the home page to make way for a product showcase. This reduced the user journey to just one step."
            }
            LabelName={"Solution Implementation #2"}
            LabelColor={"--purple"}
            Image={InnotaContent_7}
            Speed={"lazy"}
          ></ContentBox>

          <ContentBox
            Title={" 🌱 Bringing my Solution to Life"}
            Body={
              "With new goals in mind and a clear product vision, I got started, initiating a top-to-bottom redesign of basically all the elements on the webpage. Channeling the assets as a medium to drive my previous changes, I built a design system on Figma to help regulate my designs."
            }
            LabelName={"Solution Implementation #3"}
            LabelColor={"--purple"}
            Image={InnotaContent_8}
            Speed={"lazy"}
          ></ContentBox>

          <ContentBox
            Title={" ➡️ Out with the Old, in with the New"}
            Body={
              "Through meticulously working through pain points on each page, I started building the website from the ground up. I didn’t have a senior design lead to lean on, so I had to learn how to justify a lot of my own design decisions in my weekly meetings with the executive team."
            }
            LabelName={"Solution Showcase"}
            LabelColor={"--purple"}
            Image={InnotaContent_9}
            Speed={"lazy"}
          ></ContentBox>

          <ContentBox
            Title={" 📱 Adapting to Desktop to Mobile"}
            Body={
              "My final task was to translate the website into a responsive format. I quickly learned that I couldn’t just turn every flex column into a flex row. After refining margins, resizing buttons, and compressing content, I completed the mockup and passed it to the front-end team."
            }
            LabelName={"Solution Showcase"}
            LabelColor={"--purple"}
            Image={InnotaContent_10}
            Speed={"lazy"}
          ></ContentBox>

          <ContentBox
            Title={"📨 Improving Client to Company Relations"}
            Body={
              "Exploring outside the scope of the website, I looked for other channels of impact. I noticed that our user’s primary point of interaction with the company is done through an automated client-to-email process. "
            }
            Body2={
              "Seizing the opportunity, I used HTML & CSS to develop and design custom email templates, using Litmus to test how they would appear across everything from Outlook to Gmail. Through this process I introduced eye-catching CTA’s (well, comparatively to a default email), enabling better control over the content, and consolidating information into digestible chunks."
            }
            LabelName={"Solution Showcase"}
            LabelColor={"--turquoise"}
            Image={InnotaContent_11}
            Speed={"lazy"}
          ></ContentBox>

          <ContentBox
            Title={"⭐ My Impact"}
            Body={
              "As the sole student amongst a team of adults (developing an app designed for students), my perspective was invaluable for shaping the direction the product and its portrayal took. I got the amazing opportunity to drive a lot of the design decisions, lead research, and learn how and why to justify my decisions."
            }
            Body2={
              " One of my biggest regrets was that I wasn’t able to stay with the product for its end-to-end journey. As a result, I didn’t get to see a lot of my solutions come to fruition until a few months later when the product and webpage were officially launched and wasn’t able to see the subsequent results."
            }
            LabelName={"Key Take Away(s)"}
            LabelColor={"--yellow"}
            Speed={"lazy"}
          ></ContentBox>

          <MultiContentBox
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
          ></MultiContentBox>
        </div>
      </div>
    </div>
  );
}

export default Innota;
