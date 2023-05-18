import React, { useState } from 'react';
import { checkContent, validateEmail } from '../utils/helpers';
import '../../styles/Contact.css'

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [textarea, setTextarea] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setTextarea(inputValue);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return ;
    }
    if (!checkContent(textarea)) {
      setErrorMessage(
        `Please write a message: ${userName}`
      );
      return;
    }
    alert(`Thanks for the Message ${userName}`);
    setUserName('');
    setEmail('');
    setTextarea('');
    setErrorMessage('');
  };

  return (
    <div className='container-contact'>
    <div className='container-form'>
      <h3 className='heading-form'>Contact Me!</h3>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Username"
        />
        <textarea
        className='textarea'
        value={textarea}
          name="textarea"
          onChange={handleInputChange}
          type="text"
          placeholder="Your message"
         >
          Please write your message
          </textarea>
        <button className='submitButton btn-primary btn' type="submit" onClick={handleContactSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div className='errorMessage' >
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default Contact;
