import SiteFooter from '../SiteFooter';
import SiteHeader from '../SiteHeader';

import styles from '../../styles/Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>{children}</main>
      <SiteFooter />
    </>
  );
}
