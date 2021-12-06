import Image from 'next/image';
import Link from 'next/link';

import SiteHeaderStyles from '../../styles/SiteHeader.module.scss';

export default function SiteHeader() {
  return (
    <header className={SiteHeaderStyles.siteHeader}>
      <div className={SiteHeaderStyles.contentWrapper}>
        <Link href={`/`}>
          <a className={SiteHeaderStyles.logo}>
            <Image
              alt='Ty Malik logo'
              height='200px'
              src='/logo.svg'
              width='200px'
            />
          </a>
        </Link>
        <nav className={SiteHeaderStyles.nav}>
          <Link href={`/allArticles`}>
            <a className={SiteHeaderStyles.navLink}>articles</a>
          </Link>
          <Link href={`/#contact`}>
            <a className={SiteHeaderStyles.navLink}>contact</a>
          </Link>
          <Link href={`/portfolio`}>
            <a className={SiteHeaderStyles.navLink}>portfolio</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
