import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Row,
  Button,
  Image,
} from "react-bootstrap";
import NavbarBubbleAnimation from "./NavbarAnimation";
import "../SideNavbar/SideNavBar.css";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import ProfileImg from "../Card/sampleImages/wallpapersden.com_monkey-d-luffy-alone-at-war_5120x2880.jpg";

import Cookies from "js-cookie";

function SideNavBar() {
  const navigate = useNavigate();
  const [cookiesType, setCookiesType] = useState(Cookies.get("AccountType"));

  useEffect(() => {
    setCookiesType(Cookies.get("AccountType"));
  }, [cookiesType]);

  const handleNavigation = (page) => {
    navigate(page);
  };

  const handleSignOut = (page) => {
    Cookies.remove("AccountType");
    setTimeout(() => {
      if (!Cookies.get("AccountType")) {
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
            {cookiesType === "Bussiness" && (
              <Col className="text-center" xs={3}>
                <Navbar.Brand
                  onClick={() => handleNavigation("/BussinessProfile")}
                >
                  Company Name
                </Navbar.Brand>
              </Col>
            )}
            {cookiesType === "user" && (
              <Col className="text-center" xs={3}>
                <Navbar.Brand onClick={() => handleNavigation("/CompanyCard")}>
                  Company 
                </Navbar.Brand>
              </Col>
            )}

            <Col xs={5} className="text-end">
              <div className="profile-buttons ">
                {cookiesType === "Bussiness" && (
                  <Button
                    variant="transparent"
                    style={{ border: "none", padding: 0 }}
                    onClick={() => handleNavigation("/BussinessProfile")}
                  >
                    
                    <Image
                      src={ProfileImg}
                      alt="Profile"
                      style={{
                        width: "50px",
                        borderRadius: "50%",
                        // marginRight: "2px",
                        height:'40px',
                        border:'3px solid white'
                      }}
                      // className="d-flex align-items-end justify-content-end"
                    />
                    <span style={{padding:'10px'}}>Bussiness Profile</span>
                    
                  </Button>
                )}

                {cookiesType === "user" && (
                  <Button
                    variant="transparent"
                    style={{ border: "none", padding: 0 }}
                    onClick={() => handleNavigation("/UserProfile")}
                  >
                    <span style={{padding:'10px'}}>Profile</span >
                      <Image
                      src={ProfileImg}
                      alt="Profile"
                      style={{
                        width: "50px",
                        borderRadius: "50%",
                        marginRight: "8px",
                        height:'40px',
                        border:'3px solid white'
                      }}
                        //  className="d-flex align-items-end justify-content-end"
                    />
                    
                  </Button>
                )}
              </div>
             
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
              {cookiesType === "user" && (
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link onClick={() => handleNavigation("/CompanyCard")}>
                    Home
                  </Nav.Link>
                  <Nav.Link onClick={() => handleNavigation("/UserProfile")}>
                    Profile Page
                  </Nav.Link>
                  {/* <Nav.Link onClick={() => handleNavigation("/BussinessProfile")}>
                    Bussines Page
                  </Nav.Link> */}
                </Nav>
              )}
              {cookiesType === "Bussiness" && (
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link
                    onClick={() => handleNavigation("/BussinessProfile")}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => handleNavigation("/BussinessEditPage")}
                  >
                    Profile
                  </Nav.Link>
                  <Nav.Link onClick={() => handleNavigation("/OneCard")}>
                    Preview
                  </Nav.Link>
                  <Nav.Link onClick={() => handleNavigation("/CustomerLeads")}>
                    My Leads
                  </Nav.Link>
                </Nav>
              )}
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
