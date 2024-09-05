import React, { useState } from "react";
import "../BussinesProfile/BussinessProfile.css";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import BussinesImage from "../../Images/BussinessProfile.jpg";
import { FaLocationDot } from "react-icons/fa6";
import BoostImage from "../../Images/BoostImg.png";
import { useNavigate } from "react-router-dom";
import BussinessProfileCard from "./BussinesProfileCard";
import BoostDetails from "./BoostDetails";

function BussinessProfile() {
  const [showBoost, setShowBoost] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(page);
    console.log("navigate");
  };

  const handleBoost = () => {
    setShowBoost(!showBoost);
    
  };

  return (
    <>
      <Container fluid className="Bussiness-Profile-head">
        <Row>
        <Col xs={12} sm={4}>
    <BussinessProfileCard />
    {/* {!showBoost && ( */}
    <Card className="Bussiness-Profile-BoostCard" style={{ marginTop:'3vh'}}>
      <Card.Body>
        <Row>
          {/* <Col xs={4}>
            <Card.Img
              variant="top"
              src={BoostImage}
              className="Bussiness-Profile-BoostPic"
            />
          </Col> */}
          <Col xs={12} className="d-flex flex-column justify-content-center">
            <p className="Bussiness-Profile-BoostText">
              Increase Business Profile to reach out to more customers
            </p>
            <Button onClick={handleBoost} className="mt-2">
              {showBoost ? "Close Boost" : "Boost Now"}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    {/* )} */}
  </Col>
          <Col xs={12} sm={8} md={8} lg={8} xl={8}>
            {showBoost ? (
              <BoostDetails />
            ) : (
              <Card
                className="Bussiness-Profile-MyBussinesCard"
                style={{  width:"100%",backgroundColor:'transparent' ,border:"none"}}
              >
                <Card.Body style={{padding:'0px'}}>
                  {[
                    { title: "My Leads", subtitle: "Tap to View your Leads", Navigate: "/LeadsContainer" },
                    { title: "Analysis", subtitle: "Improve Product and Services", Navigate: "/AllAnalysisPage" },
                    { title: "Reports", subtitle: "All the updates", Navigate: "/ReportsPage" },
                    { title: "Advertise On LAUND", subtitle: "Reach out to a wide range of customers" },
                  ].map((item, index) => (
                    <Card
                      key={index}
                      className="Bussiness-Profile-MyBussinessCards"
                      style={{
                        width:"100%",
                        height: "min-content",
                        backgroundColor: "transparent",
                        marginBottom: "12px",
                        border:'none'
                       
                       
                      }}
                      onClick={() => handleNavigation(item.Navigate)}
                    >
                      <Card.Body >
                        <div className="MYbussinessCard-Div" style={{backgroundColor:'white'}}>
                          <Row className="justify-content-center align-items-center">
                            <Col
                              xs={4}
                              sm={3}
                              className="text-center mb-3 mb-sm-0"
                            >
                              <Image
                                src={BoostImage}
                                alt="Leads Image"
                                className="MYbussinessCard-Images"
                                style={{ maxWidth: "80px" }}
                              />
                            </Col>
                            <Col xs={8} sm={9}>
                              <h3
                                className="MYbussinessCard-Title"
                              >
                                {item.title}
                              </h3>
                              <h5 className="MYbussinessCard-SubTitle">{item.subtitle}</h5>
                            </Col>
                          </Row>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BussinessProfile;
