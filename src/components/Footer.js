import React from 'react';

export default function Footer({ onClose, isVisible }) {
  return (
    <footer id="footer" className={`panel ${isVisible ? 'active' : ''}`}>
      <div className="inner">
        <div>
          <section>
            <p>Copyright © 2019 Jonathan Eom<br/><strong>photos</strong> by <a href="https://github.com/jonnyeom">jonnyeom</a></p>
          </section>
        </div>
      </div>
      <div
        className="closer"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
      />
    </footer>
  );
}
