
export interface Coord {

  /**
   * City geo location, longitude
   *
   * @type {number}
   * @memberof Coord
   */
  lon: number;

  /**
   * City geo location, latitude
   *
   * @type {number}
   * @memberof Coord
   */
  lat: number;
}

export interface Weather {

  /**
   * Weather condition id
   *
   * @type {number}
   * @memberof Weather
   */
  id: number;

  /**
   * Group of weather parameters (Rain, Snow, Extreme etc.)
   *
   * @type {string}
   * @memberof Weather
   */
  main: string;

  /**
   * Weather condition within the group. You can get the output in your language. Learn more:
   * https://openweathermap.org/current#multi
   *
   * @type {string}
   * @memberof Weather
   */
  description: string;

  /**
   * Weather icon id
   *
   * @type {string}
   * @memberof Weather
   */
  icon: string;
}

export interface Main {

  /**
   * Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof Main
   */
  temp: number;

  /**
   * Temperature. This temperature parameter accounts for the human perception of weather.
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof Main
   */
  feelsLike: number;

  /**
   * Minimum temperature at the moment. This is minimal currently observed temperature
   * (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof Main
   */
  tempMin: number;

  /**
   * Maximum temperature at the moment. This is maximal currently observed temperature
   * (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof Main
   */
  tempMax: number;

  /**
   * Atmospheric pressure on the sea level, hPa
   *
   * @type {number}
   * @memberof Main
   */
  pressure: number;

  /**
   * Humidity, %
   *
   * @type {number}
   * @memberof Main
   */
  humidity: number;

  /**
   * Atmospheric pressure on the ground level, hPa
   *
   * @type {number?}
   * @memberof Main
   */
  grndLevel: number?;
}

export interface Wind {

  /**
   * Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
   *
   * @type {number}
   * @memberof Wind
   */
  speed: number;

  /**
   * Wind direction, degrees (meteorological)
   *
   * @type {number}
   * @memberof Wind
   */
  deg: number;

  /**
   * Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
   *
   * @type {number}
   * @memberof Wind
   */
  gust: number;
}

export interface Clouds {

  /**
   *  Cloudiness, %
   *
   * @type {number}
   * @memberof Clouds
   */
  all: number;
}

export interface Sys {

  /**
   * Internal parameter
   *
   * @type {number}
   * @memberof Sys
   */
  type: number;

  /**
   * Internal parameter
   *
   * @type {number}
   * @memberof Sys
   */
  id: number;

  /**
   * Internal parameter
   *
   * @type {string}
   * @memberof Sys
   */
  message: string;

  /**
   * Country code (GB, JP etc.)
   *
   * @type {string}
   * @memberof Sys
   */
  country: string;

  /**
   * Sunrise time, unix, UTC
   *
   * @type {number}
   * @memberof Sys
   */
  sunrise: number;

  /**
   * Sunset time, unix, UTC
   *
   * @type {number}
   * @memberof Sys
   */
  sunset: number;
}

export interface Rain {

  /**
   *  Rain volume for the last 1 hour, mm
   *
   * @type {number}
   * @memberof Rain
   */
  '1h': number;

  /**
   * Rain volume for the last 3 hours, mm
   *
   * @type {number}
   * @memberof Rain
   */
  '3h': number;
}

export interface Snow {

  /**
   *  Snow volume for the last 1 hour, mm
   *
   * @type {number}
   * @memberof Snow
   */
  '1h': number;

  /**
   * Snow volume for the last 3 hours, mm
   *
   * @type {number}
   * @memberof Snow
   */
  '3h': number;
}

export interface OpenWeatherMapResult {
  coord: Coord;

  /**
   * More info Weather condition codes
   *
   * @type {Array<Weather>}
   * @memberof OpenWeatherMapResult
   */
  weather: Array<Weather>;

  /**
   * Internal parameter
   *
   * @type {string}
   * @memberof OpenWeatherMapResult
   */
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  rain: Rain?;
  snow: Snow?;

  /**
   * Time of data calculation, unix, UTC
   *
   * @type {number}
   * @memberof OpenWeatherMapResult
   */
  dt: number;
  sys: Sys;

  /**
   * Shift in seconds from UTC
   *
   * @type {number}
   * @memberof OpenWeatherMapResult
   */
  timezone: number;

  /**
   * City ID
   *
   * @type {number}
   * @memberof OpenWeatherMapResult
   */
  id: number;

  /**
   * City name
   *
   * @type {string}
   * @memberof OpenWeatherMapResult
   */
  name: string;

  /**
   * Internal parameter
   *
   * @type {number}
   * @memberof OpenWeatherMapResult
   */
  cod: number;
}

