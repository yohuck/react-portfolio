import React from "react";
import Project from "./Project";
import '../styles/Projects.css'
import projects from "../data/projects";
import PopperCard from "./PopperCard";


const Projects = ( ) => {

        return (
            <div className="pro-con">
            <section className="projects">
                {projects.map( project => <Project project={project} />)}
                <PopperCard className="projects proj popperToy" />
            </section>
            
           
            </div>
        )

        

        


}

export default Projects;