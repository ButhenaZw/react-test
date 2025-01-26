import React from 'react';
import "./Activity.css";

const Activity = () => {
  return (
    <div className="activity-container">
      <h1 className="activity-title">School Activities</h1>
      <div className="activity-list">
        
        <a href="https://www.codewars.com/" target="_blank" className="activity-card">
          <img src="https://img.icons8.com/?size=100&id=SiADyIXKWCFz&format=png&color=000000" alt="Coding Workshop" />
          <h3>Coding Workshop</h3>
          <p>Learn the basics of programming in a fun way.</p>
        </a>

        <a href="https://www.hackerrank.com/" target="_blank" className="activity-card">
          <img src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png" alt="Programming Contest" />
          <h3>Programming Contest</h3>
          <p>Participate in challenges and win prizes.</p>
        </a>

        <a href="https://www.scratch.mit.edu/" target="_blank" className="activity-card">
          <img src="https://cdn-icons-png.flaticon.com/512/2343/2343614.png" alt="Programming Game" />
          <h3>Programming Game</h3>
          <p>Learn coding through interactive games.</p>
        </a>

      </div>
    </div>
  );
}

export default Activity;