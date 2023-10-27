import React from "react";
import ProjectHighlight from "../components/ProjectHighlight";
import { useNavigate } from "react-router-dom";
import ProjectInterest from "../components/ProjectInterest";
import audiphilepreview from "../assets/audiophilepreview.jpg";
import restcountries from "../assets/RESTCountries.jpg";
import newsletterpreview from "../assets/newsletterpreview.jpg";
export default function Projects() {
  const navigate = useNavigate();
  const handleAudiophileClick = () => {
    // Define the specific behavior when Audiophile is clicked
    navigate("/audiophile-details");
  };

  const handleRestCountriesClick = () => {
    // Define the specific behavior when Rest Countries is clicked
    navigate("/rest-countries-details");
  };

  const handleNewsletterClick = () => {
    // Define the specific behavior when Newsletter is clicked
    navigate("/newsletter-details");
  };
  return (
    <div>
      <ProjectHighlight
        imgSrc={audiphilepreview}
        projectTitle="Audiophile"
        description="This project required me to build a fully responsive multi-page e-commerce website to the designs provided. I used  Tailwind CSS and React."
        onClickAction={handleAudiophileClick}
      />
      <ProjectHighlight
        imgSrc={restcountries}
        projectTitle="REST Countries"
        description="This project required me to build a fully responsive page that integrates with the REST Countries API to pull country data and display it like in the designs. This was done using Tailwind CSS and React"
        onClickAction={handleRestCountriesClick}
        addClass="flex-row-reverse"
      />
      <ProjectHighlight
        imgSrc={newsletterpreview}
        projectTitle="Newsletter"
        description="This project required me to build out this newsletter form and get it looking as close to the design as possible. I used HTML5, along with Vanilla CSS and JavaScript for the areas that required interactivity, such as the testimonial slider."
        onClickAction={handleNewsletterClick}
      />
      <ProjectInterest />
    </div>
  );
}
