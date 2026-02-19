export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architecture: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "E-commerce platform to sell Yerba mate essentials",
    stack: ["React", "Vite", "Node.js", "React Router DOM", "TypeScript", "CSS"],
    liveUrl: "",
    repoUrl: "https://github.com/drewsteele408/yerba-shirts/tree/main",
    problem:
      "Since yerba mate is a somewhat new product within the United States, there are few places online to buy authentic and organic yerba mate.",
    solution:
      "Create a marketplace where all brands of yerba mate can be sold, inclduing the needed accessories such as bombillas and yerba mate gourds.",
    keyFeatures: [
      "A product catalog with multiple product cards and a dedicated product detail page for viewing individual items",
      "A functional cart system that adds or subtracts item from the cart", 
      "A responsive navbar component with React Router for seamless page navigation"

    ],
    architecture:
      "This yerba mate e-commerce platform is a modern, full-stack React application built with TypeScript and Vite. This application follows component based architechture with reusable UI components, React routing for client-side navigation, and modular CSS structure for styling options.",
    screenshots: [
     "DON'T FORGET TO ADD SCREENSHOTS HERE ",
    ],
  },
  {
    id: 2,
    title: "D&D Toolkit",
    description: "This application is a D&D toolkit to help Dungeon Masters generate encounters for party members. This application allows you to create and manage your characters by storing information inside of local storage. It also pulls from the open5e API to generate a random encounter with a classic D&D monster. ",
    stack: ["HTML", "CSS", "JavaScript", "Open5e API", "LocalStorage"],
    liveUrl: "#",
    repoUrl: "https://github.com/drewsteele408/dnd-starter",
    problem:
      "As a dungeon master, it can be difficult to create engaging and meaninful encounters for your party members. D&D is a massive world with many different possible encounters and can be difficult to find and create these encounters.",
    solution:
      "This application pulls from the open5e API and will generate a random encoutner with all the information needed including hitpoints, armour class, and all actions that this monster is capable. This eliminates the need to search for encounters and will generate one for you with the click of a button.",
    keyFeatures: [
      "Create a new D&D character with name, class, race, and level", 
      "LocalStorage integration to save character data between sessions", 
      "View saved character details", 
      "Generate random monsters from the Open5e API database", 
      "Filter monsters by Challenge Rating (CR 0-30)", 
      "Multi-page navigation"

    ],
    architecture:
      "This application utilizes HTML to create static feature pages as well as a welcome landing page. This application also uses modular JavaScript files for each feature as well as shared utility JavaScript files. CSS is used for the styling tool accross all pages, and LocalStorage is used to store data such as character information",
    screenshots: [
      "/screenshots/project-manager-board.png",
      "/screenshots/project-manager-timeline.png",
      "/screenshots/project-manager-team.png",
    ],
  },
  {
    id: 3,
    title: "Propert Management Website Template Brochure",
    description: "This application is the U2-QBO apartment complex brochure template. It is a modern, responsive website for apartment complexes. This app was built using React, TypeScript, and Vite with modular CSS for styling. This site is meant to be a deployable microservice for the U2-QBO applicant portal.",
    stack: ["React", "TypeScript", "React Router DOM", "Vite", "CSS"],
    liveUrl: "",
    repoUrl: "https://github.com/drewsteele408/u2-QBO-brochure-template",
    problem:
      "Apartment complexes have a difficult time managing their online presence and administrative duties in one place. They need both an administrative application that can handle their day to day operations as well as a deployable website to bring in tenants.",
    solution:
      "This application is a website template brochure that can be deployed as a microservice for the U2-QBO management portal. This allows apartment complexes to have a deployable, responsive website that features their amenities, but is connected from one platform.",
    keyFeatures: [
      "Customizable content through centralized configuration files",
      "Display multiple unit types with detailed information", 
      "Displays community features", 
      "Property information"
    ],
    architecture:
      "This application uses component based architechture with reusable components such as the header and footer components. The content is stored in different configuration files to dynamically upload information to the site. There are different TypeScript interfaces that are used throughout the app to ensure type safety, and CSS is used to styling withing component based files.",

    screenshots: [
      "/screenshots/dashboard-charts.png",
      "/screenshots/dashboard-metrics.png",
      "/screenshots/dashboard-filters.png",
    ],
  },
];
