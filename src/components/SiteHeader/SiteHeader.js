import Image from 'next/image';
import Link from 'next/link';

import SiteHeaderStyles from './SiteHeader.module.scss';

export default function SiteHeader({toggle}) {
    return (
        <header
            aria-label="page header"
            className={SiteHeaderStyles.siteHeader}
            role="banner"
        >
            <div className={SiteHeaderStyles.contentWrapper}>
                <nav
                    aria-label="site navigation"
                    className={SiteHeaderStyles.nav}
                    role="navigation"
                >
                    <Link href={`/allArticles`}>
                        <a
                            aria-label="articles"
                            className={SiteHeaderStyles.navLink}
                            title="articles"
                        >
                            articles
                        </a>
                    </Link>
                    <Link href={`/#contact`}>
                        <a aria-label="contact"
                           className={SiteHeaderStyles.navLink}>
                            contact
                        </a>
                    </Link>
                    <Link href={`/portfolio`}>
                        <a aria-label="portfolio"
                           className={SiteHeaderStyles.navLink}>
                            portfolio
                        </a>
                    </Link>
                    <button
                        className={SiteHeaderStyles.themeButton}
                        onClick={toggle}
                    >
                        Toggle Theme
                    </button>
                </nav>
            </div>
        </header>
    );
}
