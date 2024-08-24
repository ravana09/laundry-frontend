import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import ProfileImg from "../../Images/BussinessProfile.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../BussinesProfile/BusinessEditPage.css";
import img1 from "../Card/sampleImages/luffy-3200-x-1800-picture-ao6tt30yuxjuvjlk.jpg";
import img2 from "../Card/sampleImages/sanji-and-one-piece-zoro-4k-99b5u5n1oeu8tqja.jpg";
import img3 from "../Card/sampleImages/wallpaperflare.com_wallpaper (1).jpg";
import Location from "../../Images/LocationCircle.png";
import twitter from "../../Images/TwitterLogo.png";
import Edit from "../../Images/edit.png";
import Preview from "../../Images/Preview.png";
import { useNavigate } from "react-router-dom";

function BussinesEditPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLeaveChecked, setIsLeaveChecked] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [formData, setFormData] = useState({
    name: "Company Name",
    address: "123 Business Avenue, City, Country",
    email: "email@gmail.com",
    contact: "9630258741",
    website: "https://example.com",
    yearOfEstablishment: "1947",
    weekdaysStartTime: "09:00",
    weekdaysEndTime: "18:00",
    saturdayStartTime: "10:00",
    saturdayEndTime: "16:00",
    sundayStartTime: "00:00",
    sundayEndTime: "00:00",
    sundayLeave: " ",
    selectedDay: "",
    images: [img1, img2, img3, img1, img2, img3], // image URLs go here
    instagram: "https://www.instagram.com/",
    twitter: "https://x.com/twitt_login?lang=en",
  });

  const [formDataCopy, setFormDataCopy] = useState(formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormDataCopy((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setFormData(formDataCopy);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormDataCopy(formData);
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setFormDataCopy((prev) => ({
      ...prev,
      images: [...prev.images, ...imageUrls],
    }));
  };

  const handleImageDelete = (index) => {
    setFormDataCopy((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleCheckboxChange = () => {
    setIsLeaveChecked(!isLeaveChecked);
    setSelectedDay(""); // Reset selected day when checkbox is toggled
  };

  const handleSelect = (eventKey) => {
    setSelectedDay(eventKey);
    setFormDataCopy((prev) => ({
      ...prev,
      selectedDay: eventKey,
    }));
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let navigate = useNavigate();
  const handlePreview = () => {
    navigate("/Onecard");
  };

  return (
    <Container
      fluid
      className="UserProfile-container"
      style={{ marginTop: "10vh" }}
    >
      <Row>
        <Col xs={12} md={4}>
          <Card
            className="BEditPage-Company-Card"
            style={{ backgroundColor: "white" }}
          >
            <Card.Img
              variant="top"
              src={ProfileImg}
              className="BEditPage-Company-img"
            />
            <Card.Body>
              <Card.Title className="BEditFront-Title">
                {formData.name}
              </Card.Title>
              <Card.Text>
                {" "}
                <Image
                  src={Location}
                  style={{ width: "40px", marginRight: "5px" }}
                />
                {formData.address}
              </Card.Text>
              <div className="social-links">
                {formData.instagram && (
                  <a
                    href={formData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                      alt="Instagram"
                      className="social-icon"
                    />
                    Instagram
                  </a>
                )}
                {formData.twitter && (
                  <a
                    href={formData.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img src={twitter} alt="Twitter" className="social-icon" />
                    Twitter
                  </a>
                )}
              </div>
              <Row>
                <Col xs={6} className="d-flex justify-content-center">
                  {!isEditing && (
                    <Button
                      variant="outline-info"
                      style={{
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        // gap: '5px',
                      }}
                      onClick={handleEdit}
                    >
               
                      Edit Profile
                    </Button>
                  )}
                </Col>
                <Col xs="auto" className="d-flex justify-content-start ">
                  <Button
                    variant="outline-info"
                    style={{
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                    onClick={handlePreview}
                  >
            
                    Preview
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={8}>
          <Card
            style={{
              backgroundColor: "transparent",
              border: "none",
              padding: "0px",
              marginTop: "3vh",
            }}
          >
            <Card.Body style={{ padding: "0px", margin: "0px" ,borderRadius:'0px'}}>
              {isEditing ? (
                <div style={{ borderRadius:'0px' }}>
                  <Form
                    className="BEditPage-Company-Form"
                    style={{ padding: "20px",borderRadius:'0px' }}
                  >
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Company Name
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formDataCopy.name}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Address
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          name="address"
                          value={formDataCopy.address}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Contact
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          name="contact"
                          value={formDataCopy.contact}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Official Website
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          name="website"
                          value={formDataCopy.website}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Year of Establishment
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          name="yearOfEstablishment"
                          value={formDataCopy.yearOfEstablishment}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>
                    {/* Weekdays Timing */}
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Weekdays Timing
                      </Form.Label>
                      <Col sm={4}>
                        <Form.Control
                          type="time"
                          name="weekdaysStartTime"
                          value={formDataCopy.weekdaysStartTime}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col sm={4}>
                        <Form.Control
                          type="time"
                          name="weekdaysEndTime"
                          value={formDataCopy.weekdaysEndTime}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Col sm={4}>
                        <Form.Check
                          type="checkbox"
                          label="Any leave in weekdays?"
                          checked={isLeaveChecked}
                          onChange={handleCheckboxChange}
                        />
                      </Col>
                      <Col sm={4}>
                        {isLeaveChecked && (
                          <DropdownButton
                            id="dropdown-weekday-selector"
                            title={selectedDay ? selectedDay : "Select a day"}
                            onSelect={handleSelect}
                            className="mt-2"
                          >
                            <Dropdown.Item eventKey="Monday">
                              Monday
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Tuesday">
                              Tuesday
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Wednesday">
                              Wednesday
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Thursday">
                              Thursday
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Friday">
                              Friday
                            </Dropdown.Item>
                          </DropdownButton>
                        )}
                      </Col>
                    </Form.Group>

                    {/* Saturday Timing */}
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Saturday Timing
                      </Form.Label>
                      <Col sm={4}>
                        <Form.Control
                          type="time"
                          name="saturdayStartTime"
                          value={formDataCopy.saturdayStartTime}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col sm={4}>
                        <Form.Control
                          type="time"
                          name="saturdayEndTime"
                          value={formDataCopy.saturdayEndTime}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>
                    {/* Sunday Timing */}
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Sunday Timing
                      </Form.Label>
                      <Col sm={2}>
                        <Form.Check
                          type="checkbox"
                          label="Leave"
                          name="sundayLeave"
                          checked={formDataCopy.sundayLeave}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col sm={3}>
                        <Form.Control
                          type="time"
                          name="sundayStartTime"
                          value={formDataCopy.sundayStartTime}
                          onChange={handleChange}
                          disabled={formDataCopy.sundayLeave} // Disable input if "Leave" is checked
                        />
                      </Col>
                      <Col sm={3}>
                        <Form.Control
                          type="time"
                          name="sundayEndTime"
                          value={formDataCopy.sundayEndTime}
                          onChange={handleChange}
                          disabled={formDataCopy.sundayLeave} // Disable input if "Leave" is checked
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Instagram URL
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="url"
                          name="instagram"
                          value={formDataCopy.instagram}
                          onChange={handleChange}
                          placeholder="https://instagram.com/yourprofile"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Twitter URL
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="url"
                          name="twitter"
                          value={formDataCopy.twitter}
                          onChange={handleChange}
                          placeholder="https://twitter.com/yourprofile"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Upload Images
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="file"
                          name="images"
                          accept="image/*"
                          multiple
                          onChange={handleImageChange}
                        />
                      </Col>
                    </Form.Group>
                    {/* Image Preview */}
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Image Preview
                      </Form.Label>
                      <Col sm={8}>
                        <div className="image-preview">
                          {formDataCopy.images.map((image, index) => (
                            <div
                              key={index}
                              style={{
                                position: "relative",
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <img
                                src={image}
                                alt={`Preview ${index + 1}`}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  objectFit: "cover",
                                  marginRight: "10px",
                                }}
                              />
                              <Button
                                variant="danger"
                                size="xs"
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  right: "0",
                                  borderRadius: "50%",
                                  padding: "0.2rem 0.5rem",
                                  fontSize: "0.75rem",
                                }}
                                onClick={() => handleImageDelete(index)}
                              >
                                X
                              </Button>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Form.Group>
                    <Button
                      variant="primary"
                      onClick={handleSave}
                      className="me-2"
                    >
                      Save
                    </Button>
                    <Button variant="secondary" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </Form>
                </div>
              ) : (
                <>
                  <Card style={{ padding: "20px"}}>
                    <Card.Title className="BEditFront-Title">
                      {formData.name}
                    </Card.Title>
                    <strong>Photos:</strong>
                    <Slider {...settings}>
                      {formData.images.map((image, index) => (
                        <div key={index} style={{ position: "relative" }}>
                          <img
                            src={image}
                            alt={`Company Image ${index + 1}`}
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "cover",
                              border: "2px solid white",
                              borderRadius: "10px",
                            }}
                          />
                        </div>
                      ))}
                    </Slider>
                  </Card>

                  <div className="details-card">
                    <div className="details-item">
                      <div className="details-label">
                        <strong>Contact:</strong>
                      </div>
                      <div className="details-value">{formData.contact}</div>
                    </div>
                    <div className="details-item">
                      <div className="details-label">
                        <strong>Business Timing (Weekdays):</strong>
                      </div>
                      <div className="details-value">
                        {formData.weekdaysStartTime} -{" "}
                        {formData.weekdaysEndTime}
                      </div>
                    </div>

                    {formData.selectedDay.length !== 0 && (
                      <div className="details-item">
                        <div className="details-label">
                          <strong>Leave of Weekdays</strong>
                        </div>
                        <div className="details-value">
                          {formData.selectedDay}
                        </div>
                      </div>
                    )}

                    <div className="details-item">
                      <div className="details-label">
                        <strong>Business Timing (Saturday):</strong>
                      </div>
                      <div className="details-value">
                        {formData.saturdayStartTime} -{" "}
                        {formData.saturdayEndTime}
                      </div>
                    </div>
                    <div className="details-item">
                      <div className="details-label">
                        <strong>Business Timing (Sunday):</strong>
                      </div>
                      <div className="details-value">
                        {formData.sundayLeave
                          ? "Leave"
                          : `${formData.sundayStartTime} - ${formData.sundayEndTime}`}
                      </div>
                    </div>
                    <div className="details-item">
                      <div className="details-label">
                        <strong>Official Website:</strong>
                      </div>
                      <div className="details-value">
                        <a
                          href={formData.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {formData.website}
                        </a>
                      </div>
                    </div>
                    <div className="details-item">
                      <div className="details-label">
                        <strong>Year of Establishment:</strong>
                      </div>
                      <div className="details-value">
                        {formData.yearOfEstablishment}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BussinesEditPage;
