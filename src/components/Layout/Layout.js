import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {darkTheme, GlobalStyles, lightTheme} from '../../theme/ThemeConfig';

import SiteFooter from '../SiteFooter';
import SiteHeader from '../SiteHeader';

import styles from '../../styles/Layout.module.scss';

export default function Layout({children}) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <>
                <SiteHeader toggle={toggleTheme}/>
                <main className={styles.main}>{children}</main>
                <SiteFooter/>
            </>
        </ThemeProvider>
    );
}
