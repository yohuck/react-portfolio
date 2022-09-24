import React from "react";
import Project from "./Project";
import '../styles/Projects.css'
import projects from "../data/projects";

const Projects = ( ) => {

        return (
            <section className="projects">
                {projects.map( project => <Project project={project} />)}
            </section>
            
             
        )

        


}

export default Projects;