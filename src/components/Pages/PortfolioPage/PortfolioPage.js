import React, { Component } from "react";
import Project from "../../Project/Project";
import AboutTime from "../../../images/AboutTime.PNG";
import Dayplanner from "../../../images/Dayplanner.PNG";
import PasswordGen from "../../../images/PasswordGen.PNG";
import Rock from "../../../images/Rock.PNG";
import RVAfish from "../../../images/RVAfish.PNG";
import Weather from "../../../images/Weather.PNG";

class PortfolioPage extends Component {

    render() {
        return (
            <div>
                {/* add some bootstrap to make these fit in nice columns... */}
                {/* maybe I can import the images and send them to the child component? */}
                <div className="container">
                    <div className="row">
                        <h1>Portfolio!</h1>
                    </div>
                    <div className="row">


                        <Project
                            projectName={"Fish RVA"}
                            projectRepo={"https://github.com/GormTheWyrm/BootcampProject2"}
                            projectUrl={"https://moustache-jake.herokuapp.com/"}
                            projectDescr={"A full stack forum site built with Node.js and hosted on Heroku."}
                            projectImage={RVAfish}
                        />
                        <Project
                            projectName={"About Time"}
                            projectRepo={"https://github.com/GormTheWyrm/FirstBootcampProject"}
                            projectUrl={"https://gormthewyrm.github.io/FirstBootcampProject/"}
                            projectDescr={"Front end world clock application utilizing WebGL Earth, TimeZone DB and Opencage Geocoding APIs."}
                            projectImage={AboutTime}
                        />
                        <Project
                            projectName={"DayPlanner"}
                            projectRepo={"https://github.com/GormTheWyrm/CalendarHomework"}
                            projectUrl={"https://gormthewyrm.github.io/CalendarHomework/"}
                            projectDescr={"This simple app allows users to add notes to rows correlating to different hours of the day. The hours are color coded based on the current time. Saves data in LocalStorage."}
                            projectImage={Dayplanner}
                        />

                        <Project
                            projectName={"Weather App"}
                            projectRepo={"https://github.com/GormTheWyrm/WeatherApp"}
                            projectUrl={"https://gormthewyrm.github.io/WeatherApp/"}
                            projectDescr={"This simple app allows users to see the forecast for specific cities. Users can search and add cities to their dashboard. Saves data in LocalStorage."}
                            projectImage={Weather}
                        />
                        <Project
                            projectName={"Rock, Paper, Scissors"}
                            projectRepo={"https://github.com/GormTheWyrm/RockPaperScissorsActivity"}
                            projectUrl={"https://gormthewyrm.github.io/RockPaperScissorsActivity/"}
                            projectDescr={"A simple Rock, Paper Scissors game."}
                            projectImage={Rock}
                        />
                        <Project
                            projectName={"Password Generator"}
                            projectRepo={"https://github.com/GormTheWyrm/PasswordHomework"}
                            projectUrl={"https://gormthewyrm.github.io/PasswordHomework/"}
                            projectDescr={"This front end application generates a simple password based on user imput criteria. One of my first projects."}
                            projectImage={PasswordGen}
                        />
                    </div>
                </div>
            </div>
        );
    };
}
export default PortfolioPage;