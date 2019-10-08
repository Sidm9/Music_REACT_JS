import React, { Fragment } from "react";
import "./App.css";
import Nav from "./Components/Header/Nav";
import Header from "./Components/Header/Header";
import Background from "./Components/Background.js";
import Main from "./Components/Trending/Main";
import Like from "./Components/Trending/Like";
import Grid from "./Components/MAIN/Grids";
import img from "./Components/img/landing-bg.jpg";
import Carousel from "./Components/Header/Carousel";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (

    <Fragment>
      <Nav />
      <Header />
      
    </Fragment>
  );
}

export default App;
