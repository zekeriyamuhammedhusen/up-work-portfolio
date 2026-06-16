import React, { useState } from 'react';
import { portfolioMeta } from '../data/portfolioData';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'Process' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header>
      <nav className="nav">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src="/resource/images.png" alt="zekeriya" className="brand-logo" />
        </a>
        <ul className={`nav-links ${open ? 'active' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a 
          href={portfolioMeta.upwork} 
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Hire Me
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
