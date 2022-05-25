/* eslint-disable @next/next/no-img-element */
import SectionTwo from '../SectionTwo';

import styles from './About.module.scss';

export default function About() {
  return (
    <SectionTwo heading='about Ty'>
      <div className={styles.contentWrapper}>
        <img
          alt={`profile image of Ty Malik`}
          className={styles.profileImage}
          src={`https://res.cloudinary.com/permalik/image/upload/v1630389505/profile.jpg`}
        />
        <p className={styles.aboutDescription}>
          <span>
            I&#39;m a designer and front-end engineer.
          </span>
          <span>
            My focus is on building functional, effective, and appealing experiences.
          </span>
          <span>
            I&#39;m currently learning to implement animations in web applications and sites.
          </span>
          <span>
            Cheers.
          </span>
        </p>
      </div>
    </SectionTwo>
  );
}
