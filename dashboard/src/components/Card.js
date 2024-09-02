import React from 'react';

const Card = ({ title, mainContent, subContent, description, buttonText, style, children }) => {
  return (
    <div
      style={{
        width: '204px', // Default width, can be overridden by style prop
        height: '136px', // Default height, can be overridden by style prop
        borderRadius: '10px',
        backgroundColor: '#ffffff', // Default background color
        padding: '12px 20px', // Internal padding
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Light shadow for depth
        ...style, // Spread any additional styles passed as props
      }}
    >
      {title && <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{title}</h3>}
      {mainContent && <p style={{ fontSize: '24px', color: '#555', margin: '5px 0' }}>{mainContent}</p>}
      {subContent && <p style={{ fontSize: '14px', color: '#777', margin: '5px 0' }}>{subContent}</p>}
      {description && <p style={{ color: '#555', margin: '10px 0' }}>{description}</p>}
      {buttonText && <button style={{ padding: '8px 12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>{buttonText}</button>}
      {children}
    </div>
  );
};

export default Card;
