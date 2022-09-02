import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    padding: theme.spacing(5)
  },
  buttonStyle: {
    marginBottom: 50
  },
  img: {
    marginBottom: "30%",
    maxWidth: 350,
    minWidth: "100%",
    height: "auto"
  },
  nav: {
    textDecoration: "None"
  }
}));

const CodeURL = "https://restcountries.eu/rest/v2/alpha/";

export default function CountryDetails(props) {
  const classes = useStyles();
  const [countryByCodeURL, setCountryByCodeURL] = useState(
    CodeURL +
    window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    )
  );

  const [countryByCode, setCountryByCode] = useState([]);

  const fetchCountryDataByCode = async () => {
    const response = await fetch(
      CodeURL +
      window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1
      )
    );
    const data = await response.json();
    setCountryByCode(data);
  };

  useEffect(() => {
    fetchCountryDataByCode();
  }, [countryByCodeURL]);

  return (
    <div className={classes.root}>
      <Grid lg={12} item container spacing={3}>
        <Grid item lg={12} xs={12}>
          <NavLink className={classes.nav} to="/">
            <Button variant="outlined" className={classes.buttonStyle}>
              {" "}
              <ArrowBackIcon /> Back
            </Button>{" "}
          </NavLink>
        </Grid>
        <Grid item lg={4} xs={12}>
          <img className={classes.img} alt="complex" src={countryByCode.flag} />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Typography gutterBottom variant="h4">
            <strong>{countryByCode.name}</strong>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Typography>
              {" "}
              <strong>Native Name : </strong>
              {countryByCode.nativeName}{" "}
            </Typography>
            <Typography>
              <strong>Population : </strong>
              {countryByCode.population}{" "}
            </Typography>
            <Typography>
              <strong>Region : </strong>
              {countryByCode.region}{" "}
            </Typography>
            <Typography>
              <strong>Sub Region : </strong>
              {countryByCode.subregion}{" "}
            </Typography>
            <Typography>
              <strong>Capital : </strong>
              {countryByCode.capital}{" "}
            </Typography>
          </Typography>

          <Typography variant="body3" style={{ cursor: "pointer" }}>
            <strong>Border Countries : </strong>
            {countryByCode.borders === undefined
              ? ""
              : countryByCode.borders.map((e) => (
                <NavLink
                  className={classes.nav}
                  to={{ pathname: "/" + e }}
                  onClick={() => {
                    setCountryByCodeURL(CodeURL + "/" + e);
                  }}
                >
                  <Button variant="outlined" style={{ margin: 3 }}>
                    {e}
                  </Button>
                </NavLink>
              ))}
          </Typography>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Typography variant="body2" style={{ marginTop: 40 }} gutterBottom>
            <Typography>
              <strong>Top Level Domain : </strong>
              {countryByCode.topLevelDomain === undefined
                ? ""
                : countryByCode.topLevelDomain.join(", ")}
            </Typography>
            <Typography>
              <strong>Currencies : </strong>
              {countryByCode.currencies === undefined
                ? ""
                : countryByCode.currencies.map((e) => e.name).join(", ")}
            </Typography>
            <Typography>
              <strong>Languages : </strong>
              {countryByCode.languages === undefined
                ? ""
                : countryByCode.languages.map((e) => e.name).join(", ")}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
