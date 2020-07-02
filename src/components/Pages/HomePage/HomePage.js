import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer"
class HomePage extends Component {


    // need to realign text...
    render() {
        return (
            <div className="container">
                <div>
                    <h3>Welcome!</h3>
                    <p>
                        My Name is Geordin Soucie and this is my GitHub React Portfolio.
                        You can see the projects in the portfolio <Link to="/home">Here</Link>.
                    </p>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h5>About Me</h5>
                        <p>I am finishing up a Web Development Bootcamp with the University of Richmond.
                        As a student soon to be entering the job market I created this site to show off my portfolio.
                        I am focusing on my final project so the site may be a bit basic right now.
                 </p>
                    </div>
                    <div className="col-4">
                        <h5>Here are a few interesting links</h5>
                       <p><a href="https://gormthewyrm.github.io/">My Github Portal Page</a> <br />
                       This links to my standard Github Pages webpage. It is a little more polished (right now),
                       and has a decent explaination of web development for all of my friends outside of the field.

                       </p>
                       <p><a href="https://www.linkedin.com/in/geordinsoucie/">Linked In</a></p>
                        <p>Note to self; this would be a good place for a resume</p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    };
}
export default HomePage;