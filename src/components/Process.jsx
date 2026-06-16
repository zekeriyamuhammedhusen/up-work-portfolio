import React from 'react';
import { processSteps } from '../data/portfolioData';

function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="eyebrow-text">how I work</div>
        <h2 className="h-title">A simple, transparent process</h2>
        <p className="section-sub">
          Every project follows the same straightforward flow, so you always know what's
          happening and when.
        </p>
        <div className="process-list">
          {processSteps.map((step) => (
            <div className="process-step" key={step.num}>
              <span className="num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
