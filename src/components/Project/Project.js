import React from "react";

function Project(props) {


    return (
        <div>
            {/* make this a card */}
            <h4>{props.projectName}</h4>
            <p>
                <a href={props.projectRepo}>Repo Link </a>
            </p>
            
            <p><a href={props.projectUrl}>Link to Functional Product </a></p>
            <p>{props.projectDescr}</p>

        </div>
    );
};

export default Project;