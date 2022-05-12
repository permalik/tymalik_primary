/* eslint-disable @next/next/no-img-element */
import SectionTwo from '../SectionTwo';

import AboutStyles from '../../styles/About.module.scss';

export default function About() {
  return (
    <SectionTwo heading='about Ty'>
      <div className={AboutStyles.contentWrapper}>
        <img
          alt={`profile image of Ty Malik`}
          className={AboutStyles.profileImage}
          src={`https://res.cloudinary.com/permalik/image/upload/v1630389505/profile.jpg`}
        />
        <p className={AboutStyles.aboutDescription}>
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
            cheers.
          </span>
        </p>
      </div>
    </SectionTwo>
  );
}
