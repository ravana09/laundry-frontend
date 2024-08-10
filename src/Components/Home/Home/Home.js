import React from "react";
import SideNavBar from "../SideNavbar/SideNavBar";
import { Col, Container, Row } from "react-bootstrap";

function Home({ children, showSideBar = false }) {
  return (
    <>
      <SideNavBar />
      <Container fluid style={{ backgroundColor: 'grey', minHeight: '100vh' }}>
        <Row>
          {showSideBar ? (
            <>
              <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
              <Col xs={12} sm={12} md={12} lg={9} xl={9} className="Home-Body">
                {children}
              </Col>
              <Col xs={0} sm={0} md={0} lg={2} xl={2}></Col>
            </>
          ) : (
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="Home-Body">
              {children}
            </Col>
          )}
        </Row>
      </Container>

      
    </>
  );
}

export default Home;
