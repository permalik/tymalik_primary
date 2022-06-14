import {useFormik} from "formik";
import {useState} from "react";
import * as yup from "yup";

import Section from "@components/content/home/common/section";

import styles from "./Contact.module.scss";

const Contact = () => {

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    onSubmit: () => {
      setMessage("Form submitted");
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      message: yup.string().trim().required("Message is required")
    })
  });

  return (
    <div id={"contact"}>
      <Section heading={"say hi :)"}>
        <p hidden={!submitted}>{message}</p>
        <form
          className={styles.form}
          onSubmit={formik.handleSubmit}
        >
          <label
            className={styles.contactLabel}
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={styles.contactInput}
            id="name"
            name="name"
            onChange={formik.handleChange}
            required
            type="text"
            value={formik.values.name}
          />
          {formik.errors.name && (
            <p className={styles.errorMessage}>
              {formik.errors.name}
            </p>
          )}
          <label
            className={styles.contactLabel}
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={styles.contactInput}
            name="email"
            onChange={formik.handleChange}
            required
            type="email"
            value={formik.values.email}
          />
          {formik.errors.email && (
            <p className={styles.errorMessage}>
              {formik.errors.email}
            </p>
          )}
          <label
            className={styles.contactLabel}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className={styles.contactTextArea}
            name="message"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            required
            value={formik.values.message}/>
          {formik.errors.message && (
            <p className={styles.errorMessage}>
              {formik.errors.message}
            </p>
          )}
          <button
            className={styles.contactSubmit}
            type="submit"
          >
            Submit
          </button>
        </form>
      </Section>
    </div>
  );
};

export default Contact;