import React from "react";
import "./Project.css"
function Project(props) {


    return (
        <div className="projectDiv">
            {/* make this a card */}
            <h4>{props.projectName}</h4>
            <p>
                <a href={props.projectRepo}>Repo Link </a>
            </p>
            
            <p><a href={props.projectUrl}>Link to Functional Product </a></p>
            <img src={props.projectImage} alt="Screenshot"
            // will add size when imgs are working
            />
            <p>{props.projectDescr}</p>

        </div>
    );
};

export default Project;