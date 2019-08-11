import React, { Fragment } from "react";
import "./App.css";
import Nav from "./Components/Header/Nav";
import Header from "./Components/Header/Header";
import Background from "./Components/Background.js";
import Main from "./Components/Trending/Main";
import Like from "./Components/Trending/Like";
import Grid from "./Components/MAIN/Grids";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
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
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Route path="/Grid" component={Grid} />
        <Route exact path="/" component={Header} />
        <Route path="/about" component={Nav} />
        <Route path="/topics" component={Main} />
      </div>
    </Router>

    // <Fragment>
    // <Header/>
    // <Nav/>
    // </Fragment>
  );
}

export default App;
