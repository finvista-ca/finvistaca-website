import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: "Finvista transformed our financial operations. Their expertise in GST compliance and corporate tax planning has saved us significant resources.",
    author: "Rajesh Kumar",
    role: "Director",
    company: "TechNova Solutions"
  },
  {
    id: 2,
    quote: "The level of professionalism and the modern approach they bring to traditional accounting is refreshing. Their advisory services have been invaluable for our expansion.",
    author: "Client Testimonial",
    role: "CEO",
    company: "Technology Client"
  },
  {
    id: 3,
    quote: "We've been with them for over 5 years. Their proactive alerts on compliance due dates mean we never have to worry about penalties.",
    author: "Client Testimonial",
    role: "Founder",
    company: "Retail Client"
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
                  <p>{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
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
