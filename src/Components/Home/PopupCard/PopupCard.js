import React, { useState } from "react";
import "../PopupCard/PopupCard.css";
import { Card, CloseButton, Col, Container, Form, Row } from "react-bootstrap";

function PopupCard() {
  const [radio, setRadio] = useState();

  function handleChange(e) {
    setRadio(e.target.value);
  }

  return (
    <Container fluid style={{ marginTop: '20vh' }}>
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
              <Form.Check
                type="radio"
                label="Washing"
                value="Washing"
                checked={radio === 'Washing'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Dry Cleaning"
                value="Dry Cleaning"
                checked={radio === 'Dry Cleaning'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Ironing"
                value="Ironing"
                checked={radio === 'Ironing'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Folding"
                value="Folding"
                checked={radio === 'Folding'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Delivery"
                value="Delivery"
                checked={radio === 'Delivery'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Others"
                value="Others"
                checked={radio === 'Others'}
                onChange={handleChange}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={1} md={3}></Col>
      </Row>
    </Container>
  );
}

export default PopupCard;
