import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <p>&copy; {currentYear} Prompt Market. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
