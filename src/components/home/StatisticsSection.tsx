import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import './StatisticsSection.css';

const stats = [
  { label: 'Transactions Assisted', value: 500, prefix: '₹', suffix: 'Cr+' },
  { label: 'Businesses Served', value: 1000, prefix: '', suffix: '+' },
  { label: 'Compliance Accuracy', value: 98, prefix: '', suffix: '%' },
  { label: 'Years Experience', value: 15, prefix: '', suffix: '+' }
];

const Counter = ({ from, to }: { from: number, to: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      if (node) {
        const controls = animate(from, to, {
          duration: 2,
          ease: "easeOut",
          onUpdate(value) {
            node.textContent = Math.round(value).toString();
          }
        });
        return () => controls.stop();
      }
    }
  }, [from, to, inView]);

  return <span ref={nodeRef} />;
};

export const StatisticsSection: React.FC = () => {
  return (
    <section className="section stats-section bg-grid">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-number-wrapper">
                <span className="stat-suffix">{stat.prefix}</span>
                <span className="stat-number">
                  <Counter from={0} to={stat.value} />
                </span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label-text">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
