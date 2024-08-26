import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import { FaCamera } from "react-icons/fa";
import ProfileImg from "../Card/sampleImages/wallpapersden.com_monkey-d-luffy-alone-at-war_5120x2880.jpg";
import "../UserProfile/UserProfile.css";
import { useNavigate } from "react-router-dom";
import ProfileUodate from "../../Images/ProfileUpdate.png";
import Swal from "sweetalert2";

const Details = {
    user_name: "Jane Doe",
    email: "janedoe@example.com",
    phone_number: "987-654-3210",
    user_profile: ProfileImg,
  };

function EditUserProfile() {
  const [UserDetails, setUserDetails] = useState(Details);

  const handleChange=(e)=>{
    let {name,value}=e.target;
    setUserDetails({...UserDetails,[name]:value})

  }
  const handleUploadProfile=async()=>{
    const { value: file } = await Swal.fire({
        title: "Select image",
        input: "file",
        inputAttributes: {
          accept: "image/*",
          "aria-label": "Upload your profile picture",
        },
      });
  
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // Update the formData with the new profile image URL
          setUserDetails((prevData) => ({
            ...prevData,
            user_profile: e.target.result,
          }));
  
          // Show the uploaded image in the Swal dialog
          Swal.fire({
            title: "Your uploaded picture",
            imageUrl: e.target.result,
            imageAlt: "The uploaded picture",
          });
        };
        reader.readAsDataURL(file);
      }
  }
 

  const handleSubmit = () => {

  };

  return (
    <>
      <Container fluid className="UserProfile-container">
        <Card className="mb-4" style={{position:'absolute'}}>
          <Card.Body>
            <Row>
              <Col xs={12} sm={6} md={6} lg={6} className="text-center">
                {/* Profile Image */}
                <Card.Img
                  variant="top"
                  src={UserDetails.user_profile}
                  className="profile-image"
                />
                 <Image
                src={ProfileUodate}
                alt="Profile"
                name="CompanyProfile"
                onClick={handleUploadProfile}
                style={{
                    width: "50px",
                    position:'relative',
                    top:'42px',
                    right:"44px",
                    backgroundColor:'White',
                    padding:'5px',
                    borderRadius:'50%'

                }}
               
              />
              </Col>
              <Col xs={12} sm={6} md={6} lg={6}>
                <Form
                  className="BEditPage-Company-Form"
                  style={{ padding: "20px", borderRadius: "0px" }}
                >
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4}>
                       Name
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        name="user_name"
                        value={UserDetails.user_name}
                        onChange={handleChange}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4}>
                       Email
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="email"
                        name="email"
                        value={UserDetails.email}
                        onChange={handleChange}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4}>
                       Number
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        name="phone_number"
                        value={UserDetails.phone_number}
                        onChange={handleChange}
                      />
                    </Col>
                  </Form.Group>
                 
                  
                </Form>

              
                <Button onClick={handleSubmit}>Save</Button>
                <Button onClick={handleSubmit}>Cancel</Button>

                <Card.Title className="user-name">{UserDetails.user_name}</Card.Title>
              <Card.Text className="user-details">
                Email: {UserDetails.email}
              </Card.Text>
              <Card.Text className="user-details">
                Mobile Number: {UserDetails.phone_number}
              </Card.Text>
              <Card.Text className="user-details">
                Joined Date: 12.05.25
              </Card.Text>
              </Col>
              
            </Row>

           
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default EditUserProfile;
