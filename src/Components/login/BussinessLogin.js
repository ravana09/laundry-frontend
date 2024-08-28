import React, { useEffect, useState } from "react";
import "../login/BussinessLogin.css";
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
import loginMachineImage from "../Images/LaundryBUSSINESSiMAGE.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google from "../Images/GoogleIcon.png";
import apple from "../Images/AppleLogo.png";
import Bussiness from "../Images/cooperation.png";
import twitter from "../Images/TwitterLogo.png";
import facebook from "../Images/facebook.png";
import BubbleAnimation from "../BubbleAnimation/BubbleAnimation";
import symbol from "../Images/symbol.jpg";
import playStoreLogo from "../Images/playStore.png"; // Add your Play Store logo here
import appleStoreLogo from "../Images/AppleLogo.png"; // Add your Apple Store logo here
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function BussinessLogin() {
  const [formData, setFormData] = useState({
    Email: "",
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

    if (name === "Email") {
      setFormData({ ...formData, [name]: value });
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
    console.log("Form submitted");
    Cookies.remove("AccountType");
    // Set the AccountType cookie
    Cookies.set("AccountType", "Bussiness", { expires: 684 });
    Cookies.set("AccountToken", "BusinessTokenqwertyuiop", { expires: 684 });


    // Use a short delay to ensure the cookie is set
    setTimeout(() => {
      if (Cookies.get("AccountType") === "Bussiness") {
        navigate("/BussinessProfile");
        window.location.reload(); 
      } else {
        console.error("Failed to set AccountType cookie.");
      }
    }, 100);
  };

  const handleSignUpPage = () => {
    navigate("/BussinesSignUp");
  };
  const handleNavigation = (pages) => {
    navigate(pages, { state: { redirectTo: "/BussinessForgetPassword" } });
  };

  return (
    <>
      <Container fluid className="Login_Row">
        <BubbleAnimation />
        <Row
          className="justify-content-end LOgin_Header"
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
          <Col xs={4} className="d-flex align-items-end justify-content-end">
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
                style={{ borderRadius: "40px" }}
              >
               
                <center>
                  <h1 className="Login-login-tag" style={{ fontSize: "25px" }}>
                    Business Log In
                  </h1>
                </center>

                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        name="Email"
                        placeholder="name@example.com"
                        value={formData.Email}
                        onChange={handleInputChanges}
                      />
                    </FloatingLabel>
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
                      />
                      <Button
                        variant="light"
                        className="eye-button"
                        style={{ backgroundColor: "white", border: "none" }}
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
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
                  <div className="hr-with-text">
                    <hr className="hr" />
                    <span>Connect With</span>
                    <hr className="hr" />
                  </div>
                  <Row className="justify-content-center">
                    <Col xs={3}>
                      <Button
                        className="Login-Logos"
                        style={{ backgroundColor: "white", border: "none" }}
                      >
                        <img
                          src={google}
                          alt="Google"
                          style={{ width: "30px" }}
                        />
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        className="Login-Logos"
                        style={{ backgroundColor: "white", border: "none" }}
                      >
                        <img
                          src={apple}
                          alt="Apple"
                          style={{ width: "25px" }}
                        />
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        className="Login-Logos"
                        style={{ backgroundColor: "white", border: "none" }}
                      >
                        <img
                          src={twitter}
                          alt="Twitter"
                          style={{ width: "30px" }}
                        />
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        className="Login-Logos"
                        style={{ backgroundColor: "white", border: "none" }}
                      >
                        <img
                          src={facebook}
                          alt="Facebook"
                          style={{ width: "30px" }}
                        />
                      </Button>
                    </Col>
                  </Row>
                  <center>
                    <div
                      className="login-ForgetPassword"
                      onClick={() => {
                        handleNavigation("/BussinessForgetMobileVerification");
                      }}
                    >
                      <a>Forget password?</a>
                    </div>
                  </center>
                  <center>
                    <p style={{ marginTop: "10px" }}>
                      Didn't have an Account?{" "}
                      <a
                        onClick={handleSignUpPage}
                        className="login-ForgetPassword"
                      >
                        Sign Up
                      </a>
                    </p>
                  </center>
                </Card.Body>
              </Card>
            </center>
          </Col>
          <Col md={1} lg={1}></Col>
          <Col
            xs={0}
            md={5}
            lg={4}
            className="right-column  line2"
          >
            <Image
              src={loginMachineImage}
              alt="Washing Machine"
              className="login-Machine-Image BussineslOgin-Image"
            />
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </>
  );
}

export default BussinessLogin;
