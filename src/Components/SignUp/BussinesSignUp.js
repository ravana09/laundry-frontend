import React, { useState } from "react";
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
import BubbleAnimation from "../BubbleAnimation/BubbleAnimation";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../SignUp/Signup.css";

import loginMachineImage from "../Images/LaundryBUSSINESSiMAGE.png";
import symbol from "../Images/Symbol.jpeg";

function BussinesSignUp() {
  const [userData, setUserData] = useState({
    CompanyName: "",
    Email: "",
    MobileNumber: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChanges = (e) => {
    const { name, value } = e.target;

 

    const number = /^\d*$/;

    switch (name) {
      case "CompanyName":
        if (/^[A-Za-z\s]*$/.test(value)) {
          setUserData({ ...userData, [name]: value });
        }
        break;

      case "Email":
        setUserData({ ...userData, [name]: value });
        break;

      case "MobileNumber":
        if (value.length <= 10 && number.test(value)) {
          setUserData({ ...userData, [name]: value });
        }
        break;
      case "Password":
        if (value.length <= 8 && (number.test(value) || value === " ")) {
          setUserData({ ...userData, [name]: value });
        }
        break;
      case "ConfirmPassword":
        if (value.length <= 8 && (number.test(value) || value === " ")) {
          setUserData({ ...userData, [name]: value });
        }
        break;
      default:
        break;
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    navigate("/BussinessMobileVerification", {
      state: { redirectTo: "/BussinessLogin" },
    });
  };

  let navigate = useNavigate();
  const handleLoginPage = () => {
    navigate("/BussinessLogin");
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
            <span className="login-Company_name">Laund</span>
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
            <Card
              className="login-Inner-Card line"
              style={{ borderRadius: "40px" }}
            >
              <center>
                <h1 className="Login-login-tag">Business Sign Up </h1>
              </center>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Company Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="CompanyName"
                      value={userData.CompanyName}
                      placeholder="name@example.com"
                      onChange={(e) => handleChanges(e)}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      name="Email"
                      value={userData.Email}
                      onChange={(e) => handleChanges(e)} // Pass the event object
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingInput"
                    label="Mobile Number"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="MobileNumber"
                      value={userData.MobileNumber}
                      placeholder="name@example.com"
                      onChange={(e) => handleChanges(e)} // Pass the event object
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Password"
                    className="password-input-container mb-3"
                  >
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="Password"
                      value={userData.Password}
                      placeholder="Password"
                      onChange={(e) => handleChanges(e)} // Pass the event object
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

                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Confirm Password"
                    className="password-input-container"
                  >
                    <Form.Control
                      type="password"
                      name="ConfirmPassword"
                      value={userData.ConfirmPassword}
                      placeholder="ConfirmPassword"
                      onChange={(e) => handleChanges(e)} // Pass the event object
                    />
                  </FloatingLabel>

                  <Row>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                      <Button
                        type="submit"
                        className="Login-Submit-Button"
                        variant="info"
                        style={{ width: "80%" }}
                      >
                        Submit
                      </Button>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
                  </Row>
                </Form>

                <center>
                  <p>
                    Have an Account?{" "}
                    <a
                      onClick={handleLoginPage}
                      className="login-ForgetPassword"
                    >
                      Login
                    </a>
                  </p>
                </center>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={1}></Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            className="left-column Login-Container-left"
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

export default BussinesSignUp;
