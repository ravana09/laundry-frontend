import React from "react";
import "../BussinesProfile/BussinessProfile.css";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import BussinesImage from "../../Images/BussinessProfile.jpg";
import { FaLocationDot } from "react-icons/fa6";
import BoostImage from "../../Images/BoostImg.png";
import { useNavigate } from "react-router-dom";
import BussinessProfileCard from "./BussinesProfileCard";

function BussinessProfile() {
  let navigation = useNavigate();
  const handleNavigation = (PAGES) => {
    navigation(PAGES);
    console.log("navigate");
  };
  return (
    <>
      <Container fluid className="Bussiness-Profile-head">
        <Row>
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
          
            <BussinessProfileCard/>
            <Card className="Bussiness-Profile-BoostCard">
              <Card.Body>
                <Row>
                  <Col sm={12} md={4}>
                    {" "}
                    <Card.Img
                      variant="top"
                      src={BoostImage}
                      className="Bussiness-Profile-BoostPic"
                    
                    />
                  </Col>
                  <Col sm={12} md={8}>
                    <p className="Bussiness-Profile-BoostText">
                     
                      Increase Bussiness Profile to reach out more customers
                    </p>
                    <Button> Boost Now </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={8} md={8} lg={8} xl={8}>
            <Card
              className="Bussiness-Profile-MyBussinesCard"
              style={{ backgroundColor: "transparent", border:'none' }}
            >
              <Card.Body>
                {[
                  { title: "My Leads", subtitle: "Tap to View your Leads",Navigate:"/CustomerLeads", },
                  {
                    title: "Catalogue",
                    subtitle: "Show your Product and Services",
                    Navigate:"/CompanyCard"
                    
                  },
                  {
                    title: "KYC, Payments & Invoices",
                    subtitle: "KYC, GST Update",
                  },
                  {
                    title: "Advertise On LAUND",
                    subtitle: "Reach out wide range of customers",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="Bussiness-Profile-MyBussinessCards"
                    style={{
                      borderRadius: "40px",
                      height: "min-content",
                      backgroundColor: "white",
                      marginBottom: "15px",
                    }}
                    onClick={() => handleNavigation(item.Navigate)}
                  >
                    <Card.Body>
                      <div className="MYbussinessCard-Div">
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
                          <Col xs={8} sm={9} >
                            <h2
                              onClick={() => handleNavigation()}
                              className="MYbussinessCard-Title"
                              // style={{ color: "skyblue", marginBottom: "10px" }}
                            >
                              {item.title}
                            </h2>
                            <h5 className="MYbussinessCard-SubTitle">{item.subtitle}</h5>
                          </Col>
                        </Row>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BussinessProfile;
