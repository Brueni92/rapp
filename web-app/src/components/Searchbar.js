import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    padding: 2,
    marginBottom: 10,
  },
}));

function Searchbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root} variant='body1'>
      <Typography variant='h5'>Suche:</Typography>
      <SearchBar
        placeholder='Search by Grape Name'
        onChange={(newValue) => {
          props.searchGrapes(newValue);
        }}
      />
    </div>
  );
}

export default Searchbar;
