import React, { Fragment } from "react";
import "./App.css";
import Nav from "./Components/Header/Nav";
import Grid from "./Components/Trending/Grid";
import Header from "./Components/Header/Header";
import Background from "./Components/Background.js";
function App() {
  return (
    <Fragment>
      <Nav />
      <Header />
      
      <Background />
    </Fragment>
  );
}

export default App;
