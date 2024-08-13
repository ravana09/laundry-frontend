import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaCamera } from "react-icons/fa";
import ProfileImg from "../Card/sampleImages/wallpapersden.com_monkey-d-luffy-alone-at-war_5120x2880.jpg";
import'../UserProfile/UserProfile.css'

function UserProfile() {
  const [showUserDetails, setShowUserDetails] = useState(false);

  const userDetails = {
    user_name: "Jane Doe",
    email: "janedoe@example.com",
    phone_number: "987-654-3210",
    user_profile: "profile.jpg", // Example image URL
  };

  return (
    <Container fluid className="UserProfile-container">
      <Card className="mb-4">
        {/* Cover Image */}
        {/* <Card.Img variant="top" src={CoverImg} className="cover-image" /> */}
        <Card.Body>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6} className="text-center">
              {/* Profile Image */}
              <Card.Img
                variant="top"
                src={ProfileImg}
                className="profile-image"
              />
            </Col>
            <Col  xs={12} sm={6} md={6} lg={6}>
              {/* User Details */}
              <Card.Title className="user-name">{userDetails.user_name}</Card.Title>
              <Card.Text className="user-details">
                Email: {userDetails.email}
              </Card.Text>
              <Card.Text className="user-details">
                Mobile Number: {userDetails.phone_number}
              </Card.Text>
              <Card.Text className="user-details">
                Joined Date: 12.05.25
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserProfile;
