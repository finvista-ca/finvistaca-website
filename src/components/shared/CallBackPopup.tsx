import React, { useState } from 'react';
import { Phone, X, CheckCircle2 } from 'lucide-react';
import './CallBackPopup.css';

export const CallBackPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const close = () => {
    setOpen(false);
    // reset after the closing animation
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <>
      <button className="callback-fab" onClick={() => setOpen(true)} aria-label="Get a call back">
        <Phone size={18} />
        <span>Get a Call Back</span>
      </button>

      {open && (
        <div className="callback-overlay" onClick={close}>
          <div className="callback-modal" onClick={(e) => e.stopPropagation()}>
            <button className="callback-close" onClick={close} aria-label="Close">
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <h3 className="callback-title">Get In Touch</h3>
                <p className="callback-sub">Leave your details and our team will call you back shortly.</p>
                <form className="callback-form" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Full Name" required />
                  <input type="tel" placeholder="Phone Number" required />
                  <input type="email" placeholder="Email Address" />
                  <textarea placeholder="How can we help you?" rows={3}></textarea>
                  <button type="submit" className="btn btn-primary btn-md">Request Call Back</button>
                </form>
              </>
            ) : (
              <div className="callback-success">
                <CheckCircle2 size={48} className="callback-success-icon" />
                <h3 className="callback-title">Thank you!</h3>
                <p className="callback-sub">
                  Your request has been received. Our team will get in touch with you soon.
                  For urgent queries call <a href="tel:+918143505094">+91 8143505094</a>.
                </p>
                <button className="btn btn-secondary btn-md" onClick={close}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
