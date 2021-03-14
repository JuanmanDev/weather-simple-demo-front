import axios from 'axios';
import type { OpenWeatherMapResult } from '../types/openweathermap';
import type { OpenWeatherMapHistoryResult } from '../types/openweathermapHistory';
import type { OpenWeatherMapOneCallResult } from '../types/openweathermapOneCall';

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

// This API is NOT FREE
export async function getWeatherByCityNameWithHistorical(
    { cityName = '', stateCode, countryCode, units, lang, days }:
    { cityName: string; stateCode?: string; countryCode?: string; units?: Units; lang?: string; days: number }
): Promise<OpenWeatherMapHistoryResult> {
  let query = cityName;

  if (stateCode) {
    query += `,${ stateCode }`;

    if (countryCode) {
      query += `,${ countryCode }`;
    }
  }

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast/daily?q=${ query }&appid=${ getAPIKey() }&cnt=${ days }${ units ? `&units=${ units }` : '' }${ lang ? `&lang=${ lang }` : '' }`
  );

  // eslint-disable-next-line no-console
  console.debug(response.data);

  // _TODO Better mapping
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  for (const day of response.data.list) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    day.feelsLike = day.feels_like;
  }

  return response.data as unknown as OpenWeatherMapHistoryResult;
}

export enum OneCallExcludeOptions {
  current = 'current',
  minutely = 'minutely',
  hourly = 'hourly',
  daily = 'daily',
  alerts = 'alerts'
}

export async function getWeatherByCityNameOneCall(
    { lat, lon, exclude = [], units, lang }:
    { lat: number; lon: number; exclude?: Array<OneCallExcludeOptions>; units?: Units; lang?: string }
): Promise<OpenWeatherMapOneCallResult> {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${ lat }&lon=${ lon }&appid=${ getAPIKey() }${ exclude ? `&exclude=${ exclude.join(',') }` : '' }${ units ? `&units=${ units }` : '' }${ lang ? `&lang=${ lang }` : '' }`
  );

  // eslint-disable-next-line no-console
  console.debug(response.data);

  // _TODO Better mapping and camelCase the response

  return response.data as unknown as OpenWeatherMapOneCallResult;
}

