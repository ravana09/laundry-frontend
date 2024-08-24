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
import Cookies from "js-cookie";

function SideNavBar() {
  let navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(page);
  };

  const handleSignOut = (page) => {
    Cookies.remove("AccountType");

    // Cookies.remove("BusinessAccountType");

    // Use a short delay to ensure cookies are removed
    setTimeout(() => {
      if (!Cookies.get("AccountType") ) {
        navigate(page);
      } else {
        console.error("Failed to remove cookies.");
      }
    }, 100);
  };

  return (
    <>
      <Navbar
        expand={false}
        className="bg-skyblue"
        style={{ height: "10vh" }}
        fixed="top"
      >
        <NavbarBubbleAnimation className="navbar-bubble-animation" />
        <Container fluid>
          <Row className="w-100 align-items-center position-relative">
            <Col xs={4}>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
            </Col>
            <Col className="text-center" xs={4}>
              <Navbar.Brand onClick={() => handleNavigation("/CompanyCard")}>
                Company Name
              </Navbar.Brand>
            </Col>
            <Col xs={4} className="text-end">
              <Button
                variant="transparent"
                style={{ border: "none", height: "50px" }}
                onClick={() => handleNavigation("/BussinessProfile")}
              >
                <CgProfile />
              </Button>
              {/* <Button
                variant="transparent"
                
              >
                User Name <CgProfile />
              </Button> */}
            </Col>
          </Row>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Laund</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="Sidenavbar-Offcampus-body d-flex flex-column">
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link onClick={() => handleNavigation("/CompanyCard")}>
                  Home
                </Nav.Link>
                {/* <Nav.Link onClick={() => handleNavigation("/UserDetails")}>USER Details</Nav.Link> */}
                <Nav.Link onClick={() => handleNavigation("/UserProfile")}>
                  Profile Page
                </Nav.Link>
                <Nav.Link onClick={() => handleNavigation("/BussinessProfile")}>
                  Bussines Page
                </Nav.Link>
              </Nav>
              <div className="mt-auto">
                <Button
                  variant="outline-danger"
                  onClick={() => handleSignOut("/")}
                >
                  Sign Out
                </Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default SideNavBar;
