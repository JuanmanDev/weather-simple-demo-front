import { Coord } from './openweathermap';

export interface OpenWeatherMapHistoryResult {

  city: {
    id: number;
    name: string;
    coord: Coord;
  };

  /**
   * Country code (GB, JP etc.)
   *
   * @type {string}
   * @memberof OpenWeatherMapHistoryResult
   */
  country: string;

  population: string;

  /**
   * Shift in seconds from UTC
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
  timezone: number;

  /**
   * Internal parameter
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
  cod: number;

  /**
   * Internal parameter
   *
   * @type {string}
   * @memberof OpenWeatherMapHistoryResult
   */
  message: string;

  /**
    * A number of days returned in the API response
    *
    * @type {number}
    * @memberof OpenWeatherMapHistoryResult
    */
  cnt: number;

  list: Array<{

    /**
   * Time of data forecasted
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
    dt: number;

    temp: {

      /**
   * Day temperature.
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
      day: number;

      /**
   * Min daily temperature.
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
      min: number;

      /**
   * Max daily temperature.
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
      max: number;

      /**
   * Night temperature.
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
      night: number;

      /**
   * Evening temperature.
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
      eve: number;

      /**
   * Morning temperature.
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
      morn: number;

    };

    feelsLike: {

      /**
   * Day temperature.This temperature parameter accounts for the human perception of weather.
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
      day: number;

      /**
   * Night temperature.This temperature parameter accounts for the human perception of weather.
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
      night: number;

      /**
   * Evening temperature.This temperature parameter accounts for the human perception of weather.
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
      eve: number;

      /**
   * Morning temperature. This temperature parameter accounts for the human perception of weather.
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
      morn: number;

    };

    /**
   * Atmospheric pressure on the sea level, hPa
   *
   * @type {number}
   * @memberof OpenWeatherMapHistoryResult
   */
    pressure: number;

    /**
    * Humidity, %
    *
    * @type {number}
    * @memberof OpenWeatherMapHistoryResult
    */
    humidity: number;

    /**
    * Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
    *
    * @type {number}
    * @memberof OpenWeatherMapHistoryResult
    */
    speed: number;

    /**
    * Wind direction, degrees (meteorological)
    *
    * @type {number}
    * @memberof OpenWeatherMapHistoryResult
    */
    deg: number;

    /**
    * Cloudiness, %
    *
    * @type {number}
    * @memberof OpenWeatherMapHistoryResult
    */
    clouds: number;

    /**
    * Precipitation volume, mm
    *
    * @type {number}
    * @memberof OpenWeatherMapHistoryResult
    */
    rain: number;

    /**
    * Snow volume, mm
    *
    * @type {number}
    * @memberof OpenWeatherMapHistoryResult
    */
    snow: number;

    /**
    * Probability of precipitation
    *
    * @type {number}
    * @memberof OpenWeatherMapHistoryResult
    */
    pop: number;

    weather: {

      /**
    * Weather condition id
    *
    * @type {number}
    * @memberof OpenWeatherMapHistoryResult
    */
      id: number;

      /**
    * Group of weather parameters (Rain, Snow, Extreme etc.)
    *
    * @type {number}
    * @memberof OpenWeatherMapHistoryResult
    */
      main: number;

      /**
    * Weather condition within the group. You can get the output in your language. Learn more.
    *
    * @type {number}
    * @memberof OpenWeatherMapHistoryResult
    */
      description: number;

      /**
    * Weather icon id
    *
    * @type {number}
    * @memberof OpenWeatherMapHistoryResult
    */
      icon: number;

    };
  }>;

}

