import * as React from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function myApp({ Component, pageProps }: AppProps): React.ReactNode {
  return <Component { ...pageProps } />;
}

export default myApp;
