import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

//utils
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 275
  }
});

export function Currency({currency, rate}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader subheader="Currency" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          USD 66
        </Typography>
      </CardContent>
    </Card>
  );
}
