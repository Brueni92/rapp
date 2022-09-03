import React, { useState, useEffect } from 'react';
import Grapes from './components/Grapes';
import Filter from './components/Filter';
import { makeStyles } from '@material-ui/core/styles';
import Searchbar from './components/Searchbar';

import { ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
  },
  paper: {
    marginBottom: 30,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
}));

function App() {
  const [grapes, setGrapes] = useState([]);
  const [searchGrape, setsearchGrape] = useState([]);
  const [filterGrape, setfilterGrape] = useState([]);
  const fetchGrapeData = async () => {
    const grapes = require('./data/sorten.json');
    setGrapes(grapes);
    setsearchGrape(grapes);
    setfilterGrape(grapes);
  };

  const searchGrapes = (searchTerm) => {
    var search = [...grapes];
    search = search.filter((a) =>
      a.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setsearchGrape(search);
  };

  const filterGrapes = (filterParameters) => {
    console.log(filterParameters);
    var filter = [...grapes];
    filter = filter.filter((a) => a.color.includes(filterParameters.color));
    setsearchGrape(filter);
  };
  useEffect(() => {
    fetchGrapeData();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Searchbar searchGrapes={searchGrapes} />
      <div className={classes.flex}>
        <Filter filterGrapes={filterGrapes} />
      </div>
      <Grapes grapes={searchGrape} />
    </div>
  );
}

export default App;
