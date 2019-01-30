import axios from 'axios';

const openWeatherMapKey = '36c94908c8e0ed1302d9cb900d254789';

export const weatherSuccess = (weather) => {
  return {
    type: 'WEATHER_SUCCESS',
    weather,
  };
};

export const weatherFail = (error) => {
  return {
    type: 'WEATHER_FAIL',
    error,
  };
};

export const weatherRequest = () => {
  return {
    type: 'WEATHER_REQUEST',
  };
};

export const getWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapKey}`;
  return (dispatch) => {
    dispatch(weatherRequest());
    axios.get(url)
    .then((res) => {
      const { weather, name } = res.data;
      dispatch(weatherSuccess({
        name,
        ...weather[0],
      }));
    })
    .catch((err) => {
      let message = '';
      const { response } = err;
      if (response && response.data) message = response.data.message;
      if (!message) message = err.message;
      dispatch(weatherFail(message))
    });
  }
};
