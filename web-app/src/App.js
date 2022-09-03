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
  const [meteo, setMeteo] = useState({});
  const [lage, setLage] = useState({});

  const [filterParameters, setFilterParameters] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const [searchGrape, setsearchGrape] = useState([]);
  const [filterGrape, setfilterGrape] = useState([]);
  const fetchGrapeData = async () => {
    const grapes = require('./data/sorten.json');
    setGrapes(grapes);
    setsearchGrape(grapes);
    setfilterGrape(grapes);
  };
  const fetchMeteoData = async () => {
    const meteo = require('./data/meteo.json');
    setMeteo(meteo);
  };
  const fetchLageData = async () => {
    const lage = require('./data/lage.json');
    setLage(lage);
  };

  const updateFilterParamters = (newParameters) => {
    setFilterParameters(newParameters);
  };
  const updateSearchTerm = (newTerm) => {
    setSearchTerm(newTerm);
  };

  const searchGrapes = (searchTerm) => {
    var search = [...grapes];
    search = search.filter((a) =>
      a.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setsearchGrape(search);
  };

  const filterGrapes = () => {
    console.log(filterParameters);
    console.log(searchTerm);
    var filter = [...grapes];
    filter = filter.filter((a) => a.color.includes(filterParameters.color));
    var search = filter.filter((a) =>
      a.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setsearchGrape(search);
  };
  useEffect(() => {
    fetchGrapeData();
    fetchMeteoData();
    fetchLageData();
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
  useEffect(() => {
    filterGrapes();
  }, [filterParameters, searchTerm]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Searchbar updateSearchTerm={updateSearchTerm} />
      <div className={classes.flex}>
        <Filter updateFilterParamters={updateFilterParamters} />
      </div>
      <Grapes grapes={searchGrape} />
    </div>
  );
}

export default App;
