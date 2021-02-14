import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactFloaterJs from 'react-floaterjs';

import '../css/weather-icons.min.css';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    margin: '10px 0 60px',
  },
  tempWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
  },
  maxTempWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    margin: '0 20px 0 60px',
  },
  maxTemp: {
    fontSize: '80px',
    color: '#6e98ff',
    fontWeight: 600,
    margin: 0,
  },
  minTempWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '40px 20px 0 30px',
  },
  minTemp: {
    color: '#6e98ff',
    fontSize: '30px',
    fontWeight: 600,
    margin: '5px 0',
  },
  label: {
    margin: 0,
    color: '#6e98ff',
    fontWeight: 600,
  },
  description: {
    fontSize: '25px',
    color: '#c367c8',
    fontWeight: 500,
  },
});

export default function CurrentDay(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <div className={classes.wrapper}>
      <div className={classes.tempWrapper}>
        <ReactFloaterJs>
          <i className='wi wi-day-cloudy wi-today'></i>
        </ReactFloaterJs>
        <div className={classes.maxTempWrapper}>
          <p className={classes.label}>Max</p>
          <p className={classes.maxTemp}> {data.max}&#176;</p>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className={classes.minTempWrapper}>
          <p className={classes.label}>Min</p>
          <p className={classes.minTemp}> {data.min}&#176;</p>
        </div>
      </div>
      <p className={classes.description}>Partly cloudy with a chance of Corona</p>
    </div>
  );
}
