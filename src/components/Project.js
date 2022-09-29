import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const styles = {

        article : {
            height: '100%',
            /* background-image: var(--gradient-8); */
            backgroundColor: 'black',
            /* height: 100%; */
            /* border: 1px solid black; */
            borderRadius: 'var(--radius-conditional-3)',
            padding: 'var(--size-2)',
            boxShadow: 'var(--shadow-3)',
            border: 'var(--border-size-3) solid transparent',
            color:'var(--violet-2)',

            
           
            /* max-width: 2fr; */
        },
    
        h2 : { 
            margin: 0,
            /* width: 100%; */
            color: 'var(--indigo-2)',
            backgroundColor: 'black',
            borderRadius: 'var(--radius-conditional-3)',
            padding: 'var(--size-2)',
            boxShadow: 'var(--shadow-3)',
            border: 'var(--border-size-3) solid transparent'
    
            /* -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; */
        },
    
        // span{
        //     font-size: var(--font-size-2);
        // }
    
        // h4{
        //     color: var(--indigo-2);
        // }
    
        // a{
        //     margin: 0;
        //     padding: 0;
        // }
    
    
        // ul{
        //     width: 100%;
        //     flex-wrap: wrap;
        //     margin: 0;
        //     padding: 0;
        //     display: flex;
        //     gap: var(--size-1);
        // }
    
        // ul li{
        //     color: white;
        //     list-style: none;
        //     padding: var(--size-1);
        //     background-color: var(--indigo-6);
        //     border-radius: var(--border-size-3);
        // }
    
    
    
        // '.info': {
        //     height: '100%',
        //     display: 'flex',
        //     flexDirection: 'column',
        //     justifyContent: 'space-between',
        // }
}

const Project = ({ project }) => {
    return (
        <article style={styles.article} className="proj">
        <div className="info">
            <div className="top">
                <div class="title-top">
                    <h4>{project.name}</h4>
                    <p className="pic">📷</p>
                </div>
                <hr></hr>
                <div className="grp">
                    <a target='blank' href={project.repo}>GitHub Repo</a>
                    <a target="blank" href={project.live}>Live Site</a>
                </div>
                <p>{project.description}</p>
            </div>

            <div className="btm">

                <ul>
                    {project.stack.map(function(tech, index){
                        return <li key={ index }>{tech}</li>
                    })}
                </ul>
                        </div>
            </div>
        </article>
)}

export default Project;