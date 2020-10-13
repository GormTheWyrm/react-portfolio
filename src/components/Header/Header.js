import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {


    return (
        <div>
            {/* <p>This will be a real header or navbar</p> */}

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <a className="navbar-brand" >Geordin Soucie
                {/* should I put my email here? */}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={process.env.PUBLIC_URL + "/aboutme"}>

                                <span className="nav-link">
                                    About Me </span>
                                <span className="sr-only">(current)</span>
                                {/* not sure what this last line actually does... need to fix the clor of the links!*/}
                            </Link>
                        </li>

                        <li className="nav-item active">
                            <Link to={process.env.PUBLIC_URL + "/portfolio"}>
                                <span className="nav-link">
                                    Portfolio </span>
                                {/* <span className="sr-only">(current)</span></a> */}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/geordinsoucie/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/GormTheWyrm" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                        <li >
                        <p className="nav-link">gsoucieWebDev@gmail.com</p>
                        </li>


                    </ul>

                </div>
                </div>
            </nav>










        </div >
    );
};

export default Header;