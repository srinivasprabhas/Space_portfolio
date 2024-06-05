import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/pva1a.png"
          title="Password Vault"
          description="The core focus of this project is to meet the requirement for a secure and centralized 
          password management solution. By leveraging encryption techniques and email notifications, users can 
          confidently store their passwords in a protected manner and conveniently retrieve them when necessary. 
          The project also aims to allow users the flexibility to modify the provided data as needed, ensuring that 
          they can adapt and update their password information as required while maintaining the overall security of 
          the system."
        />
        <ProjectCard
          src="/agedetector.png"
          title="Age and Gender Detector"
          description="The process of gender classification involves extracting relevant features from a facial image and using a machine learning algorithm to predict the gender of the person.Uses OpenCV and Numpy"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="A space themed portfolio website made using next js,react and framer motion"
        />
        
      </div>
    </div>
  );
};

export default Projects;
