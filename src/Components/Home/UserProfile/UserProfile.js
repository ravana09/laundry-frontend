import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaCamera } from "react-icons/fa";
import ProfileImg from "../Card/sampleImages/wallpapersden.com_monkey-d-luffy-alone-at-war_5120x2880.jpg";
import "../UserProfile/UserProfile.css";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const [showUserDetails, setShowUserDetails] = useState(false);

  const userDetails = {
    user_name: "Jane Doe",
    email: "janedoe@example.com",
    phone_number: "987-654-3210",
    user_profile: ProfileImg,
  };
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/EditUserProfile");
  };

  return (
    <Container
      fluid
      className="UserProfile-container d-flex justify-content-center align-items-center"
    >
      <Card className="mb-4 UserProfile-Card" style={{width:'50%'}}>
        <Card.Body>
          <Row>
            <Col xs={12} className="text-center">
              {/* Profile Image */}
              <Card.Img
                variant="top"
                src={ProfileImg}
                style={{
                  width:'100%',
                  height:'25vh',
                  objectFit:'cover'

              }}
              />
            </Col>
            <Col xs={12}>
            <Card style={{marginTop:'10px'}}>
              <Card.Body>
              <Form
                className="BEditPage-Company-Form"
                style={{ borderRadius: "0px" }}
              >
                <Form.Group as={Row} className="">
                  {/* <Form.Label column sm={4}>
                                        Name
                                    </Form.Label> */}
                  <center>
                    <Col xs={12}>
                      <Form.Text className="user-name ">
                        Profile Details
                      </Form.Text>
                    </Col>
                  </center>
                </Form.Group>
                <Form.Group as={Row} className="">
                  <Form.Label column xs={6} className=" ProfileFormLabel" >
                   <span> Name :</span> 
                  </Form.Label>

                  <Col xs={6}>
                    <Form.Text className="user-details ProfileFormText ">
                      {userDetails.user_name}
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="">
                  <Form.Label column xs={6} className="ProfileFormLabel ">
                    Email :
                  </Form.Label>

                  <Col xs={6}>
                    <Form.Text className="user-details ProfileFormText ProfileFormEmail   ">
                      {userDetails.email}
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className=" ">
                  <Form.Label column xs={6} className="ProfileFormLabel ">
                    Mobile Number :
                  </Form.Label>

                  <Col xs={6}>
                    <Form.Text className="user-details ProfileFormText ">
                      {userDetails.phone_number}
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="">
                  <Form.Label column xs={6} className="ProfileFormLabel ">
                    Joined Date :
                  </Form.Label>

                  <Col xs={6}>
                    <Form.Text className="user-details  ProfileFormText">12.05.25</Form.Text>
                  </Col>
                  <center>
                  <Button onClick={handleNavigate} className="ProfileButton" style={{width:'20%'}} >Edit</Button>
                  </center>
                </Form.Group>
              </Form>
              </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserProfile;
