import React, { Fragment } from "react";
import "./App.css";
import Nav from "./Components/Header/Nav";
import Grid from "./Components/Trending/Grid";
import Header from "./Components/Header/Header";
import Background from "./Components/Background.js";
import img from "./Components/img/landing-bg.jpg"
import Grids from "./Components/MAIN/Grids";
function App() {
  return (
    
    <Fragment>
   {/* <div style = {{backgroundImage: `url(${img})`}}></div> */}
    
      <Nav />
      <Header/>
      <Background/>

    </Fragment>
  );
}

export default App;
