import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import "../styles/ContactForm.css";
import "../styles/About.css";

import { validateEmail } from "./utils/helpers";

function ContactForm() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [comment, setComment] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === "email") {
        setEmail(inputValue);
      } else if (inputType === "userName") {
        setUserName(inputValue);
      } else {
        setComment(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      
      if (!validateEmail(email) || !userName) {
        setErrorMessage("Email or username is invalid");
        return;
      }
      
      alert(`Hello ${userName}. `);
      setUserName("");
      setComment("");
      setEmail("");
    };
  
    return (
      <div>
        <p>
          Hello{userName}! Please add your contact information if you'd like more
          info.
        </p>
        <form className="form">
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <br />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            value={comment}
            name="comment"
            onChange={handleInputChange}
            type="comment"
            placeholder="Comment? Question?"
          />
          <br />
          <br />
          {/* <Button onClick={handleFormSubmit}>Submit </Button> */}
          <button type="button" variant="contained" color="primary" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
  }
  
  export default ContactForm;