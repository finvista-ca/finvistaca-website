import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Phone, MessageCircle, Calendar, RefreshCcw, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import './VirtualAssistant.css';

type Sender = 'bot' | 'user';

interface Message {
  id: string;
  sender: Sender;
  type: 'text' | 'options' | 'actions' | 'followup';
  content?: string | React.ReactNode;
  options?: string[];
  actionData?: {
    serviceName: string;
    phone: string;
    list: string[];
    waMessage: string;
  };
}

const INITIAL_MESSAGE: Message = {
  id: 'msg-0',
  sender: 'bot',
  type: 'text',
  content: (
    <>
      <p>👋 Hello!</p>
      <p>Welcome to Finvista Chartered Accountants.</p>
      <p>Type "Hi", "Hello", or "Hey" to begin.</p>
    </>
  )
};

const OPTIONS_INTRO: Message = {
  id: 'msg-opt-intro',
  sender: 'bot',
  type: 'text',
  content: (
    <>
      <p>Hello! 👋</p>
      <p>It's great to have you here.</p>
      <p>I'd be happy to help you.</p>
      <p>Which category are you looking for today?</p>
    </>
  )
};

const OPTIONS_MESSAGE: Message = {
  id: 'msg-opt',
  sender: 'bot',
  type: 'options',
  options: [
    '1️⃣ Direct Taxation',
    '2️⃣ Goods & Services Tax (GST)',
    '3️⃣ ROC Compliance',
    '4️⃣ Business Registration & Other Services'
  ]
};

const INVALID_INPUT_MESSAGE: Message = {
  id: 'msg-invalid',
  sender: 'bot',
  type: 'text',
  content: (
    <>
      <p>👋 Welcome!</p>
      <p>Please type "Hi", "Hello", or "Hey" to begin our conversation.</p>
    </>
  )
};

const SERVICE_DATA: Record<string, { title: string; phone: string; list: string[]; intro: string; waMessage: string }> = {
  '1️⃣ Direct Taxation': {
    title: 'Direct Taxation',
    phone: '8340814350',
    intro: 'Our Direct Tax experts can assist you with:',
    list: ['Income Tax Filing', 'Tax Planning', 'Tax Notices', 'Assessments', 'Advisory', 'Compliance'],
    waMessage: 'Hello Finvista,\nI need assistance regarding Direct Taxation.'
  },
  '2️⃣ Goods & Services Tax (GST)': {
    title: 'GST',
    phone: '7993856920',
    intro: 'Our GST experts can assist you with:',
    list: ['GST Registration', 'GST Returns', 'GST Notices', 'GST Audit', 'GST Compliance', 'Advisory'],
    waMessage: 'Hello Finvista,\nI need assistance regarding GST.'
  },
  '3️⃣ ROC Compliance': {
    title: 'ROC Compliance',
    phone: '9908285223',
    intro: 'Our ROC specialists can assist you with:',
    list: ['Annual Filings', 'Company Compliance', 'Director Changes', 'LLP Compliance', 'ROC Notices'],
    waMessage: 'Hello Finvista,\nI need assistance regarding ROC Compliance.'
  },
  '4️⃣ Business Registration & Other Services': {
    title: 'Business Registration',
    phone: '9581439002',
    intro: 'Our consultants can assist you with:',
    list: ['Proprietorship Registration', 'Partnership Firm', 'LLP Registration', 'Private Limited Company', 'MSME Registration', 'Startup Registration', 'NGO Registration', 'PAN/TAN', 'Digital Signature', 'Loan Advisory', 'Other Business Services'],
    waMessage: 'Hello Finvista,\nI need assistance regarding Business Registration.'
  }
};

