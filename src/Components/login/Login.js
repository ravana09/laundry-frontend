import React from "react";
import "../login/Login.css";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import loginMachineImage from "../Images/login-washing-machine-image.png";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import facebook from "../Images/facebook.png"


function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <Container fluid>
        <Row className="Login_Row">
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className="left-column Login-Container"
          >
            <Row>
              <Col xs={8} sm={8} md={12} lg={12} xl={12}>
                <center>
                  <h1>Welcome Back!</h1>
                </center>
              </Col>
              <Col xs={4} sm={4} md={12} lg={12} xl={12}>
                <Image
                  src={loginMachineImage}
                  alt="Illustration of a washing machine for login"
                  className="login-page-Image"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="right-column">
            <div className="Login-Card">
              <Card style={{ width: "35rem" }}>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Control type="email" placeholder="E-Mail" />
                    <Form.Control type="password" placeholder=" ********" />

                    <Button type="submit">Submit</Button>
                  </Form>
                  <h6>Forget password?</h6>
                  <div class="hr-with-text">
                    <hr class="hr" />
                    <span>Connect With</span>
                    <hr class="hr" />
                  </div>
                  <div>
                    <Button className="Login-Logos" style={{backgroundColor:"white "}}><FcGoogle className="Login-Logos" /></Button>
                    <Button className="Login-Logos" ><SiApple /></Button>
                    <Button className="Login-Logos"><FaXTwitter /></Button>
                    <Button className="Login-Logos"><img  style={{width:'30px'}} src={facebook} alt ="facebook Image"/></Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
