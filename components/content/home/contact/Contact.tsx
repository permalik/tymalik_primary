import emailjs from "@emailjs/browser";
import {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";

import Section from "@components/content/home/common/section";

import styles from "./Contact.module.scss";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  // const register = useRef<HTMLTextAreaElement>(null);

  const {
    formState: {errors, isSubmitSuccessful},
    handleSubmit,
    register,
    reset
  } = useForm<IFormInputs>();

  const sendEmail = () => {
    emailjs.sendForm("service_tymalik", "template_tymalik", form.current!, "DqrRy_3JD7E59rcF9")
      .then((result) => {
        alert(result.text);
      }, (error) => {
        alert(error.text);
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        message: ""
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div id={"contact"}>
      <Section heading={"say hi :)"}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(sendEmail)}
          ref={form}
        >
          <label
            className={styles.contactLabel}
            htmlFor="name"
          >
            Name
          </label>
          <input
            {...register("name", {
              pattern: /^[A-Za-z]+$/i,
              required: true
            })}
            className={styles.contactInput}
            id="name"
            name="name"
            type="text"
          />
          {errors?.name?.type === "required"
            &&
              <p className={styles.errorMessage}>
                  Name is required.
              </p>
          }
          {errors?.name?.type === "pattern"
            &&
              <p className={styles.errorMessage}>
                  Alphabetical characters only.
              </p>
          }
          <label
            className={styles.contactLabel}
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email", {
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              required: true
            })}
            className={styles.contactInput}
            name="email"
            type="email"
          />
          {errors?.email?.type === "required"
            &&
              <p className={styles.errorMessage}>
                  Email is required.
              </p>
          }
          {errors?.name?.type === "pattern"
            &&
              <p className={styles.errorMessage}>
                  Input a valid email.
              </p>
          }
          <label
            className={styles.contactLabel}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            {...register("message")}
            className={styles.contactTextArea}
          />
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