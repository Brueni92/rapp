import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';

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
    <div className={classes.root}>
      <SearchBar
        placeholder='Nach Rebsorten Suchen'
        onChange={(newValue) => {
          props.updateSearchTerm(newValue);
        }}
      />
    </div>
  );
}

export default Searchbar;
