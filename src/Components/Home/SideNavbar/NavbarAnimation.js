import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for bubbles moving left to right
const move = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 1;
  }
  70% {
    transform: translateX(calc(70vw + 100px));
    opacity: 0;
  }
`;

// Styled component for the bubbles
const Bubble = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  animation: ${move} linear infinite;
`;

const NavbarBubbleAnimation = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubble = () => {
      const size = Math.random() * 30 + 20; 
      const top = Math.random() * 5;   
      const duration = Math.random() * 10 + 10; 

      // Add new bubble to the state
      setBubbles(bubbles => [
        ...bubbles,
        { size, top, duration }
      ]);

      // Remove bubbles after a period
      setTimeout(() => {
        setBubbles(bubbles => bubbles.slice(1));
      }, duration * 500); // Match this with the animation duration
    };

    // Create bubbles at regular intervals
    const interval = setInterval(createBubble, 1000); // Adjust interval as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {bubbles.map((bubble, index) => (
        <Bubble
          key={index}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: `${bubble.top}vh`,
            animationDuration: `${bubble.duration}s`,
            color:'skyblue'
          }}
        />
      ))}
    </>
  );
};

export default NavbarBubbleAnimation;
