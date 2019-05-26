import React from "react";

//ui
import Typography from "@material-ui/core/Typography";
import { Currency } from "../../components/Currency";
//icons

export function Latest() {

  return (
    <>
      <Typography variant="h2">Latest</Typography>
      <Currency />
    </>
  );
}
