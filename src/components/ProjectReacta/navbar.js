import React, { useState } from 'react';

export default function Navbar() {
  const [hovered, setHovered] = useState(null);

  const linkStyle = (isHovered) => ({
    textDecoration: 'none',
    color: isHovered ? '#ffcc00' : 'white',
    transition: 'color 0.3s ease, transform 0.3s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  });

  return (
    <div style={{ fontFamily: 'Arial', width: '100%', margin: '0' }}>
      <nav
        style={{
          backgroundColor: '#6715cd',
          textAlign: 'center',
          display: 'flex',
          paddingTop: '20px',
          justifyContent: 'center',
          gap: '140px',
          width: '100%',
        }}
      >
        {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            style={linkStyle(hovered === index)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
}
