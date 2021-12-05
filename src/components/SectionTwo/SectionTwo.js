import React from 'react';
import SectionTwoStyles from '../../styles/SectionTwo.module.scss';

export default function SectionTwo({ children }) {
  return <section className={SectionTwoStyles.section}>{children}</section>;
}
