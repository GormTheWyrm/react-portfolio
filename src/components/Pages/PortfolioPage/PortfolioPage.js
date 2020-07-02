import React, { Component } from "react";
import Project from "../../Project/Project";
class PortfolioPage extends Component {

    render(){
        return(
        <div>
            <p>Portfolio!</p>
            <Project 
            projectName={"test Project"}
            projectRepo={" fake repo"}
            projectUrl={"url"}
            projectDescr={"words words words words"}
            projectImage={"image"}
            />




        </div>
        );
    };
}
export default PortfolioPage;