import React from "react";
import SideNavBar from "../SideNavbar/SideNavBar";
import Card from "../Card/Card";
import { Col, Container, Row } from "react-bootstrap";


function Home() {
  return (
    <>
     
        <SideNavBar  />
      

       
        <Container fluid >
        <Row>
          {/* <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col> */}
          <Col xs={12} sm={10} md={10} lg={10} xl={10} className="Home-Body" >
            <Card />
          </Col>
          <Col xs={0} sm={2} md={2} lg={2} xl={2} style={{backgroundColor:'red'}}></Col>
        </Row>
        </Container>
       x
    </>
  );
}

export default Home;
