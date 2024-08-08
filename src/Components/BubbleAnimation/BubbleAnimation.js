import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for bubbles rising
const rise = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
`;

// Styled component for the bubbles
const Bubble = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  animation: ${rise} 5s infinite ease-in;
`;

const BubbleAnimation = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubble = () => {
      const size = Math.random() * 30 + 30; // Size between 10px and 30px
      const left = Math.random() * 100; // Random position within viewport width
      const duration = Math.random() * 10 + 2; // Duration between 2s and 5s

      // Add new bubble to the state
      setBubbles(bubbles => [
        ...bubbles,
        { size, left, duration }
      ]);

      // Remove bubbles after a period
      setTimeout(() => {
        setBubbles(bubbles => bubbles.slice(1));
      }, 8000); // Match this with the animation duration
    };

    // Create bubbles at regular intervals
    const interval = setInterval(createBubble, 100); // More frequent bubble creation
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
            left: `${bubble.left}vw`,
            bottom: `10px`, // Start position from the bottom of the screen
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
    </>
  );
};

export default BubbleAnimation;
