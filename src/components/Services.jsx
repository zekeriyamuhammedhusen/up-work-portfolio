import React from 'react';
import { services } from '../data/portfolioData';

function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <p className="eyebrow-text">services</p>
        <h2 className="h-title">What I can build for you</h2>
        <p className="section-sub">
          Whether you need a full application from scratch, a new feature on an existing
          codebase, or an API your frontend can rely on — here's where I can help.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="si">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
