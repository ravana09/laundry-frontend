import React, { useState } from "react";
import { Card, CloseButton, Col, Container, Row } from "react-bootstrap";
import "./PopupCard.css"; // Ensure this points to your correct CSS file
import { useNavigate } from "react-router-dom";

function PopupCard() {
  const options = [
    "Washing",
    "Dry Cleaning",
    "Ironing",
    "Folding",
    "Delivery",
    "Others",
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const handleClosePopup = () => {
    sessionStorage.setItem("popupClosed", "true");
    setIsVisible(false);
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value]
    );
  };

  let navigate =useNavigate()
  const processSelection = () => {
    if (selectedOptions.length === 0) {
      alert("Please select at least one option.");
      return;
    }
    sessionStorage.setItem("popupClosed", "true");
    setIsVisible(false);
    console.log("Selected Options:", selectedOptions);
    navigate('/CompanyCard', { state: { selectedOptions } });
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <Container className="popup-container">
        <Card className="popup-card">
          <div className="checkbox-container">
            {/* <Row className="align-items-center mb-3">
              <Col xs="auto">
                <div className="popup-card-title">Need Help?</div>
              </Col>
              <Col xs={1} className="ms-auto">
                <CloseButton onClick={handleClosePopup} />
              </Col>
            </Row> */}

            {/* Checkbox options */}
            {options.map((option) => (
              <label className="custom-checkbox" key={option}>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                <span className="custom-checkbox-label">{option}</span>
              </label>
            ))}

            <Row>
              <Col xs={6}>
                <button className="btn-submit" onClick={processSelection}>
                  Continue
                </button>
              </Col>
              <Col xs={6} className="ms-auto">
                <button
                  className="btn-submit"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #00bff",
                    color: "black",
                  }}
                  onClick={handleClosePopup}
                >
                  Cancel
                </button>
              </Col>
            </Row>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default PopupCard;
