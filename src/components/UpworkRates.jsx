import React from 'react';
import { upworkInfo, portfolioMeta } from '../data/portfolioData';
import { FaClock, FaCheckCircle, FaDollarSign, FaGlobe } from 'react-icons/fa';
import '../styles/UpworkRates.css';

const iconMap = {
  '💰': <FaDollarSign className="rate-icon" />,
  '✅': <FaCheckCircle className="rate-icon" />,
  '⚡': <FaClock className="rate-icon" />,
  '🌍': <FaGlobe className="rate-icon" />,
};

function UpworkRates() {
  return (
    <section className="upwork-rates-section" id="upwork">
      <div className="rates-container">
        <div className="rates-header">
          <h2>Let's Work Together</h2>
          <p>Available for immediate hire on Upwork</p>
        </div>

        <div className="rates-grid">
          {upworkInfo.map((info, index) => (
            <div key={index} className="rate-card">
              <div className="rate-icon-wrapper">
                {iconMap[info.icon] || <span className="icon-text">{info.icon}</span>}
              </div>
              <div className="rate-content">
                <h3>{info.label}</h3>
                <p>{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rates-cta">
          <a
            href={portfolioMeta.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button upwork-btn"
          >
            View on Upwork
          </a>
          <a href={`mailto:${portfolioMeta.email}`} className="cta-button email-btn">
            Contact via Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default UpworkRates;
