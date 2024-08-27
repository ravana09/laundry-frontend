import React, { useRef, useState } from "react";
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
import OnePIeceGif from "../Card/sampleImages/OnePieceGIf.gif";
import SuryaVideo from "../Card/sampleImages/SampleVIdeo.mp4";
import SampleVideo from "../Card/sampleImages/sampleVideo2.mp4";
import Location from "../../Images/LocationCircle.png";
import twitter from "../../Images/TwitterLogo.png";
import Edit from "../../Images/edit.png";
import Preview from "../../Images/Preview.png";
import ProfileUodate from "../../Images/ProfileUpdate.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function getMediasType(media) {
  // Check if media is a file object (from file input)
  if (media.file) {
    const extension = media.file.name.split(".").pop().toLowerCase();
    return getTypeFromExtension(extension);
  }

  // Otherwise, treat media as a URL string
  const extension = media.split(".").pop().split("?")[0].toLowerCase();
  return getTypeFromExtension(extension);
}

function getTypeFromExtension(extension) {
  if (["jpg", "jpeg", "png", "bmp"].includes(extension)) return "image";
  if (["gif"].includes(extension)) return "gif";
  if (["mp4", "webm", "ogg"].includes(extension)) return "video";
  return "unknown";
}

function getMediaType(file) {
  const extension = file.name.split(".").pop().toLowerCase();
  if (["jpg", "jpeg", "png", "bmp"].includes(extension)) return "image";
  if (["gif"].includes(extension)) return "gif";
  if (["mp4", "webm", "ogg"].includes(extension)) return "video";
  return "unknown";
}

function BussinesEditPage() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const buttonStyle = {
    padding: "5px 10px",
    backgroundColor: "Transparent",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const [isEditing, setIsEditing] = useState(false);
  const [isLeaveChecked, setIsLeaveChecked] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: "Company Name",
    CompanyProfile: [ProfileImg],
    description:
      "Our mission is to revolutionize the industry with cutting-edge technology. We are committed to delivering exceptional value and innovation through our products and services.",
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
    images: [img1, OnePIeceGif, SuryaVideo, SampleVideo],
    media: [],
    instagram: "https://www.instagram.com/",
    twitter: "https://x.com/twitt_login?lang=en",
  });

  const visibleImages = formData.media;

  const [formDataCopy, setFormDataCopy] = useState(formData);
  const description = formData.description;
  const words = description.split(" ");
  const maxWords = 25;
  const isLongDescription = words.length > maxWords;
  const displayedText = isExpanded
    ? description
    : words.slice(0, maxWords).join(" ") + "...";

  const handleToggle = (event) => {
    event.preventDefault(); // Prevent default link behavior
    setIsExpanded(!isExpanded);
  };
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
    const newMedia = files.map((file) => ({
      file,
      type: getMediaType(file),
    }));

    setFormData((prev) => ({
      ...prev,
      media: [...prev.media, ...newMedia],
    }));
  };

  console.log(formData);

  const handleImageDelete = (index) => {
    setFormData((prev) => ({
      ...prev,
      media: prev.media.filter((_, i) => i !== index),
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
        // Update the formData with the new profile image URL
        setFormData((prevData) => ({
          ...prevData,
          CompanyProfile: e.target.result,
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
              src={formData.CompanyProfile}
              className="BEditPage-Company-img"
            />
            {isEditing && (
              <Image
                src={ProfileUodate}
                alt="Profile"
                name="CompanyProfile"
                onClick={handleUploadProfile}
                className="BEditFront-edit-profile"
              />
            )}
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
                <Col xs={6} className="d-flex justify-content-end">
                  {!isEditing && (
                    <Button
                      variant="outline-info"
                      style={{
                        color: "black",
                        display: "flex",
                        alignItems: "center",
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
            <Card.Body
              style={{ padding: "0px", margin: "0px", borderRadius: "0px" }}
            >
              {isEditing ? (
                <div style={{ borderRadius: "0px" }}>
                  <Form
                    className="BEditPage-Company-Form"
                    style={{ padding: "20px", borderRadius: "0px" }}
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
                        About Company
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          name="description"
                          value={formDataCopy.description}
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
                    <div>
                      <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={4}>
                          Upload Media (Images)
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={4}>
                          Upload Media (Videos)
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="file"
                            accept="video/*"
                            multiple
                            onChange={handleImageChange}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={4}>
                          Media Preview
                        </Form.Label>
                        <Col sm={8}>
                          <div className="media-preview">
                            {formData.media?.map((mediaItem, index) => (
                              <div
                                key={index}
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  marginRight: "10px",
                                }}
                              >
                                {mediaItem.type === "image" ||
                                mediaItem.type === "gif" ? (
                                  <img
                                    src={
                                      mediaItem.file
                                        ? URL.createObjectURL(mediaItem.file)
                                        : mediaItem
                                    } // Handle file and URL cases
                                    alt={`Media ${index + 1}`}
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      objectFit: "cover",
                                      border: "2px solid white",
                                      borderRadius: "10px",
                                    }}
                                  />
                                ) : (
                                  <video
                                    src={
                                      mediaItem.file
                                        ? URL.createObjectURL(mediaItem.file)
                                        : mediaItem
                                    } // Handle file and URL cases
                                    controls
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      objectFit: "cover",
                                      // border: "2px solid white",
                                      borderRadius: "10px",
                                    }}
                                  />
                                )}
                                <button
                                  style={{
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                    borderRadius: "50%",
                                    padding: "0.2rem 0.5rem",
                                    fontSize: "0.75rem",
                                    backgroundColor: "#f44336",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => handleImageDelete(index)}
                                >
                                  X
                                </button>
                              </div>
                            ))}
                          </div>
                        </Col>
                      </Form.Group>
                    </div>

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
                  <Card style={{ padding: "20px" }}>
                    {/* <strong>Photos:</strong> */}
                    <Slider {...settings}>
                      {formData.images.map((media, index) => {
                        const type = getMediasType(media);

                        return (
                          <div key={index} style={{ position: "relative" }}>
                            {type === "image" || type === "gif" ? (
                              <Image
                                src={media}
                                alt={`Media ${index + 1}`}
                                fluid
                                style={{
                                  width: "100%",
                                  height: "180px",
                                  objectFit: "cover",
                                  border: "2px solid white",
                                  borderRadius: "10px",
                                }}
                              />
                            ) : type === "video" ? (
                              <video
                              src={media}
                              controls
                              style={{
                                width: "100%",
                                height: "180px",
                                objectFit: "cover",
                                border: "2px solid white",
                                borderRadius: "10px",
                              }}
                            />
                              // <div
                              //   className="video-container"
                              //   style={{
                              //     position: "relative",
                              //     width: "100%",
                              //     height: "200px",
                              //   }}
                              // >
                              //   <video
                              //     ref={videoRef}
                              //     src={media}
                              //     style={{
                              //       width: "100%",
                              //       height: "100%",
                              //       objectFit: "cover",
                              //       border: "2px solid white",
                              //       borderRadius: "10px",
                              //     }}
                              //   />
                              //   <div
                              //     className="controls"
                              //     style={{
                              //       position: "absolute",
                              //       bottom: "10px",
                              //       left: "10px",
                              //       display: "flex",
                              //       gap: "10px",
                              //     }}
                              //   >
                              //     <button
                              //       onClick={togglePlay}
                              //       style={buttonStyle}
                              //     >
                              //       {isPlaying ? "Pause" : "Play"}
                              //     </button>
                              //     <button
                              //       onClick={toggleMute}
                              //       style={buttonStyle}
                              //     >
                              //       {isMuted ? "Unmute" : "Mute"}
                              //     </button>
                              //   </div>
                              // </div>
                            ) : (
                              <div>Unsupported media type</div>
                            )}
                          </div>
                        );
                      })}
                    </Slider>
                  
                    <Card.Text style={{ marginTop: "20px" }}>
                     <h6>Description:</h6> {displayedText}
                    </Card.Text>
                    {isLongDescription && (
                      <a href="#" onClick={handleToggle}>
                        {isExpanded ? "Show Less" : "Show More"}
                      </a>
                    )}
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
