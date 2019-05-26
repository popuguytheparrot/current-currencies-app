import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import Box from "@material-ui/core/Box";

function ButtonLink({ children, ...props }) {
  return (
    <Button component={Link} {...props}>
      {children}
    </Button>
  );
}

export function Nav() {
  return (
    <Box p={2} component="nav">
      <ButtonLink to="/">Home</ButtonLink>
      <ButtonLink to="/latest">Latest</ButtonLink>
    </Box>
  );
}
