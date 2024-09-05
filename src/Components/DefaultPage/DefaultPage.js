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
    const timer = setTimeout(() => setShowButtons(true), 4000); // Adjust time to match your typeSpeed * number of characters
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (page) => {
    navigate(page);
  };

  return (
    <Container
      fluid
      className="Login_Row d-flex justify-content-center align-items-center vh-100"
    >
      <BubbleAnimation />

      <Row className="text-center">
        <Col xs={12}>
          <h1 className="cursive-heading">
            <Typewriter
              words={["hi buddy", "welcome to laund "]}
              loop={1}
              cursor={false}
              typeSpeed={90}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </h1>
          {showButtons && (
            <>
            <h5 className="cursive-heading SUbHeading-h4" style={{fontSize:'300%'}}>Connect with us as</h5>
            <div className="button-container mt-4 cursive-heading">
              
              <Button
                variant="info"
                className="me-3"
                style={{
                  fontSize:'40%',
                  maxWidth: "200px",
                  color: "white",
                  border: "none",
                  borderRadius: "20px",
                  // backgroundColor: "transparent",
                }}
                onClick={() => handleNavigation("/Login")}
              >
                User 
              </Button>
              <Button
                variant="secondary"
                style={{
                  fontSize:'40%',
                  maxWidth: "200px",
                  color: "white",
                  border: "none",
                  borderRadius: "20px",
                  // backgroundColor: "transparent",
                }}
                onClick={() => handleNavigation("/BussinessLogin")}
              >
                Business 
              </Button>
            </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default DefaultPage;
