import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ProfileImg from "../Card/sampleImages/wallpapersden.com_monkey-d-luffy-alone-at-war_5120x2880.jpg";
import ProfileUpdateIcon from "../../Images/ProfileUpdate.png";

const initialDetails = {
  user_name: "Jane Doe",
  email: "janedoe@example.com",
  phone_number: "987-654-3210",
  user_profile: ProfileImg,
};

function EditUserProfile() {
  const [userDetails, setUserDetails] = useState(initialDetails);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const { user_name, email, phone_number } = userDetails;

    if (!user_name.trim()) {
      newErrors.user_name = "Name is required.";
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email format.";
    }

    if (!phone_number.match(/^\d{10}$/)) {
      newErrors.phone_number = "Phone number must be 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
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
        icon: "success",
        title: `Signed in successfully`,
      }).then(() => {
        navigate("/UserProfile");
      });
    }
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

  const handleCancel = () => {
    navigate("/UserProfile");
  };

  return (
    <Container
      fluid
      className="UserProfile-container d-flex justify-content-center align-items-center"
    >
      <Card className="mb-4 EditUserPRofile-Card">
        <Card.Body>
          <Row>
            <Col xs={12} className="text-center">
              <Card.Img
                variant="top"
                src={userDetails.user_profile}
                style={{
                  width: "100%",
                  height: "25vh",
                  objectFit: "cover",
                }}
              />
              <Image
                src={ProfileUpdateIcon}
                alt="Update Profile"
                onClick={handleUploadProfile}
                style={{
                  width: "10%",
                  position: "relative",
                  top: "-30px",
                  right: "10px",
                  backgroundColor: "White",
                  padding: "5px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </Col>
            <Col xs={12}>
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
                      isInvalid={!!errors.user_name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.user_name}
                    </Form.Control.Feedback>
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
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
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
                      isInvalid={!!errors.phone_number}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone_number}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Form>
              <div>
                <center>
                  <Button
                    onClick={handleSubmit}
                    className="me-2"
                    style={{ paddingRight: "20px", paddingLeft: "20px" }}
                  >
                    Save
                  </Button>
                  <Button onClick={handleCancel} className="me-2">
                    Cancel
                  </Button>
                </center>
              </div>
            </Col>
            <Col xs={4}></Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EditUserProfile;
