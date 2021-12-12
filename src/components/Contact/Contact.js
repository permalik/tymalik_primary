import Link from 'next/link';
import { useRouter } from 'next/router';

import SectionTwo from '../SectionTwo';

import ContactStyles from '../../styles/Contact.module.scss';

export default function Contact() {
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === 'true';
  const formVisible = !confirmationScreenVisible;

  const ContactForm = (
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
  );

  const ConfirmationMessage = (
    <section>
      <p className={ContactStyles.confirmationMessage}>
        Thanks for reaching out. I should respond within 24-48 hours.
      </p>

      <Link href={`/`} passHref>
        <a>
          <button className={ContactStyles.resetForm}>Reset Form</button>
        </a>
      </Link>
    </section>
  );

  return (
    <div id='contact'>
      <SectionTwo heading='say hi'>
        {formVisible ? ContactForm : ConfirmationMessage}
      </SectionTwo>
    </div>
  );
}
