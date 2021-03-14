import React from 'react';
import Head from 'next/head';
// eslint-disable-next-line css-modules/no-unused-class
import styles from '../styles/Home.module.css';

export default function home(): React.ReactNode {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={ styles.main }>
        <h1 className={ styles.title }>
          Welcome to my <a href="https://nextjs.org">Next.js</a> project
        </h1>

        <p className={ styles.description }>
          Select what you would like to see:
        </p>

        <div className={ styles.grid }>
          <a href="/weather1" className={ styles.card }>
            <h3>Weather v1 &rarr; </h3>
            <p>Basic call API to show current weather in specificated location.</p>
          </a>
        </div>
      </main>

      <footer className={ styles.footer }>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
          Powered by{ ' ' }
          <img src="/vercel.svg" alt="Vercel Logo" className={ styles.logo } />
        </a>
      </footer>
    </div>
  );
}
