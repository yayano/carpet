import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    const sendEmail = { name, email, contactNo, message };
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        sendEmail,
        import.meta.env.VITE_USER_ID
      )
      .then((result) => {
        setName("");
        setEmail("");
        setContactNo("");
        setMessage("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="background">
      <div className="contacter">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>

            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>

          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">
                CONTACT INFO : +213 540 59 60 16
              </div>
            </div>

            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="NAME"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="EMAIL"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="CONTACT NO"
                    name="contactNo"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                  />
                </div>

                <div className="app-form-group message">
                  <input
                    className="app-form-control"
                    placeholder="MESSAGE"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="app-form-group buttons">
                  <button
                    className="app-form-button"
                    onClick={() => {
                      setName("");
                      setEmail("");
                      setContactNo("");
                      setMessage("");
                    }}
                  >
                    CANCEL
                  </button>
                  <button className="app-form-button" onClick={handleSubmit}>
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
