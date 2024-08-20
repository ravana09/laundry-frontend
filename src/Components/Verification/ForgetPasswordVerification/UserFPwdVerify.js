import React, { useRef, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import loginMachineImage from "../../Images/login-washing-machine-image.png";
import symbol from "../../Images/symbol.jpg";
import BubbleAnimation from "../../BubbleAnimation/BubbleAnimation";

function UserFPwdVerify() {
  const [userData, setUserData] = useState({
    mobileNumber: "",
  });
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [showOtpCard, setShowOtpCard] = useState(false);
  const inputs = useRef([]);



  const handleMobileNumber = (e) => {
    const { name, value } = e.target;
    const number = /^\d*$/;

    if (name === "mobileNumber") {
      if (value.length <= 10 && number.test(value)) {
        setUserData({ ...userData, [name]: value });
      }
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1 && value !== "") {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    const correctOtp = "1234";

    if (enteredOtp === correctOtp) {
      console.log("OTP verified successfully");
      navigate('/UserForgetPassword');
    } else {
      console.log("Incorrect OTP");
      alert("Incorrect OTP");
    }
  };

  const handleSendOtp = () => {
    setShowOtpCard(true);
  };

  return (
    <>
      <Container
        fluid
        className="Login_Row"
        style={{ width: "100vw", height: "100vh" }}
      >
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
          <Col xs={12} md={6} lg={5} className="right-column line2 ">
            {!showOtpCard ? (
              <Card
                className="login-Inner-Card "
                style={{
                  borderRadius: "40px",
                  height: "max-content",
                  marginTop: "20vh",
                }}
              >
                <center>
                  <h1 className="Login-login-tag">Send OTP</h1>
                </center>
                <Card.Body>
                  <Form>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Mobile Number"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        name="mobileNumber"
                        value={userData.mobileNumber}
                        placeholder="+98765432100"
                        onChange={(e) => handleMobileNumber(e)}
                      />
                    </FloatingLabel>
                    <Button
                      onClick={handleSendOtp}
                      className="Login-Submit-Button"
                      variant="info"
                      style={{ width: "80%" }}
                    >
                      Send OTP
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            ) : (
              <Card
                className="login-Inner-Card "
                style={{
                  borderRadius: "40px",
                  height: "max-content",
                  marginTop: "20vh",
                }}
              >
                <center>
                  <h1 className="Login-login-tag">Verify</h1>
                </center>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formOtp">
                      <Form.Label className="otp-header">
                        Enter Your OTP
                      </Form.Label>
                      <div className="otp-inputs">
                        {otp.map((digit, index) => (
                          <Form.Control
                            key={index}
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            maxLength="1"
                            className="otp-input"
                            ref={(el) => (inputs.current[index] = el)}
                            style={{
                              backgroundColor: "skyBlue",
                              fontSize: "30px",
                              fontWeight: "500",
                              caret: "none",
                              width: "50px",
                            }}
                          />
                        ))}
                      </div>
                    </Form.Group>
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
                </Card.Body>
              </Card>
            )}
          </Col>

          <Col lg={1}></Col>
        </Row>
      </Container>
    </>
  );
}

export default UserFPwdVerify;
