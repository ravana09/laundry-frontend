import React from "react";
import {
  Col,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Row,
  Button,
} from "react-bootstrap";
import NavbarBubbleAnimation from "./NavbarAnimation";
import "../SideNavbar/SideNavBar.css";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function SideNavBar() {
  
let navigate=useNavigate()
  const handleBussinesProfile=()=>{
    navigate("/BussinessProfile")
  }
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-skyblue  "
          style={{ height: "10vh" }}
          fixed="top"
        >
          <NavbarBubbleAnimation className="navbar-bubble-animation" />
          <Container fluid>
            <Row className="w-100 align-items-center position-relative">
              <Col xs={4}>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                {/* <span>Laund</span> */}
              </Col>
              <Col className="text-center" xs={4}>
                <Navbar.Brand>Company Name</Navbar.Brand>
              </Col>
              <Col xs={0} className="text-end">
                <Button
                  variant="transparent"
                  style={{ border: "none", height: "50px" }}
                  onClick={handleBussinesProfile}
                >
                  Bussiness{" "}
                  <spamn>
                    <CgProfile />
                  </spamn>{" "}
                </Button>
                <Button
                  variant="transparent"
                  style={{ border: "none", height: "50px" }}
                >
                  User Name{" "}
                  <spamn>
                    <CgProfile />
                  </spamn>{" "}
                </Button>
              </Col>
            </Row>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Laund
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="Sidenavbar-Offcampus-body">
                {/* <NavbarBubbleAnimation className="navbar-bubble-animation" /> */}
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">USER Details</Nav.Link>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">USER Details</Nav.Link>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">USER Details</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default SideNavBar;
