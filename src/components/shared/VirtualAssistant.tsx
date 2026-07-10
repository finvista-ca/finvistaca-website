import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, X, Phone, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import './VirtualAssistant.css';

export const VirtualAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setChatStep(0);
        setInputValue('');
      }, 300); // Wait for transition
    }
  }, [isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setChatStep(1);
    }
  };

  return (
    <div className="virtual-assistant-container" ref={chatRef}>
      {/* Chat Window */}
      <div className={`va-chat-window ${isOpen ? 'open' : ''}`}>
        <div className="va-header">
          <div>
            <h4>Finvista Virtual Assistant</h4>
            <p>How can we help you today?</p>
          </div>
          <button className="va-close-btn" onClick={() => setIsOpen(false)} aria-label="Close chat">
            <X size={20} />
          </button>
        </div>

        <div className="va-body">
          {/* Avatar and Welcome */}
          <div className="va-message-row">
            <div className="va-avatar">
              <Bot size={20} />
            </div>
            <div className="va-message">
              <p>Welcome to Finvista Chartered Accountants.</p>
              <p>I'm here to help you connect with our advisory team.</p>
            </div>
          </div>

          {/* User's sent message (if any) */}
          {chatStep === 1 && (
            <div className="va-message-row user">
              <div className="va-message user-message">
                <p>{inputValue}</p>
              </div>
            </div>
          )}

          {/* Final Response */}
          {chatStep === 1 && (
            <div className="va-message-row">
              <div className="va-avatar">
                <Bot size={20} />
              </div>
              <div className="va-message">
                <p>Thank you for contacting Finvista.</p>
                <p>For any information regarding taxation, registrations, audits, compliance, accounting services, financial advisory, or business consultation, please connect directly with our team.</p>
                <p>📞 9908285223</p>
                
                <div className="va-actions">
                  <a href="https://wa.me/919908285223" target="_blank" rel="noopener noreferrer" className="va-action-btn">
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                  <a href="tel:+919908285223" className="va-action-btn outline">
                    <Phone size={16} /> Call Now
                  </a>
                  <Link to="/contact" className="va-action-btn outline" onClick={() => setIsOpen(false)}>
                    <Calendar size={16} /> Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="va-footer">
          {chatStep === 0 ? (
            <form onSubmit={handleSend} className="va-input-group">
              <input
                type="text"
                placeholder="Ask your question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" disabled={!inputValue.trim()} aria-label="Send">
                <Send size={18} />
              </button>
            </form>
          ) : (
            <div className="va-end-note">
              This conversation has ended.<br/>Please contact our team using one of the options above.
            </div>
          )}
        </div>
      </div>

      {/* Floating Button */}
      <button 
        className={`va-fab ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open virtual assistant"
      >
        <div className="va-fab-icon">
          <Bot size={28} />
        </div>
        <div className="va-tooltip">Need Assistance?</div>
      </button>
    </div>
  );
};
