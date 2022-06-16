import emailjs from "@emailjs/browser";
import {useRef} from "react";
import {useForm} from "react-hook-form";

import Section from "@components/content/home/common/section";

import styles from "./Contact.module.scss";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
};

// const schema = Yup.object({
//   name: Yup
//     .string()
//     .required("Name is required"),
//   email: Yup
//     .string()
//     .email()
//     .required("Email is required"),
//   message: Yup
//     .string()
//     .required("Message is required")
// });

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const textArea = useRef<HTMLTextAreaElement>(null);

  const {
    formState: {errors},
    handleSubmit,
    register,
    reset
  } = useForm<IFormInputs>();

  const sendEmail = (e: any) => {
    emailjs.sendForm("service_tymalik", "template_tymalik", form.current!, "DqrRy_3JD7E59rcF9")
      .then((result) => {
        alert(result.text);
      }, (error) => {
        alert(error.text);
      });
  };

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
            className={styles.contactTextArea}
            name="message"
            ref={textArea}
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