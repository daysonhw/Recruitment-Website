import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import featuredImage from '../../static/frontpage.png'


const useStyles = makeStyles((theme) => ({
  mainFeatured: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '27em',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedContent: {
    position: 'relative',
    padding: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '8em',
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeatured(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeatured} style={{ backgroundImage: `url(${featuredImage})` }}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <Container className={classes.mainFeaturedContent}>
            <Typography component="h2" variant="h3" color="inherit" gutterBottom>
              Do what you love
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Create the future you want
            </Typography>
            {props.children}
          </Container>
        </Grid>
      </Grid>
    </Paper>
  );
}
