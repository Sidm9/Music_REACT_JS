import React, { Component } from "react";
import pop from "../img/POP.jpg";
import rock from "../img/ROCK.jpg";
import metal from "../img/metal.jpg";
import Grid from "@material-ui/core/Grid";
import icons from "@material-ui/icons";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import cardbg from "../img/1074.png";
import "./cardbg.css";  
const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
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
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));


const trending = [
  {
    id: "1"
  },
  {
    id: "2"
  },
  {
    id: "3"
  },
  {
    id: "4"
  },
  {
    id: "5"
  }
];

const genre = [
  {
    title: "Jazz",
    id: "1",
    img: "../img/Jazz.jpg"
  },
  {
    title: "Pop",
    id: "2",
    img: "../img/POP.jpg"
  },
  {
    title: "Rock",
    id: "3",
    img: "../img/Rock.jpg"
  },
  {
    title: "Metal",
    id: "4",
    img: "../img/metal.jpg"
  },
  {
    title: "Classical",
    id: "4",
    img: "../img/CLassical.jpg"
  },
  {
    title: "Heavy Metal",
    id: "5",
    img: "../img/metal.jpg"
  },
  {
    title: "Heavy Metal",
    id: "5",
    img: "../img/metal.jpg"
  },
  {
    title: "Heavy Metal",
    id: "5",
    img: "../img/metal.jpg"
  },
  {
    title: "Heavy Metal",
    id: "5",
    img: "../img/metal.jpg"
  },
  {
    title: "Heavy Metal",
    id: "5",
    img: "../img/metal.jpg"
  },
  {
    title: "Heavy Metal",
    id: "5",
    img: "../img/metal.jpg"
  },
  {
    title: "Heavy Metal",
    id: "5",
    img: "../img/metal.jpg"
  },
  {
    title: "Heavy Metal",
    id: "5",
    img: "../img/metal.jpg"
  },
  {
    title: "Heavy Metal",
    id: "5",
    img: "../img/metal.jpg"
  },
  {
    title: "Heavy Metal",
    id: "5",
    img: "../img/metal.jpg"
  },
  {
    title: "Heavy Metal",
    id: "5",
    img: "../img/metal.jpg"
  },
  {
    title: "Heavy Metal",
    id: "5",
    img: "../img/metal.jpg"
  },
  {
    title: "Heavy Metal",
    id: "5",
    img: "../img/metal.jpg"
  }
];
export default function Grids() {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid}>
      {/*........ POP CARD ....... */}

      <Grid container spacing={2}>
        {trending.map(() => (
          // FOR MORE GRIDS>.!!!
          <Grid item key={trending} xs={12} sm={12} md={1}>
            <Card className={classes.card}>
        {/* ADDED BACKGROUND */}
            <div style = {{backgroundImage: `url(${cardbg})`}}>
              <CardMedia  className={classes.cardMedia} image={pop} />
              <CardContent  className={classes.cardContent}>
             
                <Typography gutterBottom variant="h5" component="h2">
                  {trending.id}
                </Typography>
                <Typography>{trending.id}</Typography>
                
              </CardContent>
              <Button size="small" color="primary">
                GO TO <br />
              </Button>
              <CardActions />
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>
        {genre.map((
          genre // FOR MORE GRIDS>.!!!
        ) => (
          <Grid item key={genre} xs={2} sm={2} md={2}>
            <Card className={classes.card}>
            <div style = {{backgroundImage: `url(${cardbg})`}}>
            
              <CardMedia className={classes.cardMedia} image={pop} />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {genre.title}
                </Typography>
                <Typography>{genre.title}</Typography>
              </CardContent>
              <Button size="small" color="primary">
                GO TO
              </Button>
              <CardActions />
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
