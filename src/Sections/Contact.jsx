import styles from '../Styles/ContactStyles.module.css';
import { useState } from "react";
import { submitToGoogleSheets } from "../services/googleSheets";

function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  await submitToGoogleSheets(formData);

  alert("Message sent!");

  setFormData({
    name: "",
    email: "",
    message: "",
  });
};
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
           type="text"
           name="name"
           value={formData.name}
           onChange={handleChange}
           placeholder="Name"
           required
           />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
        </div>
        <input className="hover btn" type="submit" value="Submit" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
