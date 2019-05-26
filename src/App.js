import React, { useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Nav } from "./components/Nav";

//pages
import { Home } from "./pages/Home";
import { Latest } from "./pages/Latest";

// utils
import { makeStyles } from "@material-ui/core/styles";

//actions
import { getCurrencies } from "./api";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export function App() {
  const classes = useStyles();

  useEffect(() => {
    getCurrencies()
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="primary" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" color="inherit" component="h1">
            Current currencies
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/latest" component={Latest} />
          </Switch>
        </Router>
      </Container>
    </>
  );
}
