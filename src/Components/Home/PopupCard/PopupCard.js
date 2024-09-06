import React, { useState } from "react";
import "../PopupCard/PopupCard.css";
import { Card, CloseButton, Col, Container, Form, Row } from "react-bootstrap";

function PopupCard() {
  // Define an array of options
  const options = [
    "Washing",
    "Dry Cleaning",
    "Ironing",
    "Folding",
    "Delivery",
    "Others"
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handle checkbox change
  function handleCheckboxChange(e) {
    const value = e.target.value;
    setSelectedOptions((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value) // Uncheck
        : [...prevState, value] // Check
    );
  }

  // Function to process selected options
  function processSelection() {
    console.log("Selected Options:", selectedOptions);
    
  }

  return (
    <Container fluid style={{ marginTop: '20vh', backgroundColor: 'transparent' }}>
      <Row>
        <Col xs={12} sm={1} md={3}></Col>
        <Col xs={12} sm={10} md={6}>
          <Card className="popup-card">
            <Card.Header className="popup-card-header">
              <Row>
                <Col xs="auto" className="d-flex align-items-center">
                  <div className="popup-card-title">Choose Your Preference</div>
                </Col>
                <Col xs="auto" className="ms-auto">
                  <CloseButton className="popup-close-button" />
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className="popup-card-body">
              {options.map((option) => (
                <Form.Check
                  key={option}
                  type="checkbox"
                  label={option}
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={handleCheckboxChange}
                />
              ))}
              <button onClick={processSelection} className="btn btn-primary mt-3">
           Continue
              </button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={1} md={3}></Col>
      </Row>
    </Container>
  );
}

export default PopupCard;
