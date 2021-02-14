import CurrentDay from '../src/components/CurrentDay';
import Forecast from '../src/components/Forecast';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '0 30px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '1000px',
  },
  h1: {
    color: '#fff',
    fontSize: '70px',
  },
  futureTempWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'left',
  },
  spinner: {
    color: '#c367c8',
  },
  loadingMsg: {
    fontSize: '22px',
    color: '#6e98ff',
    fontWeight: 600,
  },
});

function App() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [todaysTemp, setTodaysTemp] = useState([]);
  const [futureTemps, setFutureTemps] = useState([]);

  useEffect(() => {
    const values = getTemperatures();
  }, []);

  const getTemperatures = () => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/temperatures`)
      .then((res) => {
        setTodaysTemp(res.data[0]);
        res.data.shift();
        // I'm taking some liberty to inject additional info to provide a richer data set to improve UI display
        const additionalData = [
          {
            day: 'Tomorrow',
            icon: 'wi-day-sunny',
          },
          {
            day: 'Wednesday',
            icon: 'wi-day-cloudy',
          },
          {
            day: 'Thursday',
            icon: 'wi-day-cloudy',
          },
          {
            day: 'Friday',
            icon: 'wi-day-showers',
          },
          {
            day: 'Saturday',
            icon: 'wi-day-rain',
          },
          {
            day: 'Sunday',
            icon: 'wi-day-thunderstorm',
          },
          {
            day: 'Monday',
            icon: 'wi-day-cloudy-gusts',
          },
          {
            day: 'Tuesday',
            icon: 'wi-day-cloudy',
          },
          {
            day: 'Wednesday',
            icon: 'wi-day-sunny-overcast',
          },
        ];

        const richData = res.data.map((item, index) => {
          return {
            date: item.date,
            day: additionalData[index].day,
            min: item.min,
            max: item.max,
            icon: `wi ${additionalData[index].icon}`,
          };
        });

        setFutureTemps(richData);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* Normally you would have a router here at the root of the app, but since this is just one page I've omited it */}
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h1 className={classes.h1}>Sydney Weather</h1>
          {isLoading ? (
            <>
              <CircularProgress className={classes.spinner} />
              <p className={classes.loadingMsg}>We are loading your weather forecast...</p>
            </>
          ) : (
            <>
              <CurrentDay data={todaysTemp} />
              <div className={classes.futureTempWrapper}>
                {futureTemps.map((day) => (
                  <Forecast data={day} key={day.date} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
