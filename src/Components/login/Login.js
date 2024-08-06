import React, { useState } from "react";
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
import twitter from "../Images/TwitterLogo.png";
import facebook from "../Images/facebook.png";
import BubbleAnimation from "../BubbleAnimation/BubbleAnimation";
import symbol from "../Images/Symbol.jpeg";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <Container fluid className="Login_Row">
        <BubbleAnimation />
        <Row className="justify-content-end" style={{ borderBottom: "2px solid white" }}>
          <Col xs={4} sm={4} md={8} lg={8} xl={8}>
            <Image src={symbol} className="login-Company-Symbol" />
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}className="d-flex align-items-center justify-content-end">
            <span className="login-Company_name">Laund</span>
          </Col>
          <Col xs={4}>
          <Image src={loginMachineImage} alt="Washing Machine" className="loginheader-Machine-Image" />
          </Col >
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col xs={12} md={6} lg={4} className="left-column Login-Container-left">
            <Image src={loginMachineImage} alt="Washing Machine" className="login-Machine-Image" />
          </Col>
          <Col xs={12} md={6} lg={5} className="right-column">
            <Card className="login-Inner-Card">
              <center>
                <h1 className="Login-login-tag">Log in</h1>
              </center>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password" className="password-input-container">
                    <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" />
                    <Button variant="light" className="eye-button" onClick={togglePasswordVisibility}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </FloatingLabel>
                  <Row>
                    <Col xs={4}></Col>
                    <Col xs={4}>
                      <Button type="submit" className="Login-Submit-Button" variant="outline-info">
                        Submit
                      </Button>
                    </Col>
                    <Col xs={4}></Col>
                  </Row>
                </Form>
                <div className="hr-with-text">
                  <hr className="hr" />
                  <span>Connect With</span>
                  <hr className="hr" />
                </div>
                <Row className="justify-content-center">
                  <Col xs={3}>
                   <Button className="Login-Logos" style={{ backgroundColor: "white",border:'none' }}>
                      <img src={google} alt="Google" style={{ width: "30px" }} />
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button className="Login-Logos" style={{ backgroundColor: "white",border:'none' }}>
                      <img src={apple} alt="Apple" style={{ width: "25px" }} />
                    </Button>
                  </Col>
                  <Col xs={3}>
                   <Button className="Login-Logos" style={{ backgroundColor: "white",border:'none' }}>
                      <img src={twitter} alt="Twitter" style={{ width: "30px" }} />
                    </Button>
                  </Col>
                  <Col xs={3}>
                   <Button className="Login-Logos" style={{ backgroundColor: "white",border:'none' }}>
                      <img src={facebook} alt="Facebook" style={{ width: "30px" }} />
                    </Button>
                  </Col>
                </Row>
                <center>
                  <a className="login-ForgetPassword">Forget password?</a>
                </center>
                <center>
                  <p>
                    Didn't have an Account? <a className="login-ForgetPassword">Sign Up</a>
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
