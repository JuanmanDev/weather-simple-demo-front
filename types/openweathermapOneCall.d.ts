/* eslint-disable camelcase */

export interface OpenWeatherMapOneCallResult {

  /**
   * Geographical coordinates of the location (latitude)
   *
   * @type {string}
   * @memberof OpenWeatherMapHistoryResult
   */
  lat: number;

  /**
   * Geographical coordinates of the location (longitude)
   *
   * @type {string}
   * @memberof OpenWeatherMapHistoryResult
   */
  lon: number;

  /**
   * Timezone name for the requested location
   *
   * @type {string}
   * @memberof OpenWeatherMapHistoryResult
   */
  timezone: string;

  /**
   * Shift in seconds from UTC
   *
   * @type {string}
   * @memberof OpenWeatherMapHistoryResult
   */
  timezone_offset: number;

  current: {

    /**
   * Current time, Unix, UTC
   *
   * @type {string}
   * @memberof OpenWeatherMapHistoryResult
   */
    dt: number;

    /**
    * Sunrise time, Unix, UTC
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    sunrise: number;

    /**
    * Sunset time, Unix, UTC
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    sunset: number;

    /**
    * Temperature. Units - default: kelvin, metric: Celsius, imperial: Fahrenheit. How to change units used
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    temp: number;

    /**
    * Temperature. This temperature parameter accounts for the human perception of weather.
    * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    feels_like: number;

    /**
    * Atmospheric pressure on the sea level, hPa
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    pressure: number;

    /**
    * Humidity, %
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    humidity: number;

    /**
    * Atmospheric temperature (varying according to pressure and humidity)
    * below which water droplets begin to condense and dew can form.
    * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    dew_point: number;

    /**
    * Cloudiness, %
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    clouds: number;

    /**
    * Current UV index
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    uvi: number;

    /**
    * Average visibility, metres
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    visibility: number;

    /**
    * Wind speed. Wind speed.
    * Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. How to change units used
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    wind_speed: number;

    /**
    * (where available) Wind gust.
    * Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. How to change units used
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    wind_gust?: number;

    /**
    * Wind direction, degrees (meteorological)
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    wind_deg: number;

    /**
    * Shift in seconds from UTC
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    rain?: {

      /**
    *(where available) Rain volume for last hour, mm
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
      '1h': number;
    };

    /**
    * Shift in seconds from UTC
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    snow?: {

      /**
    * (where available) Snow volume for last hour, mm
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
      '1h': number;
    };

    /**
    * Shift in seconds from UTC
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
    weather: {

      /**
    * Weather condition id
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
      id: number;

      /**
    * Group of weather parameters (Rain, Snow, Extreme etc.)
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
      main: string;

      /**
    * Weather condition within the group (full list of weather conditions). Get the output in your language
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
      description: string;

      /**
    * Weather icon id. How to get icons
    *
    * @type {string}
    * @memberof OpenWeatherMapHistoryResult
    */
      icon: string;
    };

  };

  minutely: Array<{

    /**
       * Time of the forecasted data, unix, UTC
       *
       * @type {number}
       */
    dt: number;

    /**
       * Precipitation volume, mm
       *
       * @type {number}
       */
    precipitation: number;
  }>;

  hourly: Array<{

    /**
       *  Time of the forecasted data, Unix, UTC
       *
       * @type {number}
       */
    dt: number;

    /**
            *  Temperature.
            * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit. How to change units used
            *
            * @type {number}
            */
    temp: number;

    /**
            *  Temperature. This accounts for the human perception of weather.
            * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
            *
            * @type {number}
            */
    feels_like: number;

    /**
            *  Atmospheric pressure on the sea level, hPa
            *
            * @type {number}
            */
    pressure: number;

    /**
            *  Humidity, %
            *
            * @type {number}
            */
    humidity: number;

    /**
            *  Atmospheric temperature (varying according to pressure and humidity)
            * below which water droplets begin to condense and dew can form.
            * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
            *
            * @type {number}
            */
    dew_point: number;

    /**
            *  UV index
            *
            * @type {number}
            */
    uvi: number;

    /**
            *  Cloudiness, %
            *
            * @type {number}
            */
    clouds: number;

    /**
            *  Average visibility, metres
            *
            * @type {number}
            */
    visibility: number;

    /**
            *  Wind speed.
            * Units – default: metre/sec, metric: metre/sec, imperial: miles/hour.How to change units used
            *
            * @type {number}
            */
    wind_speed: number;

    /**
            *  (where available) Wind gust.
            * Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. How to change units used
            *
            * @type {number}
            */
    wind_gust: number;

    /**
            *  Wind direction, degrees (meteorological)
            *
            * @type {number}
            */
    wind_deg: number;

    /**
            *  Probability of precipitation
            *
            * @type {number}
            */
    pop: number;

    /**
            * ;
            *
            * @type {number}
            */
    rain?: {

      /**
            * .1h (where available) Rain volume for last hour, mm
            *
            * @type {number}
            */
      '1h': number;

    };

    /**
            * ;
            *
            * @type {number}
            */
    snow?: {

      /**
            * .1h (where available) Snow volume for last hour, mm
            *
            * @type {number}
            */
      '1h': number;

    };

    /**
            * ;
            *
            * @type {number}
            */
    weather: Array<{

      /**
            * Weather condition id
            *
            * @type {number}
            */
      id: number;

      /**
            * Group of weather parameters (Rain, Snow, Extreme etc.)
            *
            * @type {number}
            */
      main: string;

      /**
            * Weather condition within the group (full list of weather conditions). Get the output in your language
            *
            * @type {number}
            */
      description: string;

      /**
            * Weather icon id. How to get icons
            *
            * @type {number}
            */
      icon: string;

    }>;
  }>;

  daily: Array<{

    /**
   *   Time of the forecasted data, Unix, UTC
   *
   * @type {string}
   * @memberof OpenWeatherMapHistoryResult
   */
    dt: number;

    /**
      *   Sunrise time, Unix, UTC
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    sunrise: number;

    /**
      *   Sunset time, Unix, UTC
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    sunset: number;

    /**
      *
      * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit. How to change units used
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    temp: {

      /**
      * Morning temperature.
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      morn: number;

      /**
      * Day temperature.
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      day: number;

      /**
      * Evening temperature.
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      eve: number;

      /**
      * Night temperature.
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      night: number;

      /**
      * Min daily temperature.
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      min: number;

      /**
      * Max daily temperature.
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      max: number;
    };

    /**
      *   This accounts for the human perception of weather.
      * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit. How to change units used
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    feels_like: {

      /**
      * Morning temperature.
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      morn: number;

      /**
      * Day temperature.
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      day: number;

      /**
      * Evening temperature.
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      eve: number;

      /**
      * Night temperature.
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      night: number;
    };

    /**
      *   Atmospheric pressure on the sea level, hPa
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    pressure: number;

    /**
      *   Humidity, %
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    humidity: number;

    /**
      * Atmospheric temperature (varying according to pressure and humidity) below which water droplets
      * begin to condense and dew can form.
      * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    dew_point: number;

    /**
      *   Wind speed.
      * Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. How to change units used
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    wind_speed: number;

    /**
      *  Wind gust.
      * Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. How to change units used
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    wind_gust?: number;

    /**
      *   Wind direction, degrees (meteorological)
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    wind_deg: number;

    /**
      *   Cloudiness, %
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    clouds: number;

    /**
      *   The maximum value of UV index for the day
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    uvi: number;

    /**
      *   Probability of precipitation
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    pop: number;

    /**
      *  Precipitation volume, mm
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    rain?: number;

    /**
      *  Snow volume, mm
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    snow?: number;

    /**
      *
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    weather: {

      /**
      * Weather condition id
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      id: number;

      /**
      * Group of weather parameters (Rain, Snow, Extreme etc.)
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      main: string;

      /**
      * Weather condition within the group (full list of weather conditions). Get the output in your language
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      description: string;

      /**
      * Weather icon id. How to get icons
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
      icon: number;
    };

  }>;

  alerts: Array<{

    /**
      * Name of the alert source. Please read here the full list of alert sources
      *
      * @type {string}
      * @memberof OpenWeatherMapHistoryResult
      */
    sender_name: number;

    /**
       * Alert event name
       *
       * @type {string}
       * @memberof OpenWeatherMapHistoryResult
       */
    event: number;

    /**
       * Date and time of the start of the alert, Unix, UTC
       *
       * @type {string}
       * @memberof OpenWeatherMapHistoryResult
       */
    start: number;

    /**
       * Date and time of the end of the alert, Unix, UTC
       *
       * @type {string}
       * @memberof OpenWeatherMapHistoryResult
       */
    end: number;

    /**
       * Description of the alert
       *
       * @type {string}
       * @memberof OpenWeatherMapHistoryResult
       */
    description: number;
  }>;

}

