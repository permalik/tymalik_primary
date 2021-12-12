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
            I&#39;m Ty Malik, a designer and front-end engineer. I&#39;ve been
            developing websites and applications for the past two years.
          </span>
          <span>
            While maintaining a full-time job, I am both working toward a
            computer science degree and following the LaunchSchool programming
            curriculum.
          </span>
          <span>
            The life-long learning process is what initially led me to software
            engineering and it&#39;s that which keeps me interested. I&#39;m
            currently based in Oklahoma City, OK.
          </span>
        </p>
      </div>
    </SectionTwo>
  );
}
