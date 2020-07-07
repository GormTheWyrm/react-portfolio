import React from 'react';
import logo from './logo.svg';
import './App.css';
// import TestComponent from './components/testComponent';
// import Navbar from "./components/Navbar/Navbar"
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PortfolioPage from "./components/Pages/PortfolioPage/PortfolioPage";
import HomePage from './components/Pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import PageNotFound from '../public/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">

          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            {/* <Route exact path="/test" component={TestComponent} /> */}
            <Route exact path="/portfolio" component={PortfolioPage} />
            {/* <Route component={PageNotFound} /> */}
          </Switch>
          {/* need to figure out the way to set default */}


        </div>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
