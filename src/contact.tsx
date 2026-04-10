import { useState, useRef, useEffect, FormEvent, ChangeEvent } from "react";
import {
  Mail,
  Phone,
  Loader,
  Send,
  AlertTriangle,
  Check,
  CircleX,
  X,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./App.css";

// emailjs configuration from env file
const EMAILJS_SERVICE_ID: string =
  process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID: string =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY: string =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

// possible states of the message display
type MessageState = "success" | "error" | null;

function Contact() {
  // contact info use states
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [availability, setAvailability] = useState<string[]>(["", "", ""]);
  const [activeSlot, setActiveSlot] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // week offset for availability modal
  const [weekOffset, setWeekOffset] = useState<number>(0);

  // use effect for availability modal
  const [showAvailability, setShowAvailability] = useState<boolean>(false);
  const toggleAvailability = (index: number) => {
    setActiveSlot(index);
    setShowAvailability(true);
  };

  // helper to close availability modal and reset temporary state
  const closeAvailability = () => {
    setShowAvailability(false);
    setActiveSlot(null);
    setWeekOffset(0);
  };

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

  // sync temporary modal state with the "confirmed" availability state when opened
  useEffect(() => {
    if (showAvailability && activeSlot !== null) {
      const currentVal = availability[activeSlot];
      if (currentVal) {
        const [date, time] = currentVal.split(" @ ");
        setSelectedDate(date);
        setSelectedTime(time);
      } else {
        setSelectedDate("");
        setSelectedTime("");
      }
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showAvailability, activeSlot, availability]);

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
  const handleAvailabilityChange = (value: string) => {
    if (activeSlot !== null) {
      const newAvailability = [...availability];
      newAvailability[activeSlot] = value;
      setAvailability(newAvailability);
    }
  };
  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  // helper to generate the Mon-Fri dates for the current week
  const getCurrentWeek = () => {
    const week = [];
    const today = new Date();
    const startOfToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    const dayOfWeek = today.getDay();
    const monday = new Date(today);

    // Calculate Monday based on the current week + the offset (7 days * offset)
    const diff =
      today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1) + weekOffset * 7;
    monday.setDate(diff);

    for (let i = 0; i < 5; i++) {
      const nextDay = new Date(monday);
      nextDay.setDate(monday.getDate() + i);

      const compareDay = new Date(
        nextDay.getFullYear(),
        nextDay.getMonth(),
        nextDay.getDate(),
      );

      week.push({
        fullDate: nextDay.toISOString().split("T")[0],
        displayDate: nextDay.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        dayName: nextDay.toLocaleDateString("en-US", { weekday: "short" }),
        month: nextDay.toLocaleDateString("en-US", { month: "short" }),
        dateNum: nextDay.getDate(),
        isPast: compareDay < startOfToday,
      });
    }
    return week;
  };

  // helper to generate time slots from 10am to 6pm
  const getTimeSlots = () => {
    const slots = [];
    let current = new Date();
    current.setHours(10, 0, 0); // Start at 10:00 AM
    const end = 18; // 6:00 PM

    while (current.getHours() < end) {
      slots.push(
        current.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      );
      current.setMinutes(current.getMinutes() + 30);
    }
    return slots;
  };

  // email validation
  const validateEmail = (email: string): boolean => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // handle when the submit button clicked
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent the page reload

    const errors: string[] = [];
    let firstInvalidField: React.RefObject<
      HTMLInputElement | HTMLTextAreaElement
    > | null = null;

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
        availability: availability,
        message: message,
      },
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      // check for successful response
      if (response.ok && response.status === 200) {
        setStatusMessage(
          "Message Successfully Sent! Thank You for reaching out. We'll confirm a time with you shortly.",
        );
        setMessageState("success");
        // clear form fields on success
        setFname("");
        setLname("");
        setEmail("");
        setAvailability(["", "", ""]);
        setMessage("");
      } else {
        // display error message on failure
        const errorText = await response.text();
        console.log(
          EMAILJS_PUBLIC_KEY,
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
        );
        console.error("Email sending API error response:", errorText);
        setStatusMessage(
          `Message failed to send. Error: ${response.status}. Please check console.`,
        );
        setMessageState("error");
      }
    } catch (error) {
      // display error message on network or fetch error
      console.error("Network or Fetch error:", error);
      setStatusMessage(
        `Error! Could not connect to the service. Please check your internet connection and console.`,
      );
      setMessageState("error");
    } finally {
      setIsLoading(false);
      resetStatus(5000); // reset status after 5 seconds
    }
  };

  // determine status message style
  const getStatusStyle = (): string => {
    if (messageState === "success")
      return "status-message status-message-success";
    if (messageState === "error") return "status-message status-message-error";
    return "status-hidden";
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          Feel free to reach out via email, phone, or with the following form
          below!
        </p>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="contact-item">
          {/* <Mail className='contact-icon' /> */}
          <h3>
            Email:{" "}
            <a href="mailto:lzmlandscapingllc@gmail.com">
              lzmlandscapingllc@gmail.com
            </a>
          </h3>
        </div>
        <div className="contact-item">
          {/* <Phone className='contact-icon' /> */}
          <h3>
            Main Line: <a href="tel:+13602865237">360-286-5237</a>
          </h3>
        </div>
        <div className="contact-item">
          {/* <Phone className='contact-icon' /> */}
          <h3>
            Cell Phone: <a href="tel:+12538788759">253-878-8759</a>
          </h3>
        </div>
      </div>

      {/* Status Message Display */}
      <div className={getStatusStyle()}>
        <div className="flex items-center">
          {(messageState === "error" || messageState === "success") && (
            <>
              {messageState === "success" ? (
                <Check className="status-icon-success" />
              ) : (
                <AlertTriangle className="status-icon-error" />
              )}
            </>
          )}
          <h4 className="font-semibold">{statusMessage}</h4>
        </div>
      </div>

      {/* Error Messages */}
      {errorMessages.length > 0 && (
        <div className="error-list">
          <h4>
            <AlertTriangle className="alert-icon" /> Please correct the
            following errors:
          </h4>
          <ul>
            {errorMessages.map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact Form */}
      <form id="contact-form" onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-group">
          {/* First Name */}
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="First Name"
            onChange={handleFnameChange}
            value={fname}
            ref={fnameRef}
            disabled={isLoading}
          />
          {/* Last Name */}
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
            onChange={handleLnameChange}
            value={lname}
            ref={lnameRef}
            disabled={isLoading}
          />
        </div>
        {/* Email */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          onChange={handleEmailChange}
          value={email}
          ref={emailRef}
          disabled={isLoading}
        />

        {/* <div className="availability-container">
          <label htmlFor="availability">
            When are you available for an estimate? (Select up to 3 dates)
          </label>
          <div className="availability-row">
            {availability.map((value, index) => (
              <input
                key={index}
                type="datetime-local"
                onChange={(e) =>
                  handleAvailabilityChange(index, e.target.value)
                }
                value={value}
                ref={(el) => (availabilityRefs.current[index] = el)}
                disabled={isLoading}
                className="availability-field"
              />
            ))}
          </div>
        </div> */}
        {/* Message */}
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          onChange={handleMessageChange}
          value={message}
          ref={messageRef}
          rows={6}
          disabled={isLoading}
        ></textarea>
        <div className="availability-container">
          <label>
            Ready for an estimate? <br></br>(Select up to 3 options)
          </label>
          <div className="availability-buttons-row">
            {availability.map((slot, index) => (
              <button
                key={index}
                type="button"
                className={`open-availability-btn ${slot ? "has-value" : ""}`}
                onClick={() => toggleAvailability(index)}
              >
                <CalendarDays className="contact-icon" />
                {slot ? slot : `Option ${index + 1}`}
              </button>
            ))}
          </div>
        </div>
        {/* Submit Button */}
        <div className="submit-button-wrapper">
          <button type="submit" disabled={isLoading} className="submit-button">
            {isLoading ? (
              <>
                <Loader className="loader-icon" />
                Sending...
              </>
            ) : (
              <>
                <Send className="contact-icon" />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
      {showAvailability && (
        <div className="service-modal" onClick={closeAvailability}>
          <div
            className="service-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="close-button" onClick={closeAvailability}>
              <X />
            </div>

            <div className="calendar-modal-body">
              <h2 className="modal-title">Schedule an Appointment</h2>

              <div className="calendar-section">
                <h3>Select a Date</h3>
                <div className="week-navigation">
                  <button
                    type="button"
                    className="nav-arrow"
                    onClick={() => setWeekOffset((prev) => prev - 1)}
                    disabled={weekOffset === 0}
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <span className="week-label">
                    {weekOffset === 0 ? "This Week" : "Next Week"}
                  </span>

                  <button
                    type="button"
                    className="nav-arrow"
                    onClick={() => setWeekOffset((prev) => prev + 1)}
                    disabled={weekOffset === 1}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                <div className="week-grid">
                  {getCurrentWeek().map((day) => (
                    <button
                      key={day.fullDate}
                      type="button"
                      // Add 'disabled-date' class if the day has passed
                      className={`date-card ${selectedDate === day.displayDate ? "selected" : ""} ${
                        day.isPast ? "disabled-date" : ""
                      }`}
                      onClick={() => setSelectedDate(day.displayDate)}
                      // Technically disable the button
                      disabled={day.isPast}
                    >
                      <span className="day-name">{day.dayName}</span>
                      <span className="day-month">{day.month}</span>
                      <span className="day-num">{day.dateNum}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="time-section">
                <h3>Select a Time</h3>
                <div className="time-grid">
                  {getTimeSlots().map((time) => (
                    <button
                      key={time}
                      className={`time-slot ${selectedTime === time ? "selected" : ""}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="modal-footer-buttons">
                <button
                  className="confirm-availability-btn"
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => {
                    // commits selection to the specific active slot index
                    handleAvailabilityChange(
                      `${selectedDate} @ ${selectedTime}`,
                    );
                    closeAvailability();
                  }}
                >
                  <Check className="confirm-icon" />
                  Continue
                </button>
                <button
                  className="confirm-availability-btn"
                  disabled={
                    !selectedDate ||
                    !selectedTime ||
                    (activeSlot !== null && !availability[activeSlot])
                  }
                  onClick={() => {
                    setSelectedDate("");
                    setSelectedTime("");
                    handleAvailabilityChange("");
                    setActiveSlot(null);
                    closeAvailability();
                  }}
                >
                  <CircleX className="confirm-icon" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
