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
                        <h3>Welcome!</h3>
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
                            <h5>About Me</h5>
                        <p>
                        Geordin Soucie grew up in rural Massachusetts in a time when the internet was confined to more
                        populated areas.
                    </p>
                    <p>
                        The son of an IT network professional and interior design specialist, Geordin developed an
                        interest in design at an early age.
                    </p>
                    <p>However, it was not until his junior year in college that he first discovered the joy of coding.
                        An Intro to Computer Science class at Clarkson University taught Geordin the joy of C++.
                    </p>
                    <p>In 2019, after determining that the Park Service demanded too many weekend hours,
                        Geordin signed up for a Web Development Bootcamp through the University of Richmond.
                        He graduated in August 2020 in the midst of the Covid-19 pandemic and began to seek more
                        permanent employment.
                    </p>

                    <h5>Passion and Hobbies</h5>
                    <p>Geordin is a student of history, a medieval enthusiast and a passionate learner. He loves
                        historical societies, sword combat and medieval fantasy.</p>

                    <p>
                        Hobbies include reading, writing, game design, 3D Modeling and attending events such as those
                        held by
                        <a href="sca.org" style={{color: "aliceblue;"}}> the Society of Creative Anachronism</a>.
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