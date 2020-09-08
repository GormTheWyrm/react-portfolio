import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import TestComponent from './components/testComponent';
// import Navbar from "./components/Navbar/Navbar"
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PortfolioPage from "./components/Pages/PortfolioPage/PortfolioPage";
import HomePage from './components/Pages/HomePage/HomePage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
    {/* prexif all links with   <Link to={process.env.PUBLIC_URL + '/'}>    ? each-router or react-router? */}
          <Header />
          <Switch>
          {/* <Route path={process.env.PUBLIC_URL + '/'}> */}
            <Route path={process.env.PUBLIC_URL + "/"} component={PortfolioPage} />
            <Route path={process.env.PUBLIC_URL + "/aboutme"} component={HomePage} />
            <Route path={process.env.PUBLIC_URL + "/portfolio"} component={PortfolioPage} />
            <Route path={process.env.PUBLIC_URL + "/home"} component={PortfolioPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

// to redeploy go into node modules/cach and delete the gh-pages folder. (Needs verification)