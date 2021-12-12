import { appWithTranslation } from 'next-i18next';

import Layout from '../components/Layout';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp);
