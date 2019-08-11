import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Grids from "../MAIN/Grids";
import Main from "../Trending/Main";
import Header from  "../Header/Header.js"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 12, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} style = {{ color : 'White'}}>
      <AppBar position="relative" color="white" style={{ /*background: 'transparent' ,*/ boxShadow: 'none'}} >
      
        <Toolbar>
          <IconButton
            style = {{ color : 'Black'}}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            
          >
            <MenuIcon />
          </IconButton>
          <img src="https://img.icons8.com/ios/24/000000/music.png" />
          <Typography className={classes.title} variant="h6" noWrap>
          <div style = {{ color : 'Black'}}>
            Trax
            </div>
          </Typography >
          <Router>
          <Button color="secondary" >
          <Link to =  "/Grids" style = {{textDecoration: 'none'}}> Home </Link></Button>
          <Button color="inherit">
          <Link to =  "/Grids" style = {{textDecoration: 'none'}}>Grid </Link></Button>
          <Button color="inherit">
          <Link to =  "/Main" style = {{textDecoration: 'none'}}>About </Link></Button>
          <Button color="inherit">
          <Link to =  "/Topics" style = {{textDecoration: 'none'}}>Main </Link></Button>

          <Route path = "/Grids" component = {Grids}/>
          <Route path = "/Header" component = {Header}/>
          <Route path = "/Main" component = {Main}/>
          <Route path = "/Topics" component = {Grids}/>
          
          </Router>
          <div style = {{ color : 'Black'}}>
          <div className={classes.search} >
            <div className={classes.searchIcon}>
              <SearchIcon />
              
            </div>
            <div>
             
        </div>
            <InputBase 
             
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              
              inputProps={{ "aria-label": "search" }}
              
            />
            
          </div>
          
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

