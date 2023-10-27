import React from "react";
import ProjectDescription from "../components/ProjectDescription";
import ProjectPreview from "../components/ProjectPreview";
import countriespreview from "../assets/RESTCountries.jpg";
import mobilecountries from "../assets/mobilecountries.jpg";
import countriesblackandwhite from "../assets/countriesblackandwhite.jpg";
export default function ProjectDetailPage() {
  return (
    <div>
      <ProjectDescription
        imgSrc={countriespreview}
        projectTitle="Manage"
        description="This project required me to  integrate with the REST Countries API to pull country data and display it like in the designs. I used React and Tailwind CSS."
        technologiesOne="Interaction Design / Front End Development"
        technologiesTwo="REACT/ TAILWINDCSS"
      />
      <ProjectPreview
        titleOne="Project Background"
        description="This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style. In doing this project I got to work with an api which futher developement my developement skils"
        titleTwo="Static Previews"
        imageSrcOne={mobilecountries}
        imgSrcTwo={countriesblackandwhite}
      />
    </div>
  );
}
