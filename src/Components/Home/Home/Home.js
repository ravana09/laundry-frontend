import React from "react";
import SideNavBar from "../SideNavbar/SideNavBar";
import { Col, Container, Row } from "react-bootstrap";

function Home({ children, showSideBar = false }) {
  return (
    <>
      <SideNavBar />
      <Container fluid style={{ backgroundColor: 'rgb(190, 190, 190)', minHeight: '100vh' }}>
        <Row>
          {showSideBar ? (
            <>
              <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
              <Col xs={12} sm={12} md={12} lg={10} xl={10} className="Home-Body" style={{margin:'0px',padding:"0px"}}>
                {children}
              </Col>
              <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
            </>
          ) : (
            <Col xs={12}  className="Home-Body" style={{margin:'0px',padding:'0px'}}>
              {children}
            </Col>
          )}
        </Row>
      </Container>

      
    </>
  );
}

export default Home;
