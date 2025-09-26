import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { Mail, Phone, Loader, Send, AlertTriangle } from 'lucide-react';
import './App.css';

// EmailJS configuration
const EMAILJS_SERVICE_ID: string = '';
const EMAILJS_TEMPLATE_ID: string = '';
const EMAILJS_PUBLIC_KEY: string = ''; 

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
      if (messageState === 'success') return 'bg-green-100 text-green-700 border-green-400';
      if (messageState === 'error') return 'bg-red-100 text-red-700 border-red-400';
      return 'hidden';
    };

  return (
		<div className='max-w-4xl mx-auto p-6 lg:p-10 bg-white shadow-2xl rounded-xl border border-gray-100'>
      <div className='text-center mb-10'>
        <h2 className='text-4xl font-extrabold text-gray-900 mb-2'>Contact Me</h2>
        <p className='text-lg text-gray-500'>
          Feel free to reach out via email, phone, or the form below!
        </p>
      </div>

      {/* Contact Info */}
      <div className='flex flex-col md:flex-row justify-center gap-6 mb-12 text-center'>
        <div className='flex items-center justify-center p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors'>
          <Mail className='w-5 h-5 text-indigo-600 mr-2' />
          <a href='mailto:aryse54@gmail.com' className='font-medium text-gray-700 hover:text-indigo-600'>aryse54@gmail.com</a>
        </div>
        <div className='flex items-center justify-center p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors'>
          <Mail className='w-5 h-5 text-indigo-600 mr-2' />
          <a href='mailto:RyseA@cwu.edu' className='font-medium text-gray-700 hover:text-indigo-600'>RyseA@cwu.edu (School)</a>
        </div>
        <div className='flex items-center justify-center p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors'>
          <Phone className='w-5 h-5 text-indigo-600 mr-2' />
          <a href='tel:+15099923778' className='font-medium text-gray-700 hover:text-indigo-600'>509-992-3778</a>
        </div>
      </div>

      {/* Status Message Display */}
      <div className={`p-4 mb-6 rounded-lg border text-sm ${messageState === null ? 'hidden' : 'block'} ${getStatusStyle()}`}>
        <div className='flex items-center'>
          {(messageState === 'error' || messageState === 'success') && 
            <AlertTriangle className={`w-5 h-5 mr-2 ${messageState === 'success' ? 'text-green-600' : 'text-red-600'}`} />
          }
          <p className='font-semibold'>{statusMessage}</p>
        </div>
      </div>
      
      {/* Error Messages */}
      {errorMessages.length > 0 && (
        <div className='bg-red-50 border border-red-300 text-red-700 p-4 rounded-lg mb-6 shadow-sm'>
          <h4 className='font-bold flex items-center mb-2'><AlertTriangle className='w-4 h-4 mr-2'/> Please correct the following errors:</h4>
          <ul className='list-disc list-inside text-sm'>
            {errorMessages.map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact Form */}
      <form id='contact-form' onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* First Name */}
          <input 
            type='text' 
            id='fname' 
            name='fname' 
            placeholder='First Name' 
            onChange={handleFnameChange} 
            value={fname} 
            ref={fnameRef}
            className='p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm'
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
            className='p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm'
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
          className='w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm'
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
          className='w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm resize-none'
          disabled={isLoading}
        ></textarea>

        {/* Submit Button */}
        <div className='text-center'>
          <button 
            type='submit' 
            disabled={isLoading}
            className='inline-flex items-center justify-center w-full md:w-auto px-8 py-3 border border-transparent text-base font-bold rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-200 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isLoading ? (
              <>
                <Loader className='animate-spin w-5 h-5 mr-3' />
                Sending...
              </>
          ) : (
              <>
                <Send className='w-5 h-5 mr-3' />
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