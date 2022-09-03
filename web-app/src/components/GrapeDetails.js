import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    padding: theme.spacing(5),
  },
  buttonStyle: {
    marginBottom: 50,
  },
  img: {
    marginBottom: '30%',
    maxWidth: 350,
    minWidth: '100%',
    height: 'auto',
  },
  nav: {
    textDecoration: 'None',
  },
}));

const CodeURL = 'https://restcountries.eu/rest/v2/alpha/';

export default function GrapeDetails(props) {
  const classes = useStyles();

  const [grapeById, setGrapeById] = useState([]);

  const fetchGrapeDataById = async () => {
    const grapeId = parseInt(
      window.location.pathname.substring(
        window.location.pathname.lastIndexOf('/') + 1
      )
    );
    const grapes = require('../data/sorten.json');
    for (const grape of grapes) {
      if (grape.id === grapeId) {
        setGrapeById(grape);
        console.log('found it');
        return;
      }
    }
  };

  useEffect(() => {
    fetchGrapeDataById();
  }, []);

  return (
    <div className={classes.root}>
      <Grid lg={12} item container spacing={3}>
        <Grid item lg={12} xs={12}>
          <NavLink className={classes.nav} to='/'>
            <Button variant='outlined' className={classes.buttonStyle}>
              {' '}
              <ArrowBackIcon /> Back
            </Button>{' '}
          </NavLink>
        </Grid>
        <Grid item lg={4} xs={12}>
          <img className={classes.img} alt='complex' src={grapeById.img_url} />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Typography gutterBottom variant='h4'>
            <strong>{grapeById.name}</strong>
          </Typography>
          <Typography variant='body2' gutterBottom>
            <Typography>
              {' '}
              <strong>Farbe : </strong>
              {grapeById.color}{' '}
            </Typography>
            <Typography>
              <strong>Wuchs : </strong>
              {grapeById.wuchs}{' '}
            </Typography>
            <Typography>
              <strong>Reife Zeit : </strong>
              {grapeById.reifezeit}{' '}
            </Typography>
            <Typography>
              <strong>Lageansprüche : </strong>
              {grapeById.lageansprueche}{' '}
            </Typography>
            <Typography>
              <strong>Pilzresistent : </strong>
              {grapeById.pilzresistent ? 'Ja' : 'Nein'}{' '}
            </Typography>
            <Typography>
              <strong>Beschreibung : </strong>
            </Typography>
            <Typography style={{ whiteSpace: 'pre-line' }}>
              {grapeById.desc}
            </Typography>
            <Typography>
              <strong>Beschreibung Wein : </strong>
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              style={{ whiteSpace: 'pre-line' }}
            >
              {grapeById.wine_desc}{' '}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
