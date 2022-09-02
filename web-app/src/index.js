import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CountryDetails from "./components/CountryDetails";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import NightsStayIcon from "@material-ui/icons/NightsStay";
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 0
  },

  toolbar: {
    justifyContent: "space-between"
  }
}));

export default function Root() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Paper position="static" className={classes.paper}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5">Where in the world?</Typography>
            <Button onClick={handleDarkModeToggle}>
              <NightsStayIcon></NightsStayIcon>
              Dark Mode
            </Button>
          </Toolbar>
        </Paper>

        <Router basename="/rest-countries">
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/:alpha3Code" exact component={CountryDetails} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
