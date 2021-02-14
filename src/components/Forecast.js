import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import '../css/weather-icons.min.css';

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '130px',
    margin: '0 15px 15px 0',
    padding: '20px 0 20px 20px',
    textAlign: 'left',
    backgroundColor: '#81a5fe',
    '&:hover': {
      backgroundColor: '#477cff',
    },
  },
  h3: {
    fontSize: '20px',
    margin: '0 0 20px',
    color: '#fff',
  },
  temp: {
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '20px',
  },
  maxTemp: {
    color: '#fff',
  },
  minTemp: {
    color: '#fff',
    opacity: '0.7',
    fontSize: '15px',
  },
});

export default function Forecast(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <Paper className={classes.paper}>
      <h3 className={classes.h3}>{data.day}</h3>
      <div className={classes.temp}>
        <span className={classes.maxTemp}> {data.max}&#176;</span>
        &nbsp;&nbsp;&nbsp;
        <span className={classes.minTemp}>{data.min}&#176;</span>
      </div>
      <i className={data.icon}></i>
    </Paper>
  );
}
