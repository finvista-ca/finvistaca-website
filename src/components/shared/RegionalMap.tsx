import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import mapData from '../../data/mapData.json';
import './RegionalMap.css';

interface BranchInfo {
  name: string;
  isHeadOffice?: boolean;
  address: string;
  leaderClass: string;
}

const branches: Record<string, BranchInfo> = {
  "Bobbili": { name: "Bobbili", address: "33-105, Near Sai Ganapathi Theatre", leaderClass: "leader-left-up" },
  "Kakinada": { name: "Kakinada", address: "2nd Floor, Sai Complex", leaderClass: "leader-right-down" },
  "Visakhapatnam": { name: "Visakhapatnam", address: "D.No 47-10-14, 2nd Floor", leaderClass: "leader-right-up" },
  "Vijayawada": { name: "Vijayawada (Head Office)", isHeadOffice: true, address: "76-43-399, HIG-399, Ground Floor, H. B. Colony, Bhavanipuram", leaderClass: "leader-right-down" },
  "Hyderabad": { name: "Hyderabad", address: "Flat No 201, 2nd Floor", leaderClass: "leader-left-down" },
  "Parvathipuram": { name: "Parvathipuram", address: "Main Road", leaderClass: "leader-right-up" },
  "Peddapuram": { name: "Peddapuram", address: "21-1-19/A, 1st Floor", leaderClass: "leader-left-down" },
  "Rayagada": { name: "Rayagada (Odisha)", address: "Indira Nagar, 3rd Lane", leaderClass: "leader-left-up" }
};

export const RegionalMap: React.FC = () => {
  const { paths, markers } = mapData as any;

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0, fillOpacity: 0 },
    visible: { 
      pathLength: 1, 
      fillOpacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const mutedPathVariants = {
    hidden: { pathLength: 0, fillOpacity: 0 },
    visible: { 
      pathLength: 1, 
      fillOpacity: 0.12,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const pinVariants = {
    hidden: { opacity: 0, scale: 0, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  };

  const labelVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const routeLineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.4, 
      transition: { duration: 2, delay: 2.5, ease: "easeInOut" }
    }
  };

  // Build the route connection polyline string
  // Route: Bobbili -> Parvathipuram -> Visakhapatnam -> Peddapuram -> Kakinada -> Vijayawada
  const routeOrder = ["Bobbili", "Parvathipuram", "Visakhapatnam", "Peddapuram", "Kakinada", "Vijayawada"];
  const routePoints = routeOrder.map(city => `${markers[city].left.replace('%', '')},${markers[city].top.replace('%', '')}`);

  return (
    <div className="regional-map-container">
      {/* Map Ocean Background */}
      <div className="map-ocean" />

      {/* Map Title Overlay */}
      <motion.div 
        className="map-title-overlay"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2>Regional Presence</h2>
        <div className="map-stats">
          <span className="highlight">8</span> Offices<br/>
          Across <span className="highlight">3</span> States
        </div>
      </motion.div>

      <motion.div 
        className="regional-map-wrapper"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <svg className="regional-base-map" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="glow-border" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            {/* Gradients to apply subtle lighting */}
            <linearGradient id="ap-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B2A3A" />
              <stop offset="100%" stopColor="#14202D" />
            </linearGradient>
            <linearGradient id="tg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#223246" />
              <stop offset="100%" stopColor="#1A2635" />
            </linearGradient>
            <linearGradient id="od-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E2F40" />
              <stop offset="100%" stopColor="#15222E" />
            </linearGradient>
          </defs>

          {/* Muted Context States */}
          <g className="muted-states" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="#182231">
            {paths['Karnataka'] && <motion.path d={paths['Karnataka']} variants={mutedPathVariants} />}
            {paths['Tamil Nadu'] && <motion.path d={paths['Tamil Nadu']} variants={mutedPathVariants} />}
            {paths['Chhattisgarh'] && <motion.path d={paths['Chhattisgarh']} variants={mutedPathVariants} />}
          </g>

          {/* Core States */}
          <g className="core-states" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" filter="url(#glow-border)">
            {paths['Odisha'] && <motion.path d={paths['Odisha']} fill="url(#od-grad)" variants={pathVariants} />}
            {paths['Telangana'] && <motion.path d={paths['Telangana']} fill="url(#tg-grad)" variants={pathVariants} />}
            {paths['Andhra Pradesh'] && <motion.path d={paths['Andhra Pradesh']} fill="url(#ap-grad)" variants={pathVariants} />}
          </g>

          {/* Animated Route Lines */}
          {/* Note: In SVG, coordinates are typically absolute, but since we have percentage-based marker placements, 
              we can draw an SVG line using absolute pixel coordinates matching the 800x800 viewBox. 
              The markers object actually has percentage strings (e.g. "50.00%"), so we parse them to pixels for the SVG viewBox. */}
          <motion.polyline 
            points={routeOrder.map(city => `${parseFloat(markers[city].left) * 8},${parseFloat(markers[city].top) * 8}`).join(' ')}
            fill="none"
            stroke="rgba(14, 165, 233, 0.6)"
            strokeWidth="2"
            strokeDasharray="4 6"
            filter="url(#route-glow)"
            variants={routeLineVariants}
            className="route-line"
          />
        </svg>

        {/* Interactive Map Pins */}
        <div className="map-pins-layer">
          {Object.entries(markers).map(([cityKey, coords]) => {
            const branch = branches[cityKey];
            if (!branch) return null;
            
            const isHead = branch.isHeadOffice;
            const markerColor = isHead ? "#C8A45D" : "#10b981"; // Gold vs Cyan/Green

            return (
              <motion.div 
                key={cityKey}
                className={`map-pin-wrapper ${isHead ? 'is-head-office' : ''}`} 
                style={{ top: (coords as any).top, left: (coords as any).left }}
                variants={pinVariants}
              >
                {/* Marker Pulse */}
                <div 
                  className={`pin-pulse ${isHead ? 'pulse-large' : 'pulse-small'}`} 
                  style={{ backgroundColor: markerColor }}
                />
                
                {/* Marker Dot */}
                <div className="map-pin" style={{ backgroundColor: markerColor, boxShadow: `0 0 ${isHead ? '15px' : '8px'} ${markerColor}` }}>
                  {isHead ? <MapPin size={16} color="#101826" strokeWidth={3} /> : <div className="inner-dot" />}
                </div>

                {/* Bloomberg-style Label with Leader Line */}
                <motion.div className={`pin-label-container ${branch.leaderClass}`} variants={labelVariants}>
                  <div className="leader-line"></div>
                  <div className="bloomberg-label">
                    <span className="label-title">{branch.name}</span>
                    <div className="label-tooltip">
                      <p>{branch.address}</p>
                      <span className="view-link">View Office <ArrowRight size={12} /></span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
