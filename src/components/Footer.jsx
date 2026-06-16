import React from 'react';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} Zekeriya Muhammedhusen — Built with care, one commit at a time.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;
