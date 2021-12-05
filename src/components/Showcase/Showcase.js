import React from 'react';
import Link from 'next/link';

import puzzleCardArray from '../../../utils/puzzleCardArray';
import SectionTwo from '../SectionTwo';
import ShowcaseCard from '../ShowcaseCard';

import ShowcaseStyles from '../../styles/Showcase.module.scss';

export default function Showcase() {
  return (
    <SectionTwo>
      <h2 className={ShowcaseStyles.headingTwo}>recent projects</h2>
      <div className={ShowcaseStyles.cardWrapper}>
        <ShowcaseCard
          className={ShowcaseStyles.cardLink}
          imgUrl={`/images/trials/skillset_trial_image.png`}
          projectUrl={`http://localhost:3000/trial/whoLikesIt`}
          timestamp={puzzleCardArray[0].timestamp}
          title={'Who Likes It'}
        >
          <ul className={ShowcaseStyles.cardDescription}>
            <li>Get data from a given array</li>
            <li>
              Return an interpolated string about &ldquo;liked posts&rdquo;
            </li>
            <li>A Codewars challenge written in JavaScript</li>
          </ul>
        </ShowcaseCard>
        <ShowcaseCard
          className={ShowcaseStyles.cardLink}
          imgUrl={`/images/trials/skillset_image_github.png`}
          projectUrl={`https://reacttaskapplication.netlify.app/`}
          timestamp={`2021-07-08`}
          title={'React Todo App'}
        >
          <ul className={ShowcaseStyles.cardDescription}>
            <li>Create and display tasks in the DOM</li>
            <li>Toggle task priority</li>
            <li>Save tasks to local storage</li>
            <li>Built with React and CSS</li>
          </ul>
        </ShowcaseCard>
        <ShowcaseCard
          className={ShowcaseStyles.cardLink}
          imgUrl={`/images/trials/skillset_trial_image.png`}
          projectUrl={`#`}
          timestamp={`2021-10-28`}
          title={'Algorithm'}
        >
          <ul className={ShowcaseStyles.cardDescription}>
            <li>children</li>
          </ul>
        </ShowcaseCard>
      </div>
    </SectionTwo>
  );
}
