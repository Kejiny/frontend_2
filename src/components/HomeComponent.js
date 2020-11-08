import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import  MediaCard from '../components/Card'
import Grid from '@material-ui/core/Grid';
import Murali  from '../components/images/Murali.png'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    
    imgPath:
      {Murali}
  },
  {
    
    imgPath:
      'https://ak.picdn.net/shutterstock/videos/5039747/thumb/1.jpg',
  },
  {
    
    imgPath:
      'https://www.hdwallpaper.nu/wp-content/uploads/2017/03/honey-6.jpg',
  },
  {
    
    imgPath:
      'https://www.newsclick.in/sites/default/files/2018-11/honey.jpg',
  },
  {
    
    imgPath:
      'https://www.superiorwallpapers.com/images/lthumbs/2018-10/12807_Jam-full-with-bees-honey-Sweet-HD-wallpaper.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
  
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 650,
    display: 'block',
    maxWidth: '120%',
    overflow: 'hidden',
    width: '100%',
    
    
  },
  label:{
    fontSize:"130px",
    color:"#112b0d",
    fontFamily:"Arial"
  },
  
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
   
   
    <div className={classes.root}>
    <Grid container spacing={3}>
    <Grid item xs={6}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      variant="dots"
      steps={6}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
      </Grid>
      <Grid item xs={6}> <br></br><label className={classes.label} htmlFor="outlined-pass"><br></br>

      &nbsp;&nbsp;Welcome To<br></br>&nbsp;&nbsp;Mullai Thean</label>
      </Grid>
       
      </Grid>
         < MediaCard/> 
    </div>
  );
}

export default Home;
