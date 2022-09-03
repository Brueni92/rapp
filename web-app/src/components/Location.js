import { Paper } from '@material-ui/core';
import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: 'left',
    padding: 10,
  },
  item: {
    position: 'absolute',
    left: 270,
  },
}));
const Location = (props) => {
  var huglin = '';
  var rain = '';
  var intensity = '';
  if (
    props.filterParameters.weatherStation &&
    props.meteo[props.filterParameters.weatherStation] &&
    props.lage[props.filterParameters.hangneigung] &&
    props.lage[props.filterParameters.hangneigung][
      props.filterParameters.ausrichtung
    ]
  ) {
    huglin = parseInt(
      props.meteo[props.filterParameters.weatherStation]['huglin']
    );
    rain = parseInt(props.meteo[props.filterParameters.weatherStation]['rain']);
    var value =
      props.lage[props.filterParameters.hangneigung][
        props.filterParameters.ausrichtung
      ];
    console.log(value);
    intensity = value === 3 ? 'Hoch' : value === 2 ? 'Mittel' : 'Tief';
  }
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Typography variant='h5'>Dein Standort</Typography>
        <Typography variant='h10'>Huglin Index: </Typography>
        <Typography variant='h10' className={classes.item}>
          {huglin}{' '}
        </Typography>
        <br></br>
        <Typography variant='h10'>Niederschlagsmenge April-Sept.: </Typography>
        <Typography variant='h10' className={classes.item}>
          {rain} mm{' '}
        </Typography>
        <br></br>
        <Typography variant='h10'>Sonneneinstrahlung:</Typography>
        <Typography variant='h10' className={classes.item}>
          {' '}
          {intensity}{' '}
        </Typography>
        <br></br>
      </Paper>
    </div>
  );
};

export default Location;
