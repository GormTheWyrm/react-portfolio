import React from "react";
import "./Project.css"
function Project(props) {


/*
project name
repo link
demo link
img
text - expand on this!
~~~
project name
repo link
demo link
img
descr, list of tech
add skills section to page...
-min 5 skills or tech... preferrably as a % proficiency... 
--need to figure out guest accounts...
--get good readme files in projects...



How might I quickly describe these projects?
frontend, backend or fullstack?
-which stack
frontend tech
backend tech
function/ what does app do

Fish RVA
link
link
img
Fullstack
bootstrap, javascript, html, css
mysql, sequealize, node and express
descr: app that allows users to post comments and details of fish they caught
...node and express

...hosted on?
*/


    return (
        <div className="projectDiv">
            {/* make this a card */}
            <h4>{props.projectName}</h4>
            <p>
                <a href={props.projectRepo}>Repo Link </a>
            </p>
            <img src={props.projectImage} alt="Screenshot"/>
            {/*<ul>
             <li>
            {props.frontEnd}
            </li>
            <li>
            {props.backEnd}
            </li>
            </ul> */}
            <p className="leftP">{props.frontEnd}</p>
            <p className="leftP">{props.backEnd}</p>
            <p className="leftP">{props.projectDescr}</p>
                {props.hostedOn ? 
                 <p className="leftP">Hosted on: <a href={props.projectUrl}>{props.hostedOn}</a></p>
                 : 
                 <p className="leftP"><a href={props.projectUrl}>Link to Demo </a></p>
                //  if not hosted I should add a link to the readme with a demo GIF
                 }
        </div>
    );
};


export default Project;