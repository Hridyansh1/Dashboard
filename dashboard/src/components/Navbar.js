import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FaBell } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import profilePic from './p1.jpg'; // Import the profile picture

const Navbar = () => {
  return (
    <div
      style={{
        width: 'calc(100% - 250px)', // Adjust width to account for sidebar
        height: '60px', // Height of the navbar
        backgroundColor: '#ffffff', // Background color of the navbar
        padding: '0 20px',
        position: 'fixed', // Fix the navbar on the top
        top: 0,
        left: '250px', // Start after the sidebar
        display: 'flex', // Use flex to align items
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 999, // Ensure it stays on top of other content
        borderBottom: 'none', // Remove bottom border
        boxShadow: 'none', // Remove box shadow
      }}
    >
      {/* Search Bar */}
      <form style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <div style={{ position: 'relative', width: '300px' }}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              padding: '8px 40px 8px 10px',
              width: '100%', // Adjust width to fit within the container
              borderRadius: '20px',
              border: '1px solid #ccc',
              backgroundColor: '#f0f0f0',
              color: '#333',
              outline: 'none',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'border-color 0.3s ease', // Smooth transition for border color
            }}
          />
          <button
            type="submit"
            style={{
              position: 'absolute',
              right: '10px', // Adjust to fit within the input field
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#666', // Softer color for the icon
              transition: 'color 0.3s ease', // Smooth transition for color
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#333')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
          >
            <IoIosSearch />
          </button>
        </div>
      </form>

      {/* Navbar Items */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaBell style={iconStyle} />
        <MdOutlineMessage style={iconStyle} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              marginRight: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Shadow for profile picture
            }}
          />
          <h3 style={{ margin: '0 10px', color: '#003366', fontSize: '16px', fontWeight: '600' }}>
            Admirra John
          </h3>
          <IoIosArrowDown style={{ color: '#999', cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

const iconStyle = {
  marginRight: '20px',
  color: '#999',
  cursor: 'pointer',
  transition: 'color 0.3s ease', // Smooth transition for color change
};

export default Navbar;
