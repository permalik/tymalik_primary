import React from 'react';
import SectionTwo from '../SectionTwo';

import ContactStyles from '../../styles/Contact.module.scss';

export default function Contact() {
  return (
    <SectionTwo>
      <h2 className={ContactStyles.contactHeading} id='contact'>
        say hi
      </h2>
      <form
        action='/?success=true'
        className={ContactStyles.contactForm}
        data-netlify='true'
        method='POST'
        name='contact_form'
      >
        <input name='form_name' type='hidden' value='contact_form' />
        <label className={ContactStyles.contactLabel} htmlFor='name'>
          Name
        </label>
        <input
          className={ContactStyles.contactInput}
          id='name'
          name='name'
          required
          type='text'
        />
        <label className={ContactStyles.contactLabel} htmlFor='email'>
          Email{' '}
        </label>
        <input
          className={ContactStyles.contactInput}
          id='email'
          name='email'
          required
          type='email'
        />
        <label className={ContactStyles.contactLabel} htmlFor='message'>
          Message{' '}
        </label>
        <textarea
          className={ContactStyles.contactTextArea}
          id='message'
          name='message'
          required
        ></textarea>
        <button className={ContactStyles.contactSubmit} type='submit'>
          Submit
        </button>
      </form>
    </SectionTwo>
  );
}
