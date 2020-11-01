import React, { useState } from "react";
import classnames from 'classnames'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    padding: "20px 37px"
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
  weatherContent: {
    marginTop: "20px"
  },
  boxStyle: {
    backgroundColor: "#7c77fe",
    color: "#333",
    borderRadius: "10px",
    boxShadow: "8px 8px rgb(108,112,119)",
    height: "120px",
    padding: "20px"
  },
  whiteFont: {
    color: "#fff",
    padding: "5px"
  },
  mt100: {
    marginTop: "100px"
  }
}));

const Content = () => {
  const classes = useStyles();
  const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [isVisible, setVisible] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const errorClass = classnames(classes.whiteFont, classes.mt100);
  const loadingClass = classnames(classes.whiteFont, classes.mt100);

  const imgIcon = (icon) => {
    return (
      <img
        src={"http://openweathermap.org/img/wn/" + icon + ".png"}
        alt={country}
        width={100}
      />
    );
  };

  const gridResult = () => {
    if (error) {
      return (
        <div>
          <h1 className={errorClass}>
            This {error.message}.
          </h1>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div>
          <h1 className={loadingClass}>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <Grid container className={classes.weatherContent}>
            <Grid item xs={8}>
              <Box component="div" m={1} className={classes.boxStyle}>
                <Grid container>
                  <Grid item xs={6}>
                    {imgIcon(weatherData.icon)}
                  </Grid>
                  <Grid item xs={6}>
                    <h1>
                      {Math.round(weatherData.temp - 273.15) + " °C"}
                    </h1>
                    <p>{_.upperFirst(_.lowerCase(country))}</p>
                    <p className={classes.whiteFont}>
                      {_.upperCase(weatherData.description)}
                    </p>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box component="div" m={1} className={classes.boxStyle}>
                <p className={classes.whiteFont}>HUMIDITY</p>
                <h1>{weatherData.humidity + "%"}</h1>
              </Box>
            </Grid>
          </Grid>
          <Grid container className={classes.weatherContent}>
            <Grid item xs={4}>
              <Box component="div" m={1} className={classes.boxStyle}>
                <h1>VISIBILITY</h1>
                <p>{weatherData.visibility  + "km"}</p>
              </Box>
            </Grid>
           { weatherData.rain && (<Grid item xs={4}>
              <Box component="div" m={1} className={classes.boxStyle}>
                <h1>RAIN</h1>
                <p>{weatherData.rain + "mm/h"}</p>
              </Box>
            </Grid>)}
            <Grid item xs={4}>
              <Box component="div" m={1} className={classes.boxStyle}>
                <h1>Pressure</h1>
                <p>{weatherData.pressure + "hPa"}</p>
              </Box>
            </Grid>
          </Grid>
        </div>
      );
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setVisible(false);
    setCountry(value);
    setError(null);
  };

  const handleClick = () => {
    const api_url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      country +
      "&appid=" +
      process.env.REACT_APP_API_KEY;

    fetch(api_url)
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          setIsLoaded(true);
          if (data.cod === 200) {
            const rain = data.rain ?  data.rain["1h"] : null;
            setWeatherData({ ...data.weather[0], ...data.main, ...data.wind, ...{visibility: data.visibility, rain}});
          } else {
            setError(data);
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    setVisible(true);
  };

  return (
    <div className={classes.containerStyle}>
      <Grid container>
        <TextField
          className={classes.textField}
          variant="outlined"
          onChange={handleChange}
          value={isVisible ? "" : country}
        />
        <Button
          variant="contained"
          className={classes.buttonStyle}
          onClick={handleClick}
        >
          Search
        </Button>
      </Grid>
      {isVisible && gridResult()}
    </div>
  );
};

export default Content;
