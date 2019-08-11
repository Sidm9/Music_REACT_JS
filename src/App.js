import React, { Fragment } from "react";
import "./App.css";
import Nav from "./Components/Header/Nav";
import Header from "./Components/Header/Header";
import Background from "./Components/Background.js";
import Main from "./Components/Trending/Main";
import Like from "./Components/Trending/Like";
import Grid from "./Components/MAIN/Grids";
import img from "./Components/img/landing-bg.jpg"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    
  <Router>
      
   
        <Route path="/Grid" component={Grid} />
        <Route exact path="/" component={Header} />
        <Route path="/about" component={Nav} />
        <Route path="/Main" component={Main} />

        <div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/Grid">Grid</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Main">Main</Link>
          </li> 
        </ul>
        <hr />
      </div>
    </Router>
 
/*    
    <Fragment>
    { <Nav/>
     <Header/>
     <Main/>
    </Fragment>
    
  */
  );
    }

export default App;
