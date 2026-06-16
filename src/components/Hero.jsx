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
            Hi, I'm <span className="accent">Zekeriya Muhammedhusen </span> 
              I am <p className="role-line">MERN Stack Developer</p>
          </h1>

          <h5>
            Building reliable web apps with <span className="accent">MERN stack</span>.
          </h5>
        
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
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
