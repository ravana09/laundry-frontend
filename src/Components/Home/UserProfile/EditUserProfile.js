import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import { FaCamera } from "react-icons/fa";
import ProfileImg from "../Card/sampleImages/wallpapersden.com_monkey-d-luffy-alone-at-war_5120x2880.jpg";
import "../UserProfile/UserProfile.css";
import { useNavigate } from "react-router-dom";
import ProfileUpdateIcon from "../../Images/ProfileUpdate.png";
import Swal from "sweetalert2";

const initialDetails = {
    user_name: "Jane Doe",
    email: "janedoe@example.com",
    phone_number: "987-654-3210",
    user_profile: ProfileImg,
};

function EditUserProfile() {
    const [userDetails, setUserDetails] = useState(initialDetails);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleUploadProfile = async () => {
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
                setUserDetails((prevData) => ({
                    ...prevData,
                    user_profile: e.target.result,
                }));

                Swal.fire({
                    title: "Your uploaded picture",
                    imageUrl: e.target.result,
                    imageAlt: "The uploaded picture",
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        Swal.fire({
            title: 'Profile Updated',
            text: 'Your profile has been updated successfully.',
            icon: 'success',
        }).then(() => {
            navigate('/UserProfile');
        });
    };

    const handleCancel = () => {
        navigate('/UserProfile');
    };

    return (
        <Container fluid className="UserProfile-container d-flex justify-content-center align-items-center">
            <Card className="mb-4 EditUserPRofile-Card  "  >
                <Card.Body>
                    <Row>
                        
                        <Col xs={12} 
                        // sm={5} md={5} lg={5}
                         className="text-center">
                        
                            <Card.Img
                                variant="top"
                                src={userDetails.user_profile}
                                // style={{height:'18vh'}}
                                // className="profile-image"
                                style={{
                                    width:'100%',
                                    height:'25vh',
                                    objectFit:'cover'

                                }}
                            />
                            <Image
                                src={ProfileUpdateIcon}
                                alt="Update Profile"
                                onClick={handleUploadProfile}
                                style={{
                                    width: "10%",
                                    position: 'relative',
                                    top: '-30px', // Adjusted for better alignment
                                    right: "10px",
                                    backgroundColor: 'White',
                                    padding: '5px',
                                    borderRadius: '50%',
                                    cursor: 'pointer', // Added cursor pointer for better UX
                                }}
                            />
                            
                        </Col>
                        <Col xs={12}
                        //  sm={6} md={6} lg={6}
                         >
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
                                            value={userDetails.user_name}
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
                                            value={userDetails.email}
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
                                            value={userDetails.phone_number}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form>

                            <Button onClick={handleSubmit} className="me-2">Save</Button>
                            <Button onClick={handleCancel}>Cancel</Button>
                        </Col>
                        <Col xs={4} ></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default EditUserProfile;
