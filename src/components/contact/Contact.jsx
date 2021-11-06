import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cwgzpyu",
        "template_tp26a63",
        formRef.current,
        "user_WzFGnr29HXGYOofqNavrS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Pour nous contacter</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              23 426 704
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              najehbriguiess@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Nous somme à Hammam sousse just a côté de kiosque Shell prêt de salle de fête Zini Film
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Pour nous dite quelque chose</b> vous pouvez nous contacter et nous vous répondrons dans les plus brefs délais
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Nom" name="user_name" />
            <input  type="text" placeholder="Sujet" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;