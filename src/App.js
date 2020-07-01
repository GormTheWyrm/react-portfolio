import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/testComponent';
import Navbar from "./components/Navbar/Navbar"
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
          {/* <Navbar> */}
          {/* replace this with my header... component... which will be a navbar...probably */}
          {/* <wrapper> */}
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/test" component={TestComponent} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route component={TestComponent} />
          </Switch>
          {/* need to figure out the way to set default */}
          {/* </wrapper> */}
          {/* </Navbar> */}


        </div>

      </Router>
    </div>
  );
}

export default App;
