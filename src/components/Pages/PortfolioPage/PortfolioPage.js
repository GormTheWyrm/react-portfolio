import React, { Component } from "react";
import Project from "../../Project/Project";
import AboutTime from "../../../images/AboutTime.PNG";
import Dayplanner from "../../../images/Dayplanner.PNG";
import PasswordGen from "../../../images/PasswordGen.PNG";
import Quaker from "../../../images/Quaker.PNG";
import RVAfish from "../../../images/RVAfish.PNG";
import Weather from "../../../images/Weather.PNG";
import "./PortfolioPage.css"
import Footer from "../../Footer/Footer";
import FixMyShip from "../../../images/FixMyShip.PNG"

class PortfolioPage extends Component {

    render() {
        return (
            <div>
                {/* add some bootstrap to make these fit in nice columns... */}
                {/* maybe I can import the images and send them to the child component? */}
                <div className="container background">
                    <div className="row">
                        <h1>Portfolio!</h1>

                    </div>
                    <div className="row">

                        <Project
                            projectName={"Fish RVA"}
                            projectRepo={"https://github.com/GormTheWyrm/BootcampProject2"}
                            projectUrl={"https://moustache-jake.herokuapp.com/"}
                            projectDescr={"This app allows users to post comments and details of fish they caught."}
                            projectImage={RVAfish}
                            frontEnd={"Bootstrap, JavaScript, HTML and CSS"}
                            backEnd={"Node.js, Express.js, mySQL, and Sequelize"}
                            hostedOn={"Heroku"}
                        />
                        <Project
                            projectName={"FixMyShip"}
                            projectRepo={"https://github.com/GormTheWyrm/fixmyship2.0"}
                            projectUrl={"http://fixmyship20.herokuapp.com/"}
                            projectDescr={"Full stack MERN forum app that allows users to post relationship questions."}
                            projectImage={FixMyShip}
                            frontEnd={"Bootstrap, JavaScript, HTML and CSS"}
                            backEnd={"Node.js, Express.js, React, MongoDB, and Mongoose.js"}
                            hostedOn={"Heroku"}
                        />
                        <Project
                            projectName={"About Time"}
                            projectRepo={"https://github.com/GormTheWyrm/FirstBootcampProject"}
                            projectUrl={"https://gormthewyrm.github.io/FirstBootcampProject/"}
                            projectDescr={"Front end world clock application utilizing WebGL Earth, TimeZone DB and Opencage Geocoding APIs."}
                            projectImage={AboutTime}
                            frontEnd={"Pure.css, JavaScript, HTML and CSS"}
                            hostedOn={"GitHub Pages"}
                        />
                        <Project
                            projectName={"DayPlanner"}
                            projectRepo={"https://github.com/GormTheWyrm/CalendarHomework"}
                            projectUrl={"https://gormthewyrm.github.io/CalendarHomework/"}
                            projectDescr={"This simple app allows users to add notes to rows correlating to different hours of the day. The hours are color coded based on the current time. Saves data in LocalStorage."}
                            projectImage={Dayplanner}
                            frontEnd={"Bootstrap, JavaScript, HTML and CSS"}
                            hostedOn={"GitHub Pages"}
                        />

                        <Project
                            projectName={"Weather App"}
                            projectRepo={"https://github.com/GormTheWyrm/WeatherApp"}
                            projectUrl={"https://gormthewyrm.github.io/WeatherApp/"}
                            projectDescr={"This simple app allows users to see the forecast for specific cities. Users can search and add cities to their dashboard. Saves data in LocalStorage."}
                            projectImage={Weather}
                            frontEnd={"Bootstrap.css, JavaScript, HTML and CSS"}
                            hostedOn={"GitHub Pages"}
                        />

                        {/* <Project
                            projectName={"Password Generator"}
                            projectRepo={"https://github.com/GormTheWyrm/PasswordHomework"}
                            projectUrl={"https://gormthewyrm.github.io/PasswordHomework/"}
                            projectDescr={"This front end application generates a simple password based on user imput criteria. One of my first projects."}
                            projectImage={PasswordGen}
                        /> */}
                            <Project
                            projectName={"Ladysmith Friends"}
                            projectUrl={"http://www.ladysmithfriends.org/"}
                            projectDescr={"A website for the local chapter of the Religious Society of Friends"}
                            projectImage={Quaker}
                            frontEnd={"Bootstrap.css, HTML and CSS"}
                            hostedOn={"AWS"}
                        />
                    </div>

                    <div className="row">
                        <Footer />
                    </div>
                </div>

            </div>
        );
    };
}
export default PortfolioPage;