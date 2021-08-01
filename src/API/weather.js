import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async query => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: 'b14b34fe8c954f4357dd4912f77c39ec',
      // APPID: process.env.OPEN_WEATHER_API_KEY,
    },
  });

  return data;
};
