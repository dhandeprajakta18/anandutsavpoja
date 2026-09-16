"use client";

import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";

import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa6";

import styles from "./Contact.module.css";

type ContactFormProps = {
  selectedInterest: string;
};

type FormValues = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const interestLabels: Record<string, string> = {
  membership: "Membership Enquiry",
  general: "General Enquiry",
  participation: "Festival Participation",
  cultural: "Cultural Programme",
  volunteer: "Volunteering",
  "personal-sponsor": "Personal Sponsorship",
  "corporate-sponsor": "Corporate Sponsorship",
  csr: "CSR / Social Activities",
};

export default function ContactForm({
  selectedInterest,
}: ContactFormProps) {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    subject: selectedInterest,
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  /* =========================
     VALIDATION
  ========================= */

  const validateForm = () => {
    const newErrors: FormErrors = {};

    const name = formValues.name.trim();
    const phone = formValues.phone.trim();
    const email = formValues.email.trim();
    const message = formValues.message.trim();

    // Name
    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (!/^[A-Za-z\s.'-]+$/.test(name)) {
      newErrors.name = "Please enter a valid name.";
    }

    // Phone - optional
    if (phone) {
      const cleanedPhone = phone.replace(/[\s-]/g, "");

      if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(cleanedPhone)) {
        newErrors.phone =
          "Please enter a valid 10-digit Indian mobile number.";
      }
    }

    // Email
    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Subject
    if (!formValues.subject) {
      newErrors.subject = "Please select an enquiry type.";
    }

    // Message
    if (!message) {
      newErrors.message = "Please enter your message.";
    } else if (message.length < 10) {
      newErrors.message =
        "Your message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =========================
     INPUT CHANGE
  ========================= */

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Remove the error while the user corrects the field
    if (errors[name as keyof FormValues]) {
      setErrors((previous) => ({
        ...previous,
        [name]: undefined,
      }));
    }

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  /* =========================
     SUBMIT
  ========================= */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setStatus("idle");

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setIsSending(true);

    const templateParams = {
      name: formValues.name.trim(),

      phone:
        formValues.phone.trim() || "Not provided",

      email: formValues.email.trim(),

      subject:
        interestLabels[formValues.subject] ||
        formValues.subject,

      message: formValues.message.trim(),
    };

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

    const adminTemplateId =
      process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID;

    const userTemplateId =
      process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID;

    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (
      !serviceId ||
      !adminTemplateId ||
      !userTemplateId ||
      !publicKey
    ) {
      console.error(
        "EmailJS environment variables are missing."
      );

      setStatus("error");
      setIsSending(false);

      return;
    }

    try {
      // Send enquiry to Ananda Utsav
      await emailjs.send(
        serviceId,
        adminTemplateId,
        templateParams,
        {
          publicKey,
        }
      );

      // Send confirmation email to visitor
      await emailjs.send(
        serviceId,
        userTemplateId,
        templateParams,
        {
          publicKey,
        }
      );

      setStatus("success");

      // Clear form
      setFormValues({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.formRow}>
        {/* NAME */}

        <div className={styles.field}>
          <label htmlFor="name">
            Your Name <span>*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Enter your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={
              errors.name ? "name-error" : undefined
            }
          />

          {errors.name && (
            <p
              id="name-error"
              className={styles.fieldError}
            >
              {errors.name}
            </p>
          )}
        </div>

        {/* PHONE */}

        <div className={styles.field}>
          <label htmlFor="phone">
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formValues.phone}
            onChange={handleChange}
            placeholder="+91 00000 00000"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={
              errors.phone ? "phone-error" : undefined
            }
          />

          {errors.phone && (
            <p
              id="phone-error"
              className={styles.fieldError}
            >
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className={styles.formRow}>
        {/* EMAIL */}

        <div className={styles.field}>
          <label htmlFor="email">
            Email Address <span>*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="yourname@email.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? "email-error" : undefined
            }
          />

          {errors.email && (
            <p
              id="email-error"
              className={styles.fieldError}
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* SUBJECT */}

        <div className={styles.field}>
          <label htmlFor="subject">
            I&apos;m Interested In <span>*</span>
          </label>

          <select
            id="subject"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={
              errors.subject ? "subject-error" : undefined
            }
          >
            <option
              value=""
              disabled
            >
              Select an enquiry
            </option>

            <option value="membership">
              Membership Enquiry
            </option>

            <option value="general">
              General Enquiry
            </option>

            <option value="participation">
              Festival Participation
            </option>

            <option value="cultural">
              Cultural Programme
            </option>

            <option value="volunteer">
              Volunteering
            </option>

            <option value="personal-sponsor">
              Personal Sponsorship
            </option>

            <option value="corporate-sponsor">
              Corporate Sponsorship
            </option>

            <option value="csr">
              CSR / Social Activities
            </option>
          </select>

          {errors.subject && (
            <p
              id="subject-error"
              className={styles.fieldError}
            >
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      {/* MESSAGE */}

      <div className={styles.field}>
        <label htmlFor="message">
          Your Message <span>*</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          value={formValues.message}
          onChange={handleChange}
          placeholder="Tell us how we can help..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "message-error" : undefined
          }
        />

        {errors.message && (
          <p
            id="message-error"
            className={styles.fieldError}
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* SUBMIT */}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSending}
      >
        <span>
          {isSending ? "Sending..." : "Send Message"}
        </span>

        <FaPaperPlane />
      </button>

      {/* SUCCESS */}

      {status === "success" && (
        <p
          className={styles.successMessage}
          role="status"
        >
          Thank you! Your message has been sent successfully.
        </p>
      )}

      {/* ERROR */}

      {status === "error" && (
        <p
          className={styles.errorMessage}
          role="alert"
        >
          Sorry, we couldn&apos;t send your message. Please try
          again.
        </p>
      )}
    </form>
  );
}