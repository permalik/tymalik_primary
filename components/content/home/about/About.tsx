/* eslint-disable @next/next/no-img-element */
import React from "react";

import Section from "@components/content/home/common/section";

import styles from './About.module.scss';

const About = () => {
  return (
    <Section heading='about Ty'>
      <div className={styles.container}>
        <img
          alt={`profile image of Ty Malik`}
          src={`https://res.cloudinary.com/permalik/image/upload/v1630389505/profile.jpg`}
        />
        <p>
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
    </Section>
  );
}

export default About;
