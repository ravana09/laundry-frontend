import React from "react";
import "../BussinesProfile/BussinessProfile.css";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import BussinesImage from "../../Images/BussinessProfile.jpg";
import { FaLocationDot } from "react-icons/fa6";
import BoostImage from "../../Images/BoostImg.png";

function BussinessProfile() {
  return (
    <>
      <Container fluid className="Bussiness-Profile-head">
        <Row>
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <Card
              className="Bussiness-Profile-ComapnyCard"
              style={{ width: "100%", borderRadius: "20px" ,height:'auto',padding:'10px'}}
            >
              <Card.Img
                variant="top"
                src={BussinesImage}
                className="Bussiness-Profile-ProfilePic"
              />
              <Card.Body>
                <Card.Title>Company Name </Card.Title>
                <Card.Text>
                  <FaLocationDot /> Company address
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Card.Link href="#">Edit </Card.Link>
              </Card.Body>
            </Card>
            <Card className="Bussiness-Profile-BoostCard">
              <Card.Body>
                <Row>
                  <Col sm={12} md={4}>
                    {" "}
                    <Card.Img
                      variant="top"
                      src={BoostImage}
                      className="Bussiness-Profile-BoostPic"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "fill",
                      }}
                    />
                  </Col>
                  <Col sm={12} md={8}>
                    <p>
                      {" "}
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
              style={{backgroundColor:'transparent'}}
            >
              <Card.Body>
                {/* <Card.Title>My Bussiness</Card.Title> */}
                <Card
                  className="Bussiness-Profile-MyBussinessCards"
                  style={{
                    borderRadius: "40px",
                    backgroundColor: "rgb(228, 227, 227)",
                    height:'min-Content'
                  }}
                >
                   
                  <Card.Body>
                  <div style={{ border: '0.5px solid grey', borderRadius: '20px', padding: '1px' }}>
                   
                    <Row>
                      <Col sm={4}>

                        {" "}
                        <Image
                          src={BoostImage}
                          alt="Leads Image "
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "fill",
                          }}
                        />
                      </Col>
                      <Col sm={8}>
                        <p>
                          {" "}
                          Increase Bussiness Profile to reach out more customers
                        </p>
                        <Button> Boost Now </Button>
                      </Col>
                    </Row>
                    </div>
                  </Card.Body>
              
                </Card>
                <Card
                  className="Bussiness-Profile-MyBussinessCards"
                  style={{ borderRadius: "40px",height:'min-Content' }}
                >
                  <Card.Body>
                    <Row>
                      <Col sm={4}>
                        {" "}
                        <Image
                          src={BoostImage}
                          alt="Leads Image "
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "fill",
                          }}
                        />
                      </Col>
                      <Col sm={8}>
                        <p>
                          {" "}
                          Increase Bussiness Profile to reach out more customers
                        </p>
                        <Button> Boost Now </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Card
                  className="Bussiness-Profile-MyBussinessCards"
                  style={{ borderRadius: "40px" }}
                >
                  <Card.Body>
                    <Row>
                      <Col sm={4}>
                        {" "}
                        <Image
                          src={BoostImage}
                          alt="Leads Image "
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "fill",
                          }}
                        />
                      </Col>
                      <Col sm={8}>
                        <p>
                          {" "}
                          Increase Bussiness Profile to reach out more customers
                        </p>
                        <Button> Boost Now </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Card
                  className="Bussiness-Profile-MyBussinessCards"
                  style={{ borderRadius: "40px" }}
                >
                  <Card.Body>
                    <Row>
                      <Col sm={4}>
                        {" "}
                        <Image
                          src={BoostImage}
                          alt="Leads Image "
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "fill",
                          }}
                        />
                      </Col>
                      <Col sm={8}>
                        <p>
                          {" "}
                          Increase Bussiness Profile to reach out more customers
                        </p>
                        <Button> Boost Now </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BussinessProfile;
