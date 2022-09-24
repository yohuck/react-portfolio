import React from "react"
import '../styles/Project.css'

const Project = ({ project }) => {
    return (
        <article>
        <div className="info">
            <div className="top">
                <h4>{project.name}</h4>
                <hr></hr>
                <div className="grp">
                    <a target='blank' href={project.repo}>GitHub Repo</a>
                    <a target="blank" href={project.live}>Live Site</a>
                </div>
                <p>{project.description}</p>
            </div>

            <div className="btm">

                <ul>
                    <li>JQuery</li>
                    <li>Socrata Open API</li>
                    <li>Geolocation API</li>
                    <li>Bulma</li>
                    <li>JavaScript</li>
                </ul>
                        </div>
            </div>
        </article>
)}

export default Project;