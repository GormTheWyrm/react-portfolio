import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer"
import "./HomePage.css"
class HomePage extends Component {


    // need to realign text...
    render() {
        return (
            <div>
            <div className="container background">
                <div>
                    <h3>Welcome!</h3>
                    <p>
                        My Name is Geordin Soucie and this is my GitHub React Pages <em>About Me</em> section.
                        You can see my portfolio <Link to="/portfolio">Here</Link>.
                        Testing Link <Link to="/react-portfolio/portfolio">Here</Link>.
                    </p>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h5>About Me</h5>
                        <p>Recently graduated from the University of Richmond's Web Development Bootcamp I am currently seeking employment as a web developer.
                        My hobbies run toward reading, writing, historical events and the occasional bout of swordplay.


                 </p>
                        <p>
                            Growing up in rural Massachusetts, I have always been interested in history, fantasy and epic adventurers.
                            After years of exploring the forest near my home I decided to begin exploring the Adirondack Park,
                            obtaining a bachelor's Degree in Environmental Science and Policy from Clarkson University in 2014.
                        </p>
                        <p>
                            After Graduation I spent a few years trying to get into the local State Park System before eventually getting a job in Lake Mead National Recreation Area in Arizona.
                            Deciding I didn't want to work weekends for the rest of my life I decided to change careers. It took me a couple years to figure out what career to shift to,
                            but once I did figure it out I signed up for a Web Development Bootcamp. Six months later I am enjoying React.js and creatign a backlog of realy cool technologies I want to explore.
                        </p>
                    </div>
                    <div className="col-4">
                        <h5>Here are a few interesting links</h5>
                        <p><a href="https://gormthewyrm.github.io/">My Github Portal Page</a> <br />
                       This links to my standard Github Pages webpage. It is a little more colorful, less employer centric,
                       and has a decent explaination of web development for all of my friends outside of the field.

                       </p>
                        <p><a href="https://www.linkedin.com/in/geordinsoucie/">Linked In</a></p>
                        <p>Note to self; this would be a good place for a resume</p>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        );
    };
}
export default HomePage;