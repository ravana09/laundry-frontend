import React from "react";
import SideNavBar from "../SideNavbar/SideNavBar";
import { Col, Container, Row } from "react-bootstrap";

function Home({ children }) {
  return (
    <>
      <SideNavBar />
      <Container fluid style={{ backgroundColor: 'grey',minHeight:'100vh' }}>
        <Row>
          {/* <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col> */}
          <Col xs={12} sm={12} md={12} lg={10} xl={10} className="Home-Body">
            {children}
          </Col>
          <Col xs={0} sm={0} md={0} lg={2} xl={2}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
