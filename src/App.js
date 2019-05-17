import React from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

//pages
import { Home } from "./pages/Home";

export function App() {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Current currencies
          </Typography>
        </Toolbar>
      </AppBar>

      <Router>
        <Link to="/">Home</Link>
        <Link to="/latest">Latest</Link>
        <div style={{ padding: 15 }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/latest" component={() => <h1>Latest</h1>} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
