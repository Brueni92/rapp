import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 230,
    minHeight: 50,
    marginBottom: 20,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Filter(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Filter By Region</InputLabel>
        <Select
          onChange={(event) => {
            props.filterCountries(event.target.value)
          }}
        >
          <MenuItem value={''}>
            <em>All</em>
          </MenuItem>
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'Americas'}>Americas</MenuItem>
          <MenuItem value={'Asia'}>Asia</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
          <MenuItem value={'Oceania'}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
