import React from "react";

//ui
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Grid } from "@material-ui/core";

//icons
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
//utils
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export function Home() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2">Exchanger</Typography>
      <Grid container  alignItems="center" justify="center" spacing={3}>
        <Grid item>
          <TextField
            id="count"
            label="Count"
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            id="currency"
            select
            label="Currency"
            margin="normal"
            value="USD"
            variant="outlined"
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
          >
            {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item>
          <ArrowRightAlt />
        </Grid>
        <Grid item>
          <Typography variant="h3">Value</Typography>
        </Grid>
      </Grid>
    </>
  );
}
