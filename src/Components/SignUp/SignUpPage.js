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
import "../SignUp/Signup.css"; // Importing CSS file

import loginMachineImage from "../Images/login-washing-machine-image.png";
import symbol from "../Images/symbol.jpg";
import Swal from "sweetalert2";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberPattern = /^\d{10}$/;

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !emailPattern.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.mobileNumber || !numberPattern.test(formData.mobileNumber))
      newErrors.mobileNumber = "Mobile number must be 10 digits";
    if (!formData.password) newErrors.password = "Password must be exactly 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const number = /^\d*$/;

    switch (name) {
      case "name":
        if (/^[A-Za-z\s]*$/.test(value)) {
          setFormData({ ...formData, [name]: value });
        }
        break;

      case "email":
        setFormData({ ...formData, [name]: value });
        break;

      case "mobileNumber":
        if (value.length <= 10 && number.test(value)) {
          setFormData({ ...formData, [name]: value });
        }
        break;

      case "password":
      case "confirmPassword":
        if (value.length <= 8 && (number.test(value) || value === " ")) {
          setFormData({ ...formData, [name]: value });
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

  const handleLoginPage = () => {
    navigate("/");
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
            className="left-column Login-Container-left"
          >
            <Image
              src={loginMachineImage}
              alt="Washing Machine"
              className="login-Machine-Image"
            />
          </Col>
          <Col xs={12} md={6} lg={5} className="right-column">
            <Card
              className="login-Inner-Card line"
              style={{ borderRadius: "40px" }}
            >
              <center>
                <h1 className="Login-login-tag">Sign Up </h1>
              </center>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => {
                        // Allow only numbers and limit to 10 digits
                        if (/^[A-Za-z\s]*$/.test(e.target.value)) {
                          handleChange(e);
                        }
                      }}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
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
                      name="email"
                      value={formData.email}
                      onChange={(e)=>{handleChange(e)}}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingInput"
                    label="Mobile Number"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text" // Changed to 'text' to use maxLength
                      placeholder="Mobile Number"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      // onChange={(e) => {
                       
                      //   if (/^\d{0,10}$/.test(e.target.value)) {
                      //     handleChange(e);
                      //   }
                      // }}
                      onChange={(e)=>{handleChange(e)}}
                      isInvalid={!!errors.mobileNumber}
                      maxLength={10} // Enforces maximum length of 10 characters
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.mobileNumber}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Password"
                    className="password-input-container mb-3"
                  >
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={(e)=>{handleChange(e)}}
                      isInvalid={!!errors.password}
                      maxLength={8}
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
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={(e)=>{handleChange(e)}}
                      isInvalid={!!errors.confirmPassword}
                      maxLength={8}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
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
          <Col lg={1}></Col>
        </Row>
      </Container>
    </>
  );
}

export default SignUpPage;
