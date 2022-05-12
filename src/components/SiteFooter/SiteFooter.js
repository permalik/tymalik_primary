import Image from 'next/image';

import SiteFooterStyles from '../../styles/SiteFooter.module.scss';

export default function SiteFooter() {
  return (
    <footer
      aria-label='page footer'
      className={SiteFooterStyles.siteFooter}
      role='contentinfo'
    >
      <section className={SiteFooterStyles.credentialSection}>
        <p>
          <span>2022</span>
          <span>Ty Malik</span>
        </p>
      </section>
      <nav
        aria-label='build navigation'
        className={SiteFooterStyles.buildNav}
        role='navigation'
      >
        <ul>
          <li>
            <a href='https://netlify.com/'>netlify</a>
          </li>
          <li>
            <a href='https://github.com/permalik/tymalik_primary.git'>source</a>
          </li>
          <li>
            <a href='https://nextjs.org/'>nextjs</a>
          </li>
        </ul>
      </nav>
      <nav
        aria-label='social link navigation'
        className={SiteFooterStyles.socialNav}
        role='navigation'
      >
        <ul>
          <li className={SiteFooterStyles.socialLi}>
            <a href='mailto:tymalik@protonmail.com'>
              <Image
                alt='at sign, email icon link'
                className={SiteFooterStyles.socialLinkIcon}
                height='50px'
                src='https://res.cloudinary.com/permalik/image/upload/v1630653022/email_svg.svg'
                width='50px'
              />
            </a>
          </li>
          <li className={SiteFooterStyles.socialLi}>
            <a href='https://github.com/permalik'>
              <Image
                alt='github logo, github icon link'
                className={SiteFooterStyles.socialLinkIcon}
                height='50px'
                src='https://res.cloudinary.com/permalik/image/upload/v1630652678/github_svg.svg'
                width='50px'
              />
            </a>
          </li>
          <li className={SiteFooterStyles.socialLi}>
            <a href='https://www.linkedin.com/in/permalik/'>
              <Image
                alt='linkedin logo, linkedin icon link'
                className={SiteFooterStyles.socialLinkIcon}
                height='50px'
                src='https://res.cloudinary.com/permalik/image/upload/v1630652818/linkedin_svg.svg'
                width='50px'
              />
            </a>
          </li>
          <li className={SiteFooterStyles.socialLi}>
            <a href='https://twitter.com/resetpermalik'>
              <Image
                alt='twitter logo, twitter icon link'
                className={SiteFooterStyles.socialLinkIcon}
                height='50px'
                src='https://res.cloudinary.com/permalik/image/upload/v1630652927/twitter_svg.svg'
                width='50px'
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
