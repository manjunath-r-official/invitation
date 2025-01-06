import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import '../styles/Door.css';

const Door = ({ isOpen, onOpen }) => {
  const [isTransformed, setTransformed] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleWrapperClick = () => {
    setTransformed(!isTransformed);

    // Add any other logic for opening the door if needed

    // Redirect to homepage after 5 seconds
    if (!isTransformed) {
      setTimeout(() => {
        onOpen(); // Trigger the door open logic
        navigate("/invitation"); // Use navigate to redirect to "/home"
      }, 1000); // 5000 milliseconds = 5 seconds
    }
  };

    return (
        <div className={`wrapper ${isTransformed ? 'transformed' : ''}`} onClick={handleWrapperClick}>
        <div id="door-1" className={`door door-1 ${isOpen ? 'open' : ''}`} onClick={onOpen}></div>
        <div id="door-2" className={`door door-2 ${isOpen ? 'open' : ''}`} onClick={onOpen}></div>
      </div>
    );
  };
  
  export default Door;
