"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "bigPie Pizza",
    description:
      "bigPie Pizza is a food ordering application that allows users to login or register to order a variety of different food items. The user can checkout using Stripe. The application also allows admin users to add, update, and/or delete categories and menu items. The admin(s) can also view and edit all users and see all orders and whether or not they have been paid. All users with an account are able to view and edit their profile as well as see their past orders. This application is hosted on Vercel.",
    technology: "NextJS, React, MongoDB, Stripe, HTML/CSS",
    image: "/projects/bigpie.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nstark12/bigpie-pizza",
    previewUrl: "https://bigpie-pizza.vercel.app/",
  },
  {
    id: 2,
    title: "<scripts />",
    description:
      "<scripts /> is a social media platform tailored to the needs of software developers and programmers. This platform facilitates connections among developers by enabling users to craft and share posts, consequently fostering a network of followers and connections. This application is powered by MERN stack and hosted on Heroku.",
    technology:
      "React, Apollo, GraphQL, Chakra UI, Cloudinary, Heroku, HTML/CSS",
    image: "/projects/scripts-login-min.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lizf57/scripts-connect-coders",
    previewUrl:
      "https://scripts-connects-coders-15b85f76118d.herokuapp.com/login",
  },
  {
    id: 3,
    title: "MyCookbook",
    description:
      "This application allows users to create an account to search for and save their own recipes. I am CONSTANTLY losing my recipes so I wanted to make an application where I can keep them all in one place. The app allows the user to fill out a form with any recipe information and save it to their profile. The user can also search the web for recipes using keywords, ingredients, or full recipe names. This search uses the Spoonacular API and search is limited due to using the free version.",
    technology:
      "NodeJS, Express, Sequelize, MySql2, Bcrypt, Spoonacular API, Heroku, HTML/CSS",
    image: "/projects/mycookbook-min.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tjansson-ui/JobReadyResumeBuilder.git",
    previewUrl: "https://my-cookbook-recipe-saver-55777e226eb7.herokuapp.com/",
  },
  {
    id: 4,
    title: "CareerCraft Resume Builder",
    description:
      "This application provides a simple template for users to generate a resume. The application allows users to sign up for CareerCraft's services, and then gives users access to the resume generator. The application functions through NodeJs and ExpressJS command line following the MVC paradigm. The application uses Handlebars.js as the template engine, and mySql2 and Sequelize as the ORM.",
    technology:
      "NodeJS, Express, Sequelize, MySql2, Bcrypt, PDFmake, Heroku, HTML/CSS",
    image: "/projects/careercraft-min.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tjansson-ui/JobReadyResumeBuilder.git",
    previewUrl: "https://career-craft-2e3c88d80d23.herokuapp.com/login",
  },
  {
    id: 5,
    title: "PWA - Text Editor",
    description:
      "Just Another Text Editor, or JATE, is a text editor that runs in the browser. JATE features multiple data persistence techniques that act as redundancy if any of the options are not supported by the browser. This application will work offline and can be installed to any computer.",
    technology: "Webpack, IndexedDB, JavaScript",
    image: "/projects/jate-min.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nstark12/text-editor-pwa.git",
    previewUrl: "https://pwa-text-editor-pwa-a311c8b77a83.herokuapp.com/",
  },
  {
    id: 6,
    title: "Dog Blog",
    description:
      "This application is meant for dog lovers and dog owners to share their love and lessons for our furry friends. Users can create an account to read, post, and comment on blog posts all about dogs. The application functions through NodeJs and ExpressJS command line following the MVC paradigm. The application uses Handlebars.js as the template engine, and mySql2 and Sequelize as the ORM.",
    technology: "NodeJS, Express, Sequelize, MySql2, Bcrypt, Heroku, HTML/CSS",
    image: "/projects/dogblog-min.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nstark12/dog-blog.git",
    previewUrl: "https://dog-blog-a03070a07329.herokuapp.com/login",
  },
  {
    id: 7,
    title: "Encyclopet",
    description:
      "A simple application to teach a user about any dog or cat breed searched. It also provides random fun facts on cats and dogs.",
    technology: "Third Party APIs, JavaScript, HTML/CSS",
    image: "/projects/encyclopet-min.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nstark12/encyclopet",
    previewUrl: "https://nstark12.github.io/encyclopet/",
  },
  {
    id: 8,
    title: "Landmark Golf Course Products",
    description:
      "An extensive frontend website for Landmark Golf Course Products that accurately displays their current product offerings.",
    technology: "JavaScript, HTML/CSS",
    image: "/projects/landmarkgolf-min.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nstark12/landmark-golf",
    previewUrl: "https://rinowood.com/",
  },
  {
    id: 9,
    title: "Landmark Studio & Design",
    description:
      "An extensive frontend website for Landmark Studio & Design that accurately displays their current product offerings.",
    technology: "JavaScript, HTML/CSS",
    image: "/projects/landmarkstudio-min.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tjansson-ui/JobReadyResumeBuilder.git",
    previewUrl: "https://landmarkstudio.com/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-u md:mb-12">
        My Projects
      </h2>

      <div className="flex flex-row justify-center items-center gap-2 text-white py-6">
        <ProjectTag
          onClick={handleTagChange}
          name={"All"}
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"Web"}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"Mobile"}
          isSelected={tag === "Mobile"}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md-gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technology={project.technology}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}{" "}
      </div>
    </section>
  );
};

export default ProjectSection;
