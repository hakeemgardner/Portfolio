import React from "react";
import ProjectDescription from "../components/ProjectDescription";
import ProjectPreview from "../components/ProjectPreview";
import newsletterpreview from "../assets/newsletterpreview.jpg";
import Thankyou from "../assets/Thankyou.jpg";
import mobilenews from "../assets/mobilenews.jpg";
export default function ProjectDetailPage(props) {
  const handleNewsletterClick = () => {
    // Define the specific behavior when Newsletter is clicked
    window.location.href =
      "https://hakeemgardner.github.io/newsletter.github.io/";
  };
  const { onClickAction } = props;
  return (
    <div>
      <ProjectDescription
        imgSrc={newsletterpreview}
        projectTitle="Manage"
        description="This project required me  to build out this newsletter form and get it looking as close to the design as possible. I used HTML5, along with CSS  and JavaScript for the areas that required interactivity, such as the email input."
        technologiesOne="Interaction Design / Front End Development"
        technologiesTwo="HTML/ CSS/ JS"
        onClickAction={handleNewsletterClick}
      />
      <ProjectPreview
        titleOne="Project Background"
        description="This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style. The project gave me experience using vanilla HTML, CSS and Javascript, I was exposed to concepts such as Flexbox and being able to manipulate the DOM using javascript"
        titleTwo="Static Previews"
        imageSrcOne={Thankyou}
        imgSrcTwo={mobilenews}
      />
    </div>
  );
}
