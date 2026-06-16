import React from 'react';
import { aboutInfo } from '../data/portfolioData';

function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div>
          <div className="eyebrow-text">about</div>
          <h2 className="h-title">A bit about how I work</h2>
          <p>
            I'm a <strong>Computer Science graduate from Wollo University</strong> with a
            strong focus on full-stack web development using the MERN stack — MongoDB,
            Express.js, React.js, and Node.js.
          </p>
          <p>
            I enjoy turning requirements into working software: designing RESTful APIs,
            structuring databases, and building responsive interfaces that feel smooth to
            use. My projects so far include an <strong>inventory management system</strong>,
            a full-stack <strong>CRUD application</strong>, and a{' '}
            <strong>learning management platform</strong> with authentication and
            role-based access control.
          </p>
          <p>
            As a junior developer, I bring fresh focus, fast turnaround, and a genuine
            eagerness to get the details right — and I keep clients updated at every step
            so there are no surprises.
          </p>
        </div>
        <div className="info-card">
          {aboutInfo.map((item) => (
            <div className="row" key={item.k}>
              <span className="k">{item.k}</span>
              <span className={`v ${item.accent ? 'accent' : ''}`}>{item.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
