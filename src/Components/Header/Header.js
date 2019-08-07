import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import img from "../img/landing-bg.jpg" 
import pop from "../img/POP.jpg"
import rock from  "../img/ROCK.jpg"
import metal from "../img/metal.jpg"

function GridLayout() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

{/* THE PART YOU DON'T WANNA TOUCH */}
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),  
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const card1 = [1,2,3];

export default function Album() {
  const classes = useStyles();

  return (

    // ......APP BAR......
    <React.Fragment>
      <CssBaseline />
     { /*
        <Toolbar>
          <img src="https://img.icons8.com/ios/24/000000/music.png"/>
          
          <Typography variant="h6" color="inherit" noWrap>
            Trax Albums
          </Typography>

     </Toolbar> */}

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent} style = {{backgroundImage: `url(${img})`}}>
                
          <Container maxWidth="xl">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            <div style={{ color: 'White' }}>Album layout</div> 
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            <div style={{ color: 'White' }}>Select your Genre So we can curate songs according to your Interests... </div>
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="outlined" color="muted">
                    Go to Library
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="muted">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

          {/*..................... FOR THE CARDS AND STUFF...........................*/}
      <Container className={classes.cardGrid} maxWidth="md">
      {/*........ POP CARD ....... */}
      <Grid container spacing={4}>
        {card1.map(card => (
          <Grid item key={card} xs={12} sm={61} md={4}>
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


    <Container className={classes.cardGrid} maxWidth="md">
      {/*........ ROCK CARD ....... */}
      <Grid container spacing={4}>
        {card1.map(card => (
          <Grid item key={card} xs={12} sm={61} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={rock}
                title="Pop"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  ROCK
                </Typography>
                <Typography>ROCK</Typography>
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

    <Container className={classes.cardGrid} maxWidth="md">
      {/*........ METAL CARD ....... */}
      <Grid container spacing={4}>
        {card1.map(card => (
          <Grid item key={card} xs={12} sm={61} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={metal}
                title="Metal"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  METAL
                </Typography>
                <Typography>METAL</Typography>
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

    
      
         {/*..................... FOR THE FOOTER..........................*/}
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
         Trax
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          booooooooooooooire
        </Typography>
        <GridLayout />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}