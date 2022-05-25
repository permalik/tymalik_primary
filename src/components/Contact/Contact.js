import Link from 'next/link';
import { useRouter } from 'next/router';

import SectionTwo from '../SectionTwo';

import styles from './Contact.module.scss';

export default function Contact() {
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === 'true';
  const formVisible = !confirmationScreenVisible;

  const ContactForm = (
    <form
      action='/?success=true'
      className={styles.contactForm}
      data-netlify='true'
      method='POST'
      name='contact_form'
    >
      <input name='form_name' type='hidden' value='contact_form' />
      <label className={styles.contactLabel} htmlFor='name'>
        Name
      </label>
      <input
        className={styles.contactInput}
        id='name'
        name='name'
        required
        type='text'
      />
      <label className={styles.contactLabel} htmlFor='email'>
        Email{' '}
      </label>
      <input
        className={styles.contactInput}
        id='email'
        name='email'
        required
        type='email'
      />
      <label className={styles.contactLabel} htmlFor='message'>
        Message{' '}
      </label>
      <textarea
        className={styles.contactTextArea}
        id='message'
        name='message'
        required
      ></textarea>
      <button className={styles.contactSubmit} type='submit'>
        Submit
      </button>
    </form>
  );

  const ConfirmationMessage = (
    <section>
      <p className={styles.confirmationMessage}>
        Thanks for reaching out. I should respond within 24-48 hours.
      </p>

      <Link href={`/`} passHref>
        <a>
          <button className={styles.resetForm}>Reset Form</button>
        </a>
      </Link>
    </section>
  );

  return (
    <div id='contact'>
      <SectionTwo heading='say hi :)'>
        {formVisible ? ContactForm : ConfirmationMessage}
      </SectionTwo>
    </div>
  );
}
