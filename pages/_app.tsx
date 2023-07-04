import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './Layout'

export default function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
