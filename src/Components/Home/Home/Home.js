import React from "react";
import SideNavBar from "../SideNavbar/SideNavBar";
import { Card, Col, Container, Row } from "react-bootstrap";
import SIdeOptions from "../SideOptions/SIdeOptions";

function Home({ children, showSideBar = false }) {
  return (
    <>
      <SideNavBar />
      <Container
        fluid
        className="Home-Container"
        style={{ 
          backgroundColor: "#f8f9f9",
          // background:  linear-gradient(to right, #09b8f5, #3dc6f2, #62d2ef, #83deec, #a2e9ec)
   
          // backgroundImage: 'linear-gradient(to right, #09b8f5, #3dc6f2, #62d2ef, #83deec, #a2e9ec)',
          maxHeight: "fit-content" ,
          minHeight:'100vh'
        }}
      >
        <Row>
          {showSideBar ? (
            <>
              <Col xs={0} sm={0} md={0} lg={1} ></Col>
              <Col
                xs={12} 
                sm={12}
                md={10}
                lg={9}
               
                className="Home-Body"
                style={{ margin: "0px", padding: "0px" }}
              >
                {children}
              </Col>
              <Col xs={0} sm={0} md={2} lg={2} style={{margin:'0px'}} >
                {/* <SIdeOptions/> */}
              </Col>
            </>
          ) : (
            <Col
              xs={12}
              className="Home-Body"
              style={{ margin: "0px", padding: "0px" }}
            >
              {children}
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Home;
