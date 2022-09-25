import React from "react";
import Project from "./Project";
import '../styles/Projects.css'
import projects from "../data/projects";
import PopperCard from "./PopperCard";


const Projects = ( ) => {

        return (
            <div>
            <section className="projects">
                {projects.map( project => <Project project={project} />)}
            <PopperCard />
            </section>
            
           
            </div>
        )

        

        


}

export default Projects;