import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';

import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BubbleAnimation from "../../BubbleAnimation/BubbleAnimation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginMachineImage from "../../Images/LaundryBUSSINESSiMAGE.png";
import Bussiness from "../../Images/cooperation.png";
import symbol from "../../Images/symbol.jpg";
import playStoreLogo from "../../Images/playStore.png";
import appleStoreLogo from "../../Images/AppleLogo.png";

function BusinessForgetePAssword() {
  const [formData, setFormData] = useState({
    ConfirmPassword: "",
    Password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMac(/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent));
  }, []);

  function handleInputChanges(e) {
    const { name, value } = e.target;

    if (name === "ConfirmPassword") {
      if (value.length <= 8) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "Password") {
      if (value.length <= 8) {
        setFormData({ ...formData, [name]: value });
      }
    }
  }

  let navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  
    if (formData.Password !== formData.ConfirmPassword) {
      Toast.fire({
        icon: "error",
        title: "Passwords do not match",
      });
      return;
    } 
  
    Toast.fire({
      icon: "success",
      title: "Signed up successfully",
    });
    console.log("Form submitted");
    navigate("/BussinessLogin");
  };
  

  const handleNavigation = (pages) => {
    navigate(pages);
  };

  return (
    <>
      <Container fluid className="Login_Row">
        <BubbleAnimation />
        <Row
          className="justify-content-end"
          style={{ borderBottom: "2px solid white" }}
        >
          <Col xs={4} sm={4} md={8} lg={8} xl={8}>
            <Image src={symbol} className="login-Company-Symbol" />
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className="d-flex align-items-center justify-content-end"
          >
            {isMac ? (
              <a
                href="https://apps.apple.com/us/app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={appleStoreLogo}
                  alt="Apple Store"
                  style={{ width: "30px", marginRight: "10px" }}
                />
                Download on the Apple Store
              </a>
            ) : (
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="PlayStoreButton"
              >
                <Image
                  src={playStoreLogo}
                  alt="Play Store"
                  style={{ width: "30px" }}
                />
                <span className="download-text">Download App</span>
              </a>
            )}
            <Button
              className="animated-button"
              onClick={() => {
                handleNavigation("/");
              }}
            >
              <Image
                src={Bussiness}
                alt="For Business"
                className="business-icon"
              />
              <span className="download-text">For User</span>
            </Button>
          </Col>
          <Col xs={4}>
            <Image
              src={loginMachineImage}
              alt="Washing Machine"
              className="loginheader-Machine-Image"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={1}></Col>

          <Col xs={12} md={6} lg={5} className="right-column">
            <center>
              <Card
                className="login-Inner-Card line"
                style={{ borderRadius: "40px" ,marginTop:'20vh'}}
              >
                <center>
                  <h1 className="Login-login-tag" style={{ fontSize: "25px" }}>
                    Change Password
                  </h1>
                </center>

                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Password"
                      className="password-input-container"
                    >
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="Password"
                        placeholder="Password"
                        value={formData.Password}
                        onChange={handleInputChanges}
                        style={{marginBottom:'20px'}}
                      />
                      <Button
                        variant="light"
                        className="eye-button"
                        style={{
                          backgroundColor: "white",
                          border: "none",
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 10px 20px 10px'
                        }}
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Confirm Password"
                      className="password-input-container"
                    >
                      <Form.Control
                        type="password"
                        name="ConfirmPassword"
                        placeholder="Confirm Password"
                        value={formData.ConfirmPassword}
                        onChange={handleInputChanges}
                      />
                    </FloatingLabel>
                    <Row>
                      <Col xs={2} sm={4}></Col>
                      <Col xs={6} sm={4}>
                        <center>
                          <Button
                            type="submit"
                            className="Login-Submit-Button"
                            variant="info"
                          >
                            Submit
                          </Button>
                        </center>
                      </Col>
                      <Col xs={4} sm={4}></Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </center>
          </Col>
          <Col lg={1}></Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            className="left-column Login-Container-left "
          >
            <Image
              src={loginMachineImage}
              alt="Washing Machine"
              className="login-Machine-Image"
            />
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </>
  );
}

export default BusinessForgetePAssword;
