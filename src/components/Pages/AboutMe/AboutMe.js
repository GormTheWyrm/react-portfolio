import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer"
import "./AboutMe.css"
class AboutMe extends Component {


    // need to realign text...
    render() {
        return (
            <div className="about-me">
                <div className="container background">
                    <div>
                        <h3>About Me</h3>
                        <p>
                            My Name is Geordin Soucie and this is my GitHub React Pages <em>About Me</em> section.
                        You can see my portfolio <Link to={process.env.PUBLIC_URL + "/portfolio"}>Here</Link>.
                    </p>
                    </div>
                    <div className="row section1">
                        <div className="col-12">
                            <h5>Web Development</h5>
                            <p>
                            Front End Web Developer with background in Environmental Science and experience in JavaScript, CSS, React.js, and responsive web design. 
                            Recently earned a Full Stack Development Certificate from the University of Richmond. 
                            </p>
                        </div>
                        {/* picture here ?*/}
                        <div className="section2-left col-8">
                            <h5> Geordin Soucie</h5>
                            <p>
                                Who
                            </p>
                        </div>
                        <div className="col-4 right-div">
                            <h5>Web Development Skills:</h5>

                            <ul>
                                <li>
                                    JavaScript
                             </li>
                                <li>
                                    HTML
                             </li>
                                <li>
                                    CSS
                             </li>
                                <li>
                                    React.js
                             </li>
                                <li>
                                    jQuery
                             </li>
                                <li>
                                    Node.js
                             </li>
                                <li>
                                    Express.js
                             </li>
                                <li>
                                    MongoDB
                             </li>
                                <li>
                                    SQL
                             </li>
                                <li>
                                    GitHub & Git
                             </li>

                            </ul>
                        </div>
                    </div>


                </div>
                <div className="container">
                    <div className="row">
                        <Footer />
                    </div>
                </div>
            </div>
        );
    };
}
export default AboutMe;