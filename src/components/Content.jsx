import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    padding: "20px 37px"
  },
  navStyle: {
    backgroundColor: "#192733",
    color: "#fff"
  },
  textField: {
    width: "300px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    marginRight: "20px"
  },
  buttonStyle: {
    backgroundColor: "#7c77fe",
    color: "#fff"
  },
  wheatherContent: {
    marginTop: "20px;"
  },
  boxStyle: {
    backgroundColor: "#7c77fe",
    color: "#333"
  }
}));

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerStyle}>
      <Grid container>
        <TextField className={classes.textField} variant="outlined" />
        <Button variant="contained" className={classes.buttonStyle}>
          Search
        </Button>
      </Grid>
      <Grid container className={classes.wheatherContent}>
        <Grid item xs={8}>
          <Box component="span" m={1} className={classes.boxStyle}>
            <h1>Title</h1>
            <p>content</p>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box component="span" m={1} className={classes.boxStyle}>
            <h1>Title</h1>
            <p>content</p>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box component="span" m={1} className={classes.boxStyle}>
            <h1>Title</h1>
            <p>content</p>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box component="span" m={1} className={classes.boxStyle}>
            <h1>Title</h1>
            <p>content</p>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box component="span" m={1} className={classes.boxStyle}>
            <h1>Title</h1>
            <p>content</p>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
