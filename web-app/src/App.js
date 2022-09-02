import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import { makeStyles } from "@material-ui/core/styles";
import Searchbar from "./components/Searchbar";

import { ThemeProvider } from "@material-ui/core/styles";

const url = "https://restcountries.eu/rest/v2/all";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30
  },
  paper: {
    marginBottom: 30
  },
  flex: {
    display: "flex",
    justifyContent: "space-between"
  },
  toolbar: {
    justifyContent: "space-between"
  }
}));

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setsearchCountry] = useState([]);
  const [filterCountry, setfilterCountry] = useState([]);
  const fetchCountryData = async () => {
    //const response = await fetch(url);
    //const countries = await response.json();
    const countries = [
      {
      "numericCode": "CH",
      "flag": "www.rebschule-meier.ch/sites/default/files/2018-09/amigne.jpg",
      "name": "CH",
      "population": 100,
      "region": "Europe",
      "capital": "CH",
      "alpha3Code": "CH"
    },
    {
      "numericCode": "CH",
      "flag": "CH",
      "name": "CH",
      "population": 100,
      "region": "CH",
      "capital": "CH",
      "alpha3Code": "CH"
    },
  ]
    setCountries(countries);
    setsearchCountry(countries);
    setfilterCountry(countries);
  };

  const searchCountries = (searchTerm) => {
    var search = [...countries];
    search = search.filter((a) =>
      a.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setsearchCountry(search);
  };

  const filterCountries = (filterTerm) => {
    var filter = [...countries];
    filter = filter.filter((a) => a.region.includes(filterTerm));
    setsearchCountry(filter);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <Filter filterCountries={filterCountries} />
      </div>
      <Countries countries={searchCountry} />
    </div>
  );
}

export default App;
