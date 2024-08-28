import React, { useState, useEffect } from "react";
import "../login/Login.css";
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
import loginMachineImage from "../Images/login-washing-machine-image.png";
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

function Login() {
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
    // Cookies.remove("AccountType");
    Cookies.set("AccountType", "user", { expires: 684 });
    Cookies.set("AccountToken", "USerTokenpoiuytrewq", { expires: 684 });

    setTimeout(() => {
      if (Cookies.get("AccountType") === "user") {
        navigate("/CompanyCard");
        window.location.reload();
      } else {
        console.error("Failed to set AccountType cookie.");
      }
    }, 100);
  };

  const handleSignUpPage = () => {
    navigate("/SignUpPage");
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
          <Col xs={4} sm={4} md={9} >
            <Image src={symbol} className="login-Company-Symbol" />
          </Col>
          <Col
            xs={4}
            sm={4}
            md={3}
            
            className="d-flex align-items-center justify-content-end "
          >
            <Col xs={5}>
              {isMac ? (
                <a
                  href="https://apps.apple.com/us/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "10px" }}
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
            </Col>
            <Col xs="auto">
              <Button
                className="animated-button"
                onClick={() => {
                  handleNavigation("/BussinessLogin");
                }}
              >
                <Image
                  src={Bussiness}
                  alt="For Business"
                  className="business-icon"
                />
                <span className="download-text">For Business</span>
              </Button>
            </Col>
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
          <Col lg={2}></Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            className="left-column Login-Container-left line  "
          >
            <div className="">
              <Image
                src={loginMachineImage}
                alt="Washing Machine"
                className="login-Machine-Image "
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={5} className="right-column">
            <Card
              className="login-Inner-Card line2"
              style={{ borderRadius: "40px" }}
            >
              <center>
                <h1 className="Login-login-tag" style={{ fontSize: "25px" }}>
                  Log In
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
                      <img src={apple} alt="Apple" style={{ width: "25px" }} />
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
                  {/* UserForgetMobileVerification */}
                  <div
                    className="login-ForgetPassword"
                    onClick={() => {
                      handleNavigation("/UserForgetMobileVerification");
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
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
