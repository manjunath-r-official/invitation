import React, { useState, useEffect } from 'react';
import '../styles/Door.css';

const Door = ({ isOpen, onOpen }) => {
  const [isTransformed, setTransformed] = useState(false);
  const [backgroundBrightness, setBackgroundBrightness] = useState(0); // State to control background brightness

  useEffect(() => {
    if (!isTransformed) {
      setTransformed(true);
      onOpen();

      // Gradually increase background brightness when the door opens
      let brightnessInterval = setInterval(() => {
        setBackgroundBrightness((prev) => {
          if (prev >= 1) {
            clearInterval(brightnessInterval);
            return 1;
          }
          return prev + 0.1;
        });
      }, 300); // Adjust interval duration as needed
    }
  }, []);

  const handleWrapperClick = () => {
    setTransformed(!isTransformed);
    onOpen();
  };

  return (
    <div
      className="door-container"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${1 - backgroundBrightness})`, // Transition background from dark to normal
        transition: 'background-color 0.5s ease', // Smooth transition
      }}
    >
      <div className={`wrapper ${isTransformed ? 'transformed' : ''}`} onClick={handleWrapperClick}>
        <div id="door-1" className={`door door-1 ${isOpen ? 'open' : ''}`}>
          <div className="door-name">Pream</div> {/* Add groom's name */}
        </div>
        <div id="door-2" className={`door door-2 ${isOpen ? 'open' : ''}`}>
          <div className="door-name">Rakshitha</div> {/* Add bride's name */}
        </div>
        {/* Removed "Weds" text */}
      </div>
      <div className="content">
        <iframe src="/invitation" title="Invitation Page" className="invitation-frame"></iframe>
      </div>
    </div>
  );
};

export default Door;
