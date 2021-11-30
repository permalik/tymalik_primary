import Image from 'next/image';

import SiteFooterStyles from '../../styles/SiteFooter.module.scss';

export default function SiteFooter() {
  return (
    <footer className={SiteFooterStyles.siteFooter}>
      <section className={SiteFooterStyles.credentialSection}>
        <p>
          <span>2021</span>
          <span>Ty Malik</span>
        </p>
      </section>
      <nav className={SiteFooterStyles.buildNav}>
        <ul>
          <li>
            <a href='https://nextjs.org/'>nextjs</a>
          </li>
          <li>
            <a href='https://github.com/permalik/tymalik_primary.git'>source</a>
          </li>
        </ul>
      </nav>
      <nav className={SiteFooterStyles.socialNav}>
        <ul>
          <a href=''>
            <li className={SiteFooterStyles.socialLi}>
              <Image
                alt='at sign, email icon link'
                className={SiteFooterStyles.socialLinkIcon}
                height='50px'
                src='https://res.cloudinary.com/permalik/image/upload/v1630653022/email_svg.svg'
                width='50px'
              />
            </li>
          </a>
          <a>
            <li className={SiteFooterStyles.socialLi}>
              <Image
                alt='github logo, github icon link'
                className={SiteFooterStyles.socialLinkIcon}
                height='50px'
                src='https://res.cloudinary.com/permalik/image/upload/v1630652678/github_svg.svg'
                width='50px'
              />
            </li>
          </a>
          <a href=''>
            <li className={SiteFooterStyles.socialLi}>
              <Image
                alt='linkedin logo, linkedin icon link'
                className={SiteFooterStyles.socialLinkIcon}
                height='50px'
                src='https://res.cloudinary.com/permalik/image/upload/v1630652818/linkedin_svg.svg'
                width='50px'
              />
            </li>
          </a>
          <a href=''>
            <li className={SiteFooterStyles.socialLi}>
              <Image
                alt='twitter logo, twitter icon link'
                className={SiteFooterStyles.socialLinkIcon}
                height='50px'
                src='https://res.cloudinary.com/permalik/image/upload/v1630652927/twitter_svg.svg'
                width='50px'
              />
            </li>
          </a>
        </ul>
      </nav>
    </footer>
  );
}
