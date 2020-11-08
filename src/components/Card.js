import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Murali from '../components/images/Murali.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  root1: {
    flexGrow: 1,
  },
});
 const useStyles1 = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function MediaCard() {
  const classes = useStyles();
  const classes1 = useStyles1();

  return (
     
 
    
    <div className={classes.root1}>
    <Grid container spacing={3}>
      
        <Grid item xs={3}>
          <Paper className={classes.paper}>   <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
           src={Murali} 
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Murali Flower Honey
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Murali flower honey is one of
the best honey type of all!
Awesome in taste and just do
wow in health benefits!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>   <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          imagesrc={Murali} 
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Neem Flower Honey
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Neem flower honey has many
health benefits and really help
us to live a healthy life!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>   <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="data:image/jpeg;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
      Paalai Flower Honey
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Paalai flower honey is seasonal
& very tasty and healthy honey
for our life. This unique tasty
honey is rare!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>   <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://thumbs.dreamstime.com/b/honey-jar-over-wooden-background-jewish-rosh-hashana-new-year-holidays-celebration-57468251.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Honey Comb
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Aha..! The best part of
consuming honey is with honey
comb! We bring it for you!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
      </Grid>
      </Grid>
      
      </div>
      
  );
}
