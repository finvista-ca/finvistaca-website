import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: "My experience with Finvista has been great, super supportive and helpful, always guided me well. My process went through so easily without any haste. I am super grateful to have met them.",
    author: "Harjeet Singh",
    role: "Verified Client"
  },
  {
    id: 2,
    quote: "Keeping up with the constant changes in the legal and taxation environment is becoming harder by the day. Thanks to the super dynamic team, all my tax returns were filed smoothly. I don't have to worry about timely and correct filing, investment planning, digital compliances or representations. I am completely satisfied with their services.",
    author: "Rohit",
    role: "Verified Client"
  },
  {
    id: 3,
    quote: "For the last 3 years I have been filing my ITR returns with them. They are very helpful and cooperative, they explained me each and everything about ITR filing and provided excellent service. Highly recommended.",
    author: "Kuldeep",
    role: "Verified Client"
  },
  {
    id: 4,
    quote: "It was indeed a great experience to come in contact with the whole team. They are super excellent and very efficient in their work. I certainly recommend others to try out their services. Thank you for your great teamwork and attention to detail.",
    author: "Bharat",
    role: "Verified Client"
  },
  {
    id: 5,
    quote: "Excellent customer service and timely resolution of all queries. Very polite and nice to work with. Definitely knows the business. Highly recommended.",
    author: "Shivani",
    role: "Verified Client"
  },
  {
    id: 6,
    quote: "I had the pleasure of working with them for our financial needs, and I can confidently say they are top-notch. From the moment I engaged their services, their expertise and professionalism were evident. Highly recommended for financial consulting and tax return services.",
    author: "Karan",
    role: "Verified Client"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section testimonials-section bg-light">
      <div className="container">
        <div className="testimonials-layout">
          <div className="testimonials-header">
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-subtitle">
              Don't just take our word for it. Hear from the businesses we've helped grow.
            </p>
            
            <div className="carousel-controls">
              <button onClick={prev} className="carousel-btn" aria-label="Previous testimonial">
                <ChevronLeft size={24} />
              </button>
              <button onClick={next} className="carousel-btn" aria-label="Next testimonial">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="testimonials-carousel">
            <div className="testimonial-card">
              <Quote className="quote-icon" size={48} />
              <p className="testimonial-text">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{testimonials[currentIndex].author}</h4>
                  <p>{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
