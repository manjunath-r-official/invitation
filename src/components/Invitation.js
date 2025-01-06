// Invitation.js
import React, { useEffect, useState } from 'react';
import '../styles/Invitation.css';
import '../styles/Card.css'
import Video from '../video/vid.mp4';
import CardGrid from './CardGrid';

const Invitation = () => {
  return (
    <div className="invitation-container">
      <div className="video-section">
        <video autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          this is video
        </video>
      </div>

      <div className="section-1">
      <div className="slide-in-left">
        <h1>Your Left Slide-in Text</h1>
      </div>
      <div className="slide-in-right">
        <h1>Your Right Slide-in Text</h1>
      </div>
      </div>

      {/* <div className="invitation-card">
        <div className="golden-card">
          <h1>Housewarming Celebration</h1>
          <p>You are invited to join us in celebrating our new home!</p>
          <p>Date: [Date]</p>
          <p>Time: [Time]</p>
          <p>Location: [Address]</p>
        </div>
      </div> */}

      {/* <CardGrid /> */}

      {/* <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">FRONT SIDE</p>
                <p>Hover Me</p>
            </div>
            <div class="backSide">
                <p class="title">BACK SIDE</p>
                <p>Leave Me</p>
            </div>
        </div>
    </div> */}

    {/* <div className="card-stack">
      <div className="card">
        <h2>Card 1</h2>
        <p>This is the content of Card 1.</p>
      </div>
      <div className="card">
        <h2>Card 2</h2>
        <p>This is the content of Card 2.</p>
      </div>
      <div className="card">
        <h2>Card 3</h2>
        <p>This is the content of Card 3.</p>
      </div>
    </div> */}

    </div>
  );
};

export default Invitation;
