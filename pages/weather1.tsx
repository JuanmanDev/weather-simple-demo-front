import React, { useState } from 'react';
import Head from 'next/head';
import SearchBox from '../components/searchbox/Searchbox';
import { getWeatherByCityName, Units } from '../services/openweathermap';
import { OpenWeatherMapResult } from '../types/openweathermap';
// eslint-disable-next-line css-modules/no-unused-class
import styles from '../styles/Home.module.css';

export default function home(): React.ReactNode {
  const [ weatherResult, setWeatherResult ] = useState<OpenWeatherMapResult | null>(null);

  const zero = 0;

  const receiveEnter = async (query: string) => {
    try {
      setWeatherResult(null);
      const result = await getWeatherByCityName({ cityName: query, units: Units.metric });

      setWeatherResult(result);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <div className={ styles.container }>
      <Head>
        <title>First weather example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={ styles.main }>
        <h1 className={ styles.title }>
          Welcome to Weather v1!
        </h1>

        <p className={ styles.description }>
          I hope you find this useful, search here which location you want to know:
          <br />
          <SearchBox placeHolder="City, State, Country" onEnter={ receiveEnter } />
          <br />
        </p>

        { weatherResult && (
          <>
            <h2>Current weather for { weatherResult.name }:</h2>
            <div className={ styles.grid }>

              { weatherResult.weather?.[zero]?.main && (
                <a className={ styles.card }>
                  <h3>{ weatherResult.weather[zero].main }</h3>
                  <p>{ weatherResult.weather[zero].description }</p>
                  <img src={ `http://openweathermap.org/img/wn/${ weatherResult.weather[zero].icon }@2x.png` } />
                </a>
              ) }

              { weatherResult.clouds && (
                <a className={ styles.card }>
                  <h3>Clouds:</h3>
                  <p>{ weatherResult.clouds.all }%</p>
                </a>
              ) }

              { weatherResult.rain && (
                <a className={ styles.card }>
                  <h3>Raining:</h3>
                  { weatherResult.rain['1h'] && <p>Last hour: { weatherResult.rain['1h'] }mm</p> }
                  { weatherResult.rain['3h'] && <p>Last 3 hours: { weatherResult.rain['3h'] }mm</p> }
                </a>
              ) }

              { weatherResult.main.temp && (
                <a className={ styles.card }>
                  <h3>Temperature: { weatherResult.main.temp }ºC</h3>
                  { weatherResult.main.feelsLike && <p> Feels like: { weatherResult.main.feelsLike }ºC</p> }
                  { weatherResult.main.tempMin && <p> Minimum: { weatherResult.main.tempMin }ºC</p> }
                  { weatherResult.main.tempMax && <p> Maximum: { weatherResult.main.tempMax }ºC</p> }
                </a>
              ) }

            </div>
          </>
        ) }
      </main>

      <footer className={ styles.footer }>
        Made with ♥ by Juan Manuel Béc -
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
          { ' ' }Powered by{ ' ' }
          <img src="/vercel.svg" alt="Vercel Logo" className={ styles.logo } />
        </a>
      </footer>
    </div>
  );
}
