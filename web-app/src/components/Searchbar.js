import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    padding: 2,
    marginBottom: 10,
  },
  toprow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 0,
  }
}));

function Searchbar(props) {
  const classes = useStyles();
  return (
    <Container className={classes.toprow}>
      <Typography variant='h5'>Angaben zu deinem Rebberg</Typography>
      <SearchBar
        placeholder='Nach Rebsorten Suchen'
        onChange={(newValue) => {
          props.updateSearchTerm(newValue);
        }}
      />
    </Container>
  );
}

export default Searchbar;
