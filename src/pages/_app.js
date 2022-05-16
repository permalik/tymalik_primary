import {appWithTranslation} from 'next-i18next';
import {useState} from 'react';
import {darkTheme, lightTheme, GlobalStyles} from '../theme/ThemeConfig';

import Layout from '../components/Layout';

import '../styles/globals.scss';

const MyApp = ({Component, pageProps}) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default appWithTranslation(MyApp);
