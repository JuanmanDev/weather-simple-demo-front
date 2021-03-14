import axios from 'axios';
import type { OpenWeatherMapResult } from '../types/openweathermap';

// eslint-disable-next-line @typescript-eslint/comma-dangle
export enum Units {
  standard = 'standard',
  metric = 'metric',
  imperial = 'imperial',
}

const getAPIKey = () => process.env.OPENWEATHER_API_KEY;

export async function getWeatherByCityName(
    { cityName = '', stateCode, countryCode, units, lang }:
    { cityName: string; stateCode?: string; countryCode?: string; units?: Units; lang?: string }
): Promise<OpenWeatherMapResult> {
  let query = cityName;

  if (stateCode) {
    query += `,${ stateCode }`;

    if (countryCode) {
      query += `,${ countryCode }`;
    }
  }

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${ query }&appid=${ getAPIKey() }${ units ? `&units=${ units }` : '' }${ lang ? `&lang=${ lang }` : '' }`
  );

  // // eslint-disable-next-line no-console
  // console.debug(response.data);

  // _TODO Better mapping

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  response.data.main.feelsLike = response.data.main.feels_like;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  response.data.main.tempMin = response.data.main.temp_min;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  response.data.main.tempMax = response.data.main.temp_max;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  response.data.main.grndLevel = response.data.main.grnd_level;

  return response.data as unknown as OpenWeatherMapResult;
}

