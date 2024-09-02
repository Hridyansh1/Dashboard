import React from 'react';
import Navbar from './components/Navbar';  // Import the Navbar component
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard'; // Import the Dashboard component

function App() {
  return (
    <div className="App">
      {/* Sidebar and Navbar are fixed, and will not move */}
      <Sidebar />
      <Navbar />
      
      {/* Container for the Dashboard content */}
      <div style={{ marginLeft: '250px', marginTop: '60px' }}>
        {/* This will place the Dashboard content below the Navbar and to the right of the Sidebar */}
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
