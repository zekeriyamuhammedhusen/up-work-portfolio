import React from 'react';
import { heroStats } from '../data/portfolioData';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-inner">
        <div>
          <div className="status-pill">
            <span className="ping"></span>Available for new projects
          </div>
          <h1>
            Building reliable web apps with the <span className="accent">MERN stack</span>.
          </h1>
          <p className="role-line">
            $ whoami → MERN Stack Developer based in Addis Ababa
            <span className="cursor"></span>
          </p>
          <p className="lead">
            I'm Zekeriya, a Computer Science graduate who builds RESTful APIs, responsive
            interfaces, and database-driven applications with MongoDB, Express, React, and
            Node.js. I write clean, maintainable code and communicate clearly — so your
            project stays on track from kickoff to delivery.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start a project →
            </a>
            <a href="#projects" className="btn btn-ghost">
              View my work
            </a>
          </div>
          <div className="hero-meta">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="num">{stat.num}</div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-card">
            <div className="titlebar">
              <span className="tdot r"></span>
              <span className="tdot y"></span>
              <span className="tdot g"></span>
              <span style={{ marginLeft: 8 }}>profile.jpg</span>
            </div>
            <img src="/resource/zak.jpg" alt="Zekeriya Muhammedhusen" />
            <div className="caption">
              <span className="k">role:</span> Junior Full Stack / MERN Developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
