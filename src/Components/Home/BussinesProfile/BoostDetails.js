import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../BussinesProfile/BoostDetails.css";
import addConatctsLogo from "../../Images/AddUserLogo.png";
import mapLogo from "../../Images/map.png";
import socialMedia from "../../Images/social-media.png";
import star from "../../Images/Star.png";
import uploadPhotos from "../../Images/photo.png";

function BoostDetails() {
  let percentage = 60;
  const [value, setValue] = useState(percentage);

  useEffect(() => {
    setValue(percentage);
  }, [percentage]);

  const trackStyle = {
    background: `linear-gradient(to right, blue ${value}%, lightorange ${value}%)`,
  };
  return (
    <>
      <Card style={{ width: "100%", marginTop: "5vh" }}>
        <Card.Body>
          <Row>
            <Col xs={12}>
              <center>
                <h1>Business Profile Score </h1>
                <div className="range-slider-container">
                  <div className="range-slider-content">
                    <div className="range-slider">
                      <div className="slider-track">
                        <div
                          className="Range-Colour"
                          style={{
                            width: `${percentage}%`,
                            backgroundImage:
                              percentage >= 10
                                ? "linear-gradient(to right, #072d54, #25587b, #4b86a0, #78b5c5, #ade6e9)"
                                : "white",
                            height: "100%",
                            borderRadius: "4px",
                            transition: "width 0.3s ease-in-out",
                          }}
                        ></div>
                      </div>
                    </div>
                    <p>Current value: {value}%</p>
                  </div>
                </div>
              </center>

              <Row className="justify-content-center">
                {[
                  {
                    title: "Add Two or More Contacts ",
                    Navigation: "Show your Product and Services",
                    Logos: addConatctsLogo,
                  },
                  {
                    title: "Add Map Location ",
                    Navigation: "Show your Product and Services",
                    Logos: mapLogo,
                  },
                  {
                    title: "Add Social Media Channel",
                    Navigation: "KYC, GST Update",
                    Logos: socialMedia,
                  },
                  {
                    title: "Get Upto 10 Reviews ",
                    Navigation: "Reach out to a wide range of customers",
                    Logos: star,
                  },
                  {
                    title: "Upload Photos and Videos ",
                    Navigation: "Reach out to a wide range of customers",
                    Logos: uploadPhotos,
                  },
                ].map((item, index) => (
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    key={index}
                    className={index === 4 ? "mx-auto" : ""} // Center the 5th card
                  >
                    <Card className="boostCard-card">
                      <Card.Body>
                        <Row>
                          <Col>
                            <Card.Img
                              variant="top"
                              src={item.Logos}
                              className="BoostCard-Logos"
                              style={{ width: "50px" }}
                            />
                          </Col>
                          <Col>
                            <Card.Title>{item.title}</Card.Title>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default BoostDetails;
