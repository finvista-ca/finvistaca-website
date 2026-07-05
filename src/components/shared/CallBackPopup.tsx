import React, { useState } from 'react';
import { Phone, X, CheckCircle2 } from 'lucide-react';
import './CallBackPopup.css';

export const CallBackPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://finvistaca-backend-ebon.vercel.app/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong');
      
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (err: any) {
      alert(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
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
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={3}></textarea>
                  <button type="submit" className="btn btn-primary btn-md" disabled={loading}>
                    {loading ? 'Submitting...' : 'Request Call Back'}
                  </button>
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
