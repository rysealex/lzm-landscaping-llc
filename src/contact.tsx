import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { Mail, Phone, Loader, Send, AlertTriangle } from 'lucide-react';
import './App.css';

// emailjs configuration from env file
const EMAILJS_SERVICE_ID: string = process.env.EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID: string = process.env.EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY: string = process.env.EMAILJS_PUBLIC_KEY || '';

// possible states of the message display
type MessageState = 'success' | 'error' | null;

function Contact() {

  // contact info use states
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // contact info use refs
  const fnameRef = useRef<HTMLInputElement>(null);
  const lnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // error messages use state
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  // message state use state
  const [messageState, setMessageState] = useState<MessageState>(null);

  // status message use state
  const [statusMessage, setStatusMessage] = useState<string>("");

  // is loading use state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // helper to reset status message after a delay
  const resetStatus = (delay: number = 5000) => {
    setTimeout(() => {
      setMessageState(null);
      setStatusMessage("");
    }, delay);
  };

  // event handlers to update state variables
  const handleFnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFname(event.target.value);
  };
  const handleLnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLname(event.target.value);
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  // email validation
    const validateEmail = (email: string): boolean => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

  // handle when the submit button clicked
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent the page reload

    const errors: string[] = [];
    let firstInvalidField: React.RefObject<HTMLInputElement | HTMLTextAreaElement> | null = null;

    // check if any information is empty
    if (fname === "") {
      errors.push("Please enter your first name");
      if (!firstInvalidField) firstInvalidField = fnameRef;
    }
    if (lname === "") {
      errors.push("Please enter your last name");
      if (!firstInvalidField) firstInvalidField = lnameRef;
    }
    if (email === "") {
      errors.push("Please enter your email address");
      if (!firstInvalidField) firstInvalidField = emailRef;
    } else if (!validateEmail(email)) {
      errors.push("Please enter a valid email address");
      if (!firstInvalidField) firstInvalidField = emailRef;
    }
    if (message === "") {
      errors.push("Please enter your message");
      if (!firstInvalidField) firstInvalidField = messageRef;
    }

    // apply focus to the first invalid field
    if (firstInvalidField && firstInvalidField.current) {
      firstInvalidField.current.focus();
    }

    // Check for errors
    if (errors.length > 0) {
      setErrorMessages(errors);
      setMessageState(null);
      setStatusMessage("");
      return;
    }

    // clear previous errors and start sending process
    setErrorMessages([]);
    setIsLoading(true);
    setStatusMessage("");
    setMessageState(null);

    // construct the payload for the EmailJS API
    const payload = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        fname: fname,
        lname: lname,
        email: email,
        message: message
      }
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // check for successful response
      if (response.ok && response.status === 200) {
        setStatusMessage("Message Successfully Sent! Thank You for reaching out.");
        setMessageState('success');
        // clear form fields on success
        setFname("");
        setLname("");
        setEmail("");
        setMessage("");
      } else {
        // display error message on failure
        const errorText = await response.text();
        console.error("Email sending API error response:", errorText);
        setStatusMessage(`Message failed to send. Error: ${response.status}. Please check console.`);
        setMessageState('error');
      }

      } catch (error) {
        // display error message on network or fetch error
        console.error("Network or Fetch error:", error);
        setStatusMessage(`Error! Could not connect to the service. Please check your internet connection and console.`);
        setMessageState('error');

      } finally {
        setIsLoading(false); 
        resetStatus(5000); // reset status after 5 seconds
      }
    }

    // determine status message style
    const getStatusStyle = (): string => {
      if (messageState === 'success') return 'status-message status-message-success';
      if (messageState === 'error') return 'status-message status-message-error';
      return 'status-hidden';
    };

  return (
		<div className='contact-container'>
      <div className='contact-header'>
        <h2>Contact Us</h2>
        <p>
          Feel free to reach out via email, phone, or the form below!
        </p>
      </div>

      {/* Contact Info */}
      <div className='contact-info'>
        <div className='contact-item'>
          <Mail className='contact-icon' />
          <a href=''>email@email.com</a>
        </div>
        <div className='contact-item'>
          <Phone className='contact-icon' />
          <a href='tel:+'>123-456-7890</a>
        </div>
      </div>

      {/* Status Message Display */}
      <div className={getStatusStyle()}>
        <div className='flex items-center'>
          {(messageState === 'error' || messageState === 'success') && 
            <AlertTriangle className={`w-5 h-5 mr-2 ${messageState === 'success' ? 'status-icon-success' : 'status-icon-error'}`} />
          }
          <h4 className='font-semibold'>{statusMessage}</h4>
        </div>
      </div>
      
      {/* Error Messages */}
      {errorMessages.length > 0 && (
        <div className='error-list'>
          <h4><AlertTriangle className='alert-icon'/> Please correct the following errors:</h4>
          <ul>
            {errorMessages.map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact Form */}
      <form id='contact-form' onSubmit={handleSubmit} className='contact-form'>
        <div className='contact-form-group'>
          {/* First Name */}
          <input 
            type='text' 
            id='fname' 
            name='fname' 
            placeholder='First Name' 
            onChange={handleFnameChange} 
            value={fname} 
            ref={fnameRef}
            disabled={isLoading}
          />
          {/* Last Name */}
          <input 
            type='text' 
            id='lname' 
            name='lname'
            placeholder='Last Name' 
            onChange={handleLnameChange} 
            value={lname} 
            ref={lnameRef}
            disabled={isLoading}
          />
        </div>
        {/* Email */}
        <input 
          type='email' 
          id='email' 
          name='email'
          placeholder='Email Address' 
          onChange={handleEmailChange} 
          value={email} 
          ref={emailRef}
          disabled={isLoading}
        />
        {/* Message */}
        <textarea 
          id='message' 
          name='message'
          placeholder='Your Message' 
          onChange={handleMessageChange} 
          value={message} 
          ref={messageRef}
          rows={6}
          disabled={isLoading}
        ></textarea>


        {/* Submit Button */}
        <div className='submit-button-wrapper'>
          <button 
            type='submit' 
            disabled={isLoading}
            className='submit-button'
          >
            {isLoading ? (
              <>
                <Loader className='loader-icon' />
                Sending...
              </>
          ) : (
              <>
                <Send className='contact-icon' />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
  </div>
	);
};

export default Contact;