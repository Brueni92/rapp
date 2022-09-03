import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 230,
    minHeight: 50,
    margin: 5,
    marginBottom: 10,
  },
  selectEmpty: {
    //marginTop: theme.spacing(2),
  },
}));

export default function Filter(props) {
  const classes = useStyles();
  const [filterParameters, setFilterParameters] = useState({});

  useEffect(() => {
    setFilterParameters({
      weatherStation: '',
      kalkhaltig: -1,
      color: '',
      hangneigung: '',
      ausrichtung: '',
      bodenbeschaffenheit: -1,
      bodentiefe: -1,
      pilzresistenz: -1,
    });
  }, []);

  return (
    <div>
      <Typography variant='h4'>Filter</Typography>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel>Wetter Station</InputLabel>
        <Select
          onChange={(event) => {
            const newFilterParameters = {
              ...filterParameters,
              weatherStation: String(event.target.value),
            };
            setFilterParameters(newFilterParameters);
            props.updateFilterParamters(newFilterParameters);
          }}
        >
          <MenuItem value={''}>
            <em>Alle</em>
          </MenuItem>
          <MenuItem value={'Graenichen'}>Gränichen</MenuItem>
          <MenuItem value={'Frick'}>Frick</MenuItem>
          <MenuItem value={'Tegenfeld'}>Tegenfeld</MenuItem>
          <MenuItem value={'Oberflachs'}>Oberflachs</MenuItem>
          <MenuItem value={'Birmensdorf'}>Birmensdorf</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel>Hangneigung</InputLabel>
        <Select
          onChange={(event) => {
            const newFilterParameters = {
              ...filterParameters,
              hangneigung: event.target.value,
            };
            setFilterParameters(newFilterParameters);
            props.updateFilterParamters(newFilterParameters);
          }}
        >
          <MenuItem value={''}>
            <em>Alle</em>
          </MenuItem>
          <MenuItem value={'0-15'}>0-15%</MenuItem>
          <MenuItem value={'15-25'}>15-25%</MenuItem>
          <MenuItem value={'25-35'}>25-35%</MenuItem>
          <MenuItem value={'35+'}>+35%</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel>Ausrichtung</InputLabel>
        <Select
          onChange={(event) => {
            const newFilterParameters = {
              ...filterParameters,
              ausrichtung: event.target.value,
            };
            setFilterParameters(newFilterParameters);
            props.updateFilterParamters(newFilterParameters);
          }}
        >
          <MenuItem value={''}>
            <em>Alle</em>
          </MenuItem>
          <MenuItem value={'W'}>West</MenuItem>
          <MenuItem value={'SW'}>Süd-West</MenuItem>
          <MenuItem value={'S'}>Süden</MenuItem>
          <MenuItem value={'SE'}>Süd-Ost</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel>Bodenbeschaffenheit</InputLabel>
        <Select
          onChange={(event) => {
            const newFilterParameters = {
              ...filterParameters,
              bodenbeschaffenheit: String(event.target.value),
            };
            setFilterParameters(newFilterParameters);
            props.updateFilterParamters(newFilterParameters);
          }}
        >
          <MenuItem value={''}>
            <em>Alle</em>
          </MenuItem>
          <MenuItem value={0}>Leicht</MenuItem>
          <MenuItem value={1}>Mittel</MenuItem>
          <MenuItem value={2}>Schwer</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel>Bodentiefe</InputLabel>
        <Select
          onChange={(event) => {
            const newFilterParameters = {
              ...filterParameters,
              bodentiefe: String(event.target.value),
            };
            setFilterParameters(newFilterParameters);
            props.updateFilterParamters(newFilterParameters);
          }}
        >
          <MenuItem value={''}>
            <em>Alle</em>
          </MenuItem>
          <MenuItem value={0}>Flach</MenuItem>
          <MenuItem value={1}>Mittel</MenuItem>
          <MenuItem value={2}>Tief</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel>Pilzresistenz</InputLabel>
        <Select
          onChange={(event) => {
            const newFilterParameters = {
              ...filterParameters,
              pilzresistenz: String(event.target.value),
            };
            setFilterParameters(newFilterParameters);
            props.updateFilterParamters(newFilterParameters);
          }}
        >
          <MenuItem value={''}>
            <em>Alle</em>
          </MenuItem>
          <MenuItem value={0}>Nein</MenuItem>
          <MenuItem value={1}>Ja</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel>Farbe</InputLabel>
        <Select
          onChange={(event) => {
            const newFilterParameters = {
              ...filterParameters,
              color: String(event.target.value),
            };
            setFilterParameters(newFilterParameters);
            props.updateFilterParamters(newFilterParameters);
          }}
        >
          <MenuItem value={''}>
            <em>Alle</em>
          </MenuItem>
          <MenuItem value={'Weiss'}>Weiss</MenuItem>
          <MenuItem value={'Blau'}>Blau</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel>Kalkhaltig</InputLabel>
        <Select
          onChange={(event) => {
            const newFilterParameters = {
              ...filterParameters,
              kalkhaltig: event.target.value,
            };
            setFilterParameters(newFilterParameters);
            props.updateFilterParamters(newFilterParameters);
          }}
        >
          <MenuItem value={''}>
            <em>Alle</em>
          </MenuItem>
          <MenuItem value={0}>Flach</MenuItem>
          <MenuItem value={1}>Mittel</MenuItem>
          <MenuItem value={2}>Tief</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
