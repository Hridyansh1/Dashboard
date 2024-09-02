import React from 'react';
import Card from './Card';
import './dashboard.css'; // Import desktop CSS
import './dashboard-mobile.css'; // Import mobile CSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      {/* First Row: Card 1, Card 2, Card 3, and Recent Activity */}
      <div className="first-row">
        <Card
          title="Available Position"
          mainContent="24"
          subContent="Urgently hiring"
          className="card"
        />
        <Card
          title="Job Open"
          mainContent="10"
          subContent="4 active hiring"
          className="card"
        />
        <Card
          title="New Employees"
          mainContent="24"
          subContent="4 departments"
          className="card"
        />
        <div className="recent-activity">
          <p className="recent-activity-date">{new Date().toLocaleString()}</p>
          <p className="recent-activity-title">You Posted a New Job</p>
          <p>Kindly check the requirement of the job and make sure everything is right.</p>
          <p className="recent-activity-activities">Today you did 12 activities.</p>
          <button className="recent-activity-button">
            See all activity
          </button>
        </div>
      </div>

      {/* Second Row: Total Employees, Talent Request, and Upcoming Schedule */}
      <div className="second-row">
        <Card
          title="Total Employees"
          mainContent="216"
          subContent="120 men, 96 women"
          className="card-large"
        />
        <Card
          title="Talent Request"
          mainContent="16"
          subContent="6 men, 10 women"
          className="card-large"
        />
        <div className="upcoming-schedule">
          <h3 className="upcoming-schedule-title">Upcoming Schedule</h3>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9:00 AM</td>
                <td>Meeting with Team</td>
              </tr>
              <tr>
                <td>11:00 AM</td>
                <td>Project Deadline</td>
              </tr>
              <tr>
                <td>12:00 AM</td>
                <td>New Project</td>
              </tr>
              <tr>
                <td>1:00 AM</td>
                <td>Meeting With Client</td>
              </tr>
              <tr>
                <td>2:00 AM</td>
                <td>Lunch</td>
              </tr>
            </tbody>
          </table>
          <button className="schedule-button">
            See entire Schedule
          </button>
        </div>
      </div>

      {/* Third Row: Announcements */}
      <div className="announcements">
        <p>Here can put the announcements detail.</p>
        <button className="announcements-button">
          See all announcements
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
