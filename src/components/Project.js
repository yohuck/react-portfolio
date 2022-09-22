import React from "react"
import '../styles/Project.css'

const Project = () => {
    return (
        <article>
        <div className="info">
            <div className="top">
                <h4>Recycle Better</h4>
                <hr></hr>
                <div className="grp">
                    <a target='blank' href="https://github.com/yohuck/wish-cycle">GitHub Repo</a>
                    <a target="blank" href="https://yohuck.github.io/wish-cycle/">Live Site</a>
                </div>
                <p>A web application to help conscious consumers quickly and easily find the best way to recycle or dispose of household items.</p>
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