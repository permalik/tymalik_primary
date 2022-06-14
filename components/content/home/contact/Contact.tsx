import Link from "next/link";
import {useRouter} from "next/router";

import Section from "@components/content/home/common/section";
import {useEffect, useState} from "react";

import styles from "./Contact.module.scss";

interface FormProps {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  // const router = useRouter();
  // const confirmationScreenVisible =
  //   router.query?.success && router.query.success === "true";
  // const formVisible = !confirmationScreenVisible;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    setIsSubmitted(true);
    e.preventDefault();
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  useEffect(() => {
    if (isSubmitted) {
      fetch("/", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: encode({"form_name": "contact_form", ...formData})
      })
        .then(() => alert("Success!"))
        .then(() => setIsSubmitted(false))
        .then(() => setFormData({name: "", email: "", message: ""}))
        .catch(error => alert(error));
    }
  }, [errors, formData, isSubmitted]);

  const ContactForm = (
    <form
      action={"/ConfirmationMessage"}
      className={styles.form}
      data-netlify="true"
      name="contact_form"
      onSubmit={handleSubmit}
    >
      <input name="form_name" type="hidden" value="contact_form"/>
      <label className={styles.contactLabel} htmlFor="name">
        Name
      </label>
      <input
        className={styles.contactInput}
        id="name"
        name="name"
        onChange={handleChange}
        required
        type="text"
        value={formData.name}
      />
      <label className={styles.contactLabel} htmlFor="email">
        Email{" "}
      </label>
      <input
        className={styles.contactInput}
        id="email"
        name="email"
        onChange={handleChange}
        required
        type="email"
        value={formData.email}
      />
      <label className={styles.contactLabel} htmlFor="message">
        Message{" "}
      </label>
      <textarea
        className={styles.contactTextArea}
        id="message"
        name="message"
        onChange={handleChange}
        required
        value={formData.message}>
      </textarea>
      <button className={styles.contactSubmit} type="submit">
        Submit
      </button>
    </form>
  );

  // const ConfirmationMessage = (
  //   <section>
  //     <p className={styles.confirmationMessage}>
  //       Thanks for reaching out. I should respond within 24-48 hours.
  //     </p>
  //
  //     <Link href={`/`} passHref>
  //       <a>
  //         <button className={styles.resetForm}>Reset Form</button>
  //       </a>
  //     </Link>
  //   </section>
  // );

  return (
    <div id="contact">
      <Section heading="say hi :)">
        {ContactForm}
        {/*{formVisible ? ContactForm : ConfirmationMessage}*/}
      </Section>
    </div>
  );
};

export default Contact;