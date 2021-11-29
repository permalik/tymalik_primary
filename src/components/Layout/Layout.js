import SiteFooter from '../SiteFooter';
import SiteHeader from '../SiteHeader';

import styles from '../../styles/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>{children}</main>
      <SiteFooter />
    </>
  );
};

export default Layout;
