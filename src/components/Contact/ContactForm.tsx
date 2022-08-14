import { Validator } from "react";

export const ContactForm = () => {
  return (
    <form className="contact-form">
      <input
        type="email"
        className="form-input"
        placeholder="enter email"
        data-validation="required"
        data-validation-type="text"
      />
      <button type="submit" className="submit-btn">
        subscribe
      </button>
    </form>
  );
};