export const VirtualAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [inputValue, setInputValue] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen, showInput]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const val = inputValue.trim();
    if (!val) return;

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', type: 'text', content: val };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const lowerVal = val.toLowerCase();
    const isValid = lowerVal === 'hi' || lowerVal === 'hello' || lowerVal === 'hey';

    setTimeout(() => {
      setIsTyping(false);
      
      if (isValid) {
        setShowInput(false);
        const introMsg = { ...OPTIONS_INTRO, id: (Date.now() + 1).toString() };
        const optMsg = { ...OPTIONS_MESSAGE, id: (Date.now() + 2).toString() };
        setMessages(prev => [...prev, introMsg, optMsg]);
      } else {
        const invalidMsg = { ...INVALID_INPUT_MESSAGE, id: (Date.now() + 1).toString() };
        setMessages(prev => [...prev, invalidMsg]);
      }
    }, 1000);
  };

  const handleOptionClick = (option: string) => {
    // Remove the options message so they don't pile up
    const newMessages = messages.filter(m => m.type !== 'options');
    
    // Add user message
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', type: 'text', content: option };
    setMessages([...newMessages, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const data = SERVICE_DATA[option];
      
      const botText: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        type: 'text',
        content: data.intro
      };
      
      const botActions: Message = {
        id: (Date.now() + 2).toString(),
        sender: 'bot',
        type: 'actions',
        actionData: { serviceName: data.title, phone: data.phone, list: data.list, waMessage: data.waMessage }
      };

      const followup: Message = {
        id: (Date.now() + 3).toString(),
        sender: 'bot',
        type: 'followup',
        content: 'Is there anything else I can help you with?'
      };

      setMessages(prev => [...prev, botText, botActions, followup]);
    }, 1000);
  };

  const handleBackToServices = () => {
    const newMessages = messages.filter(m => m.type !== 'followup');
    
    // Add user message "Choose Another Category"
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', type: 'text', content: 'Choose Another Category' };
    setMessages([...newMessages, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      const optionsMsg: Message = {
        ...OPTIONS_MESSAGE,
        id: (Date.now() + 1).toString()
      };

      setMessages(prev => [...prev, optionsMsg]);
    }, 800);
  };

  const renderMessageContent = (msg: Message) => {
    if (msg.type === 'text') {
      const isString = typeof msg.content === 'string';
      return (
        <div className={`va-message ${msg.sender === 'user' ? 'user-message' : ''}`}>
          {isString ? (msg.content as string).split('\n').map((line, i) => <p key={i}>{line}</p>) : msg.content}
        </div>
      );
    }
    
    if (msg.type === 'options' && msg.options) {
      return (
        <div className="va-options-grid">
          {msg.options.map((opt, idx) => (
            <button key={idx} className="va-option-btn" onClick={() => handleOptionClick(opt)}>
              {opt}
            </button>
          ))}
        </div>
      );
    }

    if (msg.type === 'actions' && msg.actionData) {
      const { phone, list, waMessage } = msg.actionData;
      const waUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(waMessage)}`;
      const callUrl = `tel:+91${phone}`;

      return (
        <div className="va-message bot-actions-msg">
          <ul className="va-service-list">
            {list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <div className="va-contact-prompt">
            <p>For further assistance, please contact:</p>
            <p className="va-phone-display">📞 +91 {phone}</p>
          </div>
          <div className="va-actions-row">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="va-action-btn primary">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
            <a href={callUrl} className="va-action-btn outline">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      );
    }

    if (msg.type === 'followup') {
      return (
        <div className="va-followup">
          <p className="va-followup-text">{msg.content}</p>
          <div className="va-followup-actions">
            <button className="va-option-btn small outline" onClick={handleBackToServices}>
              <RefreshCcw size={14} /> Choose Another Category
            </button>
            <Link to="/contact" className="va-option-btn small primary" onClick={() => setIsOpen(false)}>
              <Calendar size={14} /> Book Consultation
            </Link>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="virtual-assistant-container" ref={chatRef}>
      <div className={`va-chat-window ${isOpen ? 'open' : ''}`}>
        <div className="va-header">
          <div className="va-header-info">
            <div className="va-header-avatar">
              <Bot size={20} />
              <div className="online-indicator"></div>
            </div>
            <div>
              <h4>Finvista Assistant</h4>
              <p>Typically replies instantly</p>
            </div>
          </div>
          <button className="va-close-btn" onClick={() => setIsOpen(false)} aria-label="Close chat">
            <X size={20} />
          </button>
        </div>

        <div className="va-body">
          {messages.map(msg => (
            <div key={msg.id} className={`va-message-row ${msg.sender === 'user' ? 'user' : ''}`}>
              {msg.sender === 'bot' && (
                <div className="va-avatar">
                  <Bot size={16} />
                </div>
              )}
              {renderMessageContent(msg)}
            </div>
          ))}

          {isTyping && (
            <div className="va-message-row">
              <div className="va-avatar">
                <Bot size={16} />
              </div>
              <div className="va-message typing">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {showInput && (
          <div className="va-footer">
            <form onSubmit={handleSend} className="va-input-group">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" disabled={!inputValue.trim()} aria-label="Send">
                <Send size={18} />
              </button>
            </form>
          </div>
        )}
      </div>

      <button 
        className={`va-fab ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open virtual assistant"
      >
        <div className="va-fab-icon">
          <Bot size={28} />
          <div className="online-indicator-large"></div>
        </div>
        <div className="va-tooltip">Need Assistance?</div>
      </button>
    </div>
  );
};
