import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 320,
    padding:2,
  },

}))

function Searchbar(props) {
  const classes = useStyles();
  return (

    <div className="classes.root" variant="body1">
      <SearchBar
        placeholder="Search by Country Name"
        onChange={(newValue) => {
          props.searchCountries(newValue)
        }

        }
      />
    </div>
  );
}

export default Searchbar;
