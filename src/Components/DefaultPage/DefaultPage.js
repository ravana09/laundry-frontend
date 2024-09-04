import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BubbleAnimation from "../BubbleAnimation/BubbleAnimation";
import "../DefaultPage/DefaultPage.css"; // Ensure the correct CSS file path
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

function DefaultPage() {
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);

  // Effect to show buttons after typewriter effect
  useEffect(() => {
    const timer = setTimeout(() => setShowButtons(true), 3100); // Adjust time to match your typeSpeed * number of characters
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (page) => {
    navigate(page);
  };

  return (
    <Container fluid className="Login_Row d-flex justify-content-center align-items-center vh-100">
      <BubbleAnimation />

      <Row className="text-center">
        <Col xs={12}>
          <h1 className="cursive-heading">
            <Typewriter
              words={["hi buddy", "welcome to laund "]}
              loop={1}
              cursor={false}
              typeSpeed={100}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </h1>
          {showButtons && (
            <div className="button-container mt-4">
              <Button
                variant="primary"
                className="me-3"
                style={{ maxWidth: '200px' }}
                onClick={() => handleNavigation("/Login")}
              >
                User Login
              </Button>
              <Button
                variant="secondary"
                style={{ maxWidth: '200px' }}
                onClick={() => handleNavigation("/BussinessLogin")}
              >
                Business Login
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default DefaultPage;
