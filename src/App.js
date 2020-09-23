import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import TestComponent from './components/testComponent';
// import Navbar from "./components/Navbar/Navbar"
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PortfolioPage from "./components/Pages/PortfolioPage/PortfolioPage";
import AboutMe from './components/Pages/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Page404 from './components/Pages/Page404/Page404';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">


      {/* prexif all links with   <Link to={process.env.PUBLIC_URL + '/'}>   */}
      <Router>
        <div>
          <Header />
          <Switch>
            
            <Route path={process.env.PUBLIC_URL + "/aboutme"} component={AboutMe} />
            <Route path={process.env.PUBLIC_URL + "/portfolio"} component={PortfolioPage} />
            <Route path={process.env.PUBLIC_URL + "/home"} component={PortfolioPage} />
            <Route path={process.env.PUBLIC_URL + "/"} component={PortfolioPage} /> 
            {/* make sure these two lines are near the end so other routes are hittable */}
            <Route path='*' component={Page404} />
          </Switch>
        </div>
      </Router>
      {/* <Footer /> */}
    
    


    </div>
  );
}

export default App;

// to redeploy go into node modules/cach and delete the gh-pages folder. (Needs verification)