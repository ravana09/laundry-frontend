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
import Swal from "sweetalert2";

import loginMachineImage from "../Images/LaundryBUSSINESSiMAGE.png";
import symbol from "../Images/symbol.jpg";

function BussinesSignUp() {

  let navigate=useNavigate()
  const [userData, setUserData] = useState({
    CompanyName: "",
    Email: "",
    MobileNumber: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberPattern = /^\d{10}$/;

    if (!userData.name) newErrors.name = "Name is required";
    if (!userData.email || !emailPattern.test(userData.email))
      newErrors.email = "Valid email is required";
    if (!userData.mobileNumber || !numberPattern.test(userData.mobileNumber))
      newErrors.mobileNumber = "Mobile number must be 10 digits";
    if (!userData.password) newErrors.password = "Password must be exactly 6 characters";
    if (userData.password !== userData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

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
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors in state

      const errorMessage = Object.values(validationErrors).join(", ");
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });

      Toast.fire({
        icon: "error",
        title: `Please fill all data`,
      });

      return;
    }

    setErrors({}); // Clear errors if validation passes

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

    Toast.fire({
      icon: "success",
      title: "Signup Successfully",
    });

    console.log("Form submitted");

    navigate("/MobileVerification", {
      state: { redirectTo: "/BussinessLogin" },
    });
  };

  const showErrorToast = (message) => {
    Swal.fire({
      icon: "error",
      title: message,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  const showSuccessToast = (message) => {
    Swal.fire({
      icon: "success",
      title: message,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    });
  };

  const handleLoginPage = () => {
    navigate("/BussinessLogin");
  };

  return (
    <>
      <Container fluid className="Login_Row" style={{ overflowY: "scroll" }}>
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
            className="d-flex align-items-end justify-content-end"
          >
            <span className="login-Company_name">Laund</span>
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
                     <Form.Control.Feedback type="invalid">
                      {errors.CompanyName}
                    </Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid">
                      {errors.Email}
                    </Form.Control.Feedback>
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
                     <Form.Control.Feedback type="invalid">
                      {errors.MobileNumber}
                    </Form.Control.Feedback>
            
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
                  <Form.Control.Feedback type="invalid">
                      {errors.Password}
                    </Form.Control.Feedback>

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
                    <Form.Control.Feedback type="invalid">
                      {errors.ConfirmPassword}
                    </Form.Control.Feedback>
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
          <Col md={1} lg={1}></Col>
          <Col
            xs={0}
            md={5}
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
