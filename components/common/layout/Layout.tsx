import React, {useState} from "react";
import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "../../../theme/themeConfig";

import Header from "../header";
import Footer from "../footer";

import styles from "./Layout.module.scss";

const Layout = ({children}: any) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <>
        <Header toggle={toggleTheme}/>
        <main className={styles.main}>{children}</main>
        <Footer/>
      </>
    </ThemeProvider>
  );
};

export default Layout;
