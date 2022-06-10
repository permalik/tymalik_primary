import {appWithTranslation} from 'next-i18next';
import {AppProps} from "next/app";

import Layout from '../components/common/layout';

import '../styles/globals.scss';

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp);
