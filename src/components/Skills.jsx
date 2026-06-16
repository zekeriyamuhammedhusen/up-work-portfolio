import React from 'react';
import { skills } from '../data/portfolioData';

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow-text">tech stack</div>
        <h2 className="h-title">Tools &amp; technologies</h2>
        <p className="section-sub">
          The core stack I build with day to day, plus the tools that keep projects
          organized and shippable.
        </p>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-card" key={category}>
              <h3>{category}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
