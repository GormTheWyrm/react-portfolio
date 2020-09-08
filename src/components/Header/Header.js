import React from "react";
import { Link } from "react-router-dom";

function Header() {


    return (
        <div>
            {/* <p>This will be a real header or navbar</p> */}

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
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
                        <li className="nav-item">
                            <a className="nav-link" href="https://gormthewyrm.github.io/" target="_blank" rel="noopener noreferrer">GitHub Pages Portal</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Projects            </a>
                                
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {/* should this link to projects or send user down to the projects section on this page? */}
                                <a className="dropdown-item" href="#">Most Recent Project</a>
                                <a className="dropdown-item" href="#">Final Bootcamp Project</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                    </ul>

                </div>
            </nav>










        </div >
    );
};

export default Header;