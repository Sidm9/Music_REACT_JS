import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Links as link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import img from "../img/landing-bg.jpg";
import bg from "../img/AdobeStock_208568531.jpeg";
import pop from "../img/POP.jpg";
import rock from "../img/ROCK.jpg";
import metal from "../img/metal.jpg";
import Main from "../Trending/Main.js";
import Grids from "../MAIN/Grids.js";
import Nav from "../Header/Nav";
import { typography } from "@material-ui/system";

function GridLayout() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {" team."}
    </Typography>
  );
}

{
  /* THE PART YOU DON'T WANNA TOUCH */
}
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const card1 = [1, 2, 3, 4, 5, 6];
// YE DEKH
// YE ARRAY BANI HUI HAI AND ISKE ACCORDING SAARE CARDS BANE HAI IN FORM OF GRID
export default function Album() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
       
        {/*
        <Toolbar>
          <img src="https://img.icons8.com/ios/24/000000/music.png"/>
          
          <Typography variant="h6" color="inherit" noWrap>
            Trax Albums
          </Typography>

     </Toolbar> */}
        <div style={{ backgroundImage: `url(${bg})` }}>
          <main>
            {/* Hero unit */}
            <div
              className={classes.heroContent}
              style={{ backgroundImage: `url(${bg})` }}
            >
              <Container maxWidth="xl">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  <div style={{ color: "White" }}>Album layout</div>
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  <div style={{ color: "White" }}>
                    Select your Genre So we can curate songs according to your
                    Interests...{" "}
                  </div>
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        {/*  <BrowserRouter>
                    <Link to = "/Main" >
                    */}
                        Go to Library
                        {/* <BrowserRouter>
                              <Route path = "/Main" component = {Main}></Route>
                      </BrowserRouter>
                      </Link>
                      <Route path = "/Grids" component = {Grids}/>
                      </BrowserRouter>
                       */}
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="muted">
                        Secondary action
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>

            {/*..................... FOR THE CARDS AND STUFF...........................*/}
            <Typography
              variant="h5"
              align="center"
              color="white"
              paragraph
            >
            <div style={{ color: "White" }}>
              Trending
              </div>
            </Typography>
            <Grids />
            {/*   <Container className={classes.cardGrid}>
            {/*........ POP CARD ....... 
            <Grid container spacing={2}>
              {card1.map((
                card // FOR MORE GRIDS>.!!!
              ) => (
                <Grid item key={card} xs={2} sm={2} md={2}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={pop}
                      title="Pop"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Pop
                      </Typography>
                      <Typography>POP</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="warning">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container> 
          */}

            {/*..................... FOR THE FOOTER..........................*/}
          </main>

          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            
              Trax
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            >
              booooooooooooooire
            </Typography>
            <GridLayout />
          </footer>
        </div>
        {/* End footer */}
      </React.Fragment>
      <Route exact path="/Main" component={Main} />
    </BrowserRouter>
  );
}
