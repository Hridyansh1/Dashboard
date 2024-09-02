import React from 'react';
import {
  MdDashboard,
  MdWork,
  MdSchedule,
  MdPeople,
  MdApartment,
  MdHelpOutline,
  MdSettings,
} from 'react-icons/md'; // Import necessary icons
import vasitumLogo from './vasitum.jpg'; // Import the Vasitum logo

const Sidebar = () => {
  return (
    <div
      style={{
        width: '250px', // Fixed width of the sidebar
        height: '100vh', // Full viewport height
        backgroundColor: '#f8f9fa', // Background color of the sidebar
        borderRight: '1px solid #ddd', // Border for separation
        padding: '0px 0px 272px 0px', // Padding around the content
        position: 'fixed', // Fix the sidebar on the left
        top: 0, // Align with the top of the viewport
        left: 0, // Align with the left side of the viewport
        zIndex: 1000, // Ensure the sidebar stays on top
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center the content horizontally
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)', // Subtle shadow for depth
      }}
    >
      {/* Logo and Name */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <img
          src={vasitumLogo}
          alt="Vasitum Logo"
          style={{
            width: '50px', // Adjust the size as needed
            height: '50px',
            padding:'20px',
            marginRight: '10px',
            opacity: 0.8, // Make logo slightly transparent
            borderRadius: '8px',
          }}
        />
        <h2 style={{ margin: 0, color: '#003366' }}>Vasitum</h2>
      </div>

      {/* Main Menu */}
      <div style={{ width: '100%', paddingLeft: '20px' }}>
        <h3 style={{ marginBottom: '20px', color: '#333' }}>Main Menu</h3>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={menuItemStyle}>
            <MdDashboard style={{ marginRight: '10px', color: '#0056b3' }} />
            <a href="/dashboard" style={linkStyle}>
              Dashboard
            </a>
          </li>
          <li style={menuItemStyle}>
            <MdWork style={{ marginRight: '10px', color: '#0056b3' }} />
            <a href="/recruitment" style={linkStyle}>
              Recruitment
            </a>
          </li>
          <li style={menuItemStyle}>
            <MdSchedule style={{ marginRight: '10px', color: '#0056b3' }} />
            <a href="/schedule" style={linkStyle}>
              Schedule
            </a>
          </li>
          <li style={menuItemStyle}>
            <MdPeople style={{ marginRight: '10px', color: '#0056b3' }} />
            <a href="/employee" style={linkStyle}>
              Employee
            </a>
          </li>
          <li style={menuItemStyle}>
            <MdApartment style={{ marginRight: '10px', color: '#0056b3' }} />
            <a href="/department" style={linkStyle}>
              Department
            </a>
          </li>
        </ul>

        <h3 style={{ marginTop: '30px', marginBottom: '20px', color: '#333' }}>Other</h3>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={menuItemStyle}>
            <MdHelpOutline style={{ marginRight: '10px', color: '#0056b3' }} />
            <a href="/support" style={linkStyle}>
              Support
            </a>
          </li>
          <li style={menuItemStyle}>
            <MdSettings style={{ marginRight: '10px', color: '#0056b3' }} />
            <a href="/settings" style={linkStyle}>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Shared styles for list items and links
const menuItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px 0',
  marginBottom: '5px', // Space between items
  borderBottom: '1px solid #ddd', // Border for separation
  cursor: 'pointer', // Pointer cursor on hover
};

const linkStyle = {
  textDecoration: 'none',
  color: '#003366',
  fontSize: '16px',
  fontWeight: '500',
};

export default Sidebar;
