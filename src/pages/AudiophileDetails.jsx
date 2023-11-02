import React from "react";
import ProjectDescription from "../components/ProjectDescription";
import ProjectPreview from "../components/ProjectPreview";
import audiphilepreview from "../assets/audiophilepreview.jpg";
import audiophiletone from "../assets/audiophilestaticpreviewone.jpg";
import audiophiletwo from "../assets/audiophilestaticpreviewtwo.jpg";

export default function ProjectDetailPage(props) {
  const handleAudiophileClick = () => {
    // Define the specific behavior when Audiophile is clicked
    window.location.href = "https://audiophile-sigma-sepia.vercel.app/";
  };
  const { onClickAction } = props;
  return (
    <div>
      <ProjectDescription
        imgSrc={audiphilepreview}
        projectTitle="Manage"
        description="This project required me to build a fully responsive multi page to the designs provided. I used React and Tailwind CSS for the areas that required interactivity"
        technologiesOne="Interaction Design / Front End Development"
        technologiesTwo="REACT/ TAILWINDCSS/ FRAMERMOTION / REDUX"
        onClickAction={handleAudiophileClick}
      />
      <ProjectPreview
        titleOne="Project Background"
        description="This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style. This project in particular introduced me about routing, redux among others  "
        titleTwo="Static Previews"
        imageSrcOne={audiophiletone}
        imgSrcTwo={audiophiletwo}
      />
    </div>
  );
}
