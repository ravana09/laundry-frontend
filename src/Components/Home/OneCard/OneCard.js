import React, { useEffect, useRef, useState } from "react";
import "../OneCard/OneCard.css";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import img1 from "../Card/sampleImages/luffy-3200-x-1800-picture-ao6tt30yuxjuvjlk.jpg";
import img2 from "../Card/sampleImages/sanji-and-one-piece-zoro-4k-99b5u5n1oeu8tqja.jpg";
import img3 from "../Card/sampleImages/wallpaperflare.com_wallpaper (1).jpg";
import OnePIeceGif from "../Card/sampleImages/OnePieceGIf.gif";
import SuryaVideo from "../Card/sampleImages/SampleVIdeo.mp4";
import emptyHeart from "../../Images/EmptyHeart.png";
import redHeart from "../../Images/heart.png";
import { FaLocationDot, FaUsers } from "react-icons/fa6";
import star from "../../Images/Star.png";
import Location from "../../Images/LocationCircle.png";
import Whatsapp from "../../Images/GreenWhatsapp.png";
import Laundry from "../../Images/ServicesLaundey.png";
import DryCleaning from "../../Images/ServicesDryCleaning.png";
import Ironing from "../../Images/ServicesIron.png";
import Fold from "../../Images/ServicesFold.png";
import Employes from "../../Images/Employes.png";
import office from "../../Images/office.png";
import Client from "../../Images/Client.png";
import Awards from "../../Images/Awards.png";
import Share from "../../Images/Share.png";
import Delete from "../../Images/delete.png";
import Comment from "../../Images/comment.png";
import Submit from "../../Images/upload.png";

import { TbPhoneCall } from "react-icons/tb";

import {
  Badge,
  Button,
  Card,
  CardGroup,
  Carousel,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

function getMediaType(url) {
  const extension = url.split(".").pop().toLowerCase();

  if (["jpg", "jpeg", "png", "bmp"].includes(extension)) {
    return "image";
  } else if (["gif"].includes(extension)) {
    return "gif";
  } else if (["mp4", "webm", "ogg"].includes(extension)) {
    return "video";
  }

  return "unknown";
}

const cardData = [
  {
    _id: 1,
    title: "Company Name ",
    address:
      "Kamaraj Road, off Killiyur Falls Road, Post, Ondikadai, Yercaud, Tamil Nadu 636601",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, OnePIeceGif, img2, img3, img1, img2, img3, img3],
    name: "Company Name",
    tagline: "Innovating the Future",
    description:
      "Our mission is to revolutionize the industry with cutting-edge technology. We are committed to delivering exceptional value and innovation through our products and services.",
    keyMetrics: [
      {
        name: "Employees",
        value: 1200,
        icon: Employes,
      },
      {
        name: "Offices",
        value: 10,
        icon: office,
      },
      {
        name: "Clients Served",
        value: 500,
        icon: Client,
      },
      {
        name: "Awards",
        value: 15,
        icon: Awards,
      },
    ],

    testimonials: [
      { name: "Client A", review: "Excellent service!", rating: 5 },
      { name: "Client B", review: "Highly recommended!", rating: 4 },
    ],
    location: {
      address: "123 Business Avenue, City, Country",
      mapLink: "https://maps.google.com",
    },
    timing: {
      weekdays: "9:00 AM - 6:00 PM",
      Saturday: "10:00 AM - 4:00 PM",
      sunday: "Sorry we are Closed",
    },
  },
];

const services = [
  { name: "Laundry", image: Laundry },
  { name: "Dry Cleaning", image: DryCleaning },
  { name: "Ironing", image: Ironing },
  { name: "Fold & Delivery", image: Fold },
];

function OneCard({ handleNavigate }) {
  const [formData, setFormData] = useState(cardData);
  const [cookiesType, setCookiesType] = useState(Cookies.get("AccountType"));

  useEffect(() => {
    setCookiesType(Cookies.get("AccountType"));
  }, [cookiesType]);
  const settings = {
    dots: false,
    infinite: 2,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const [heart, setHeart] = useState(false);
  // const [rating, setRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([
    { id: 1, title: "Review 1", comment: "This is the first comment" },
    { id: 2, title: "Review 2", comment: "This is the second comment" },
  ]);
  const [commentsId, setCommentsId] = useState("");
  const [LikedId, setLikedId] = useState("");

  const [likedReviews, setLikedReviews] = useState(false);
  const [BussinessComments, setBussinessComments] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const [replyInput, setReplyInput] = useState({});
  const [submittedReplies, setSubmittedReplies] = useState({});

  const location = useLocation();
  const { data } = location.state || {};
  const card = formData[0];
  const visibleImages = card.images;

  const handleLikeButton = () => {
    setHeart(!heart);
  };

  const handleClick = (tab) => {
    setActiveTab(tab);
    console.log(`${tab} clicked`);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const address = encodeURIComponent(card.address);
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${address}&travelmode=driving`;
          window.open(mapsUrl, "_blank");
        },
        (error) => {
          console.error("Error getting location:", error.message);
          const address = encodeURIComponent(card.address);
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}&travelmode=driving`;
          window.open(mapsUrl, "_blank");
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
      const address = encodeURIComponent(card.address);
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}&travelmode=driving`;
      window.open(mapsUrl, "_blank");
    }
  };

  const handleLike = (id) => {
    setLikedReviews((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === "") {
      alert("Please provide a rating and comment.");
      return;
    }

    const newReview = {
      id: Date.now(),
      rating,
      comment,
    };

    setReviews([...reviews, newReview]);
    setRating(0);
    setComment("");
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommenst = (id) => {
    setCommentsId(id);
    setBussinessComments((prevId) => (prevId === id ? null : id));
  };

  const handleReply = (id, e) => {
    setReplyInput((prev) => ({
      ...prev,
      [id]: e.target.value,
    }));
  };

  const handleReplySubmit = (id) => {
    if (!replyInput[id] || replyInput[id].trim() === "") {
      alert("Please enter a reply.");
      return;
    }

    setSubmittedReplies((prev) => ({
      ...prev,
      [id]: replyInput[id],
    }));

    setReplyInput((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const handleDeleteReply = (id) => {
    setSubmittedReplies((prev) => {
      const updatedReplies = { ...prev };
      delete updatedReplies[id];
      return updatedReplies;
    });
  };

  return (
    <Container fluid className="CompanyCard-body" style={{ marginTop: "12vh" }}>
      <Card border="info">
        <Card.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="sticky-header"
          >
            <Card.Title className="singleCard-CompanyName">
              {card.title}
            </Card.Title>
            <Button
              onClick={handleLikeButton}
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: "10px",
              }}
            >
              <Image
                src={heart ? redHeart : emptyHeart}
                alt="Heart Image"
                style={{ maxWidth: "30px" }}
              />
            </Button>
          </div>

          <Slider {...settings}>
            {visibleImages.map((media, index) => {
              const type = getMediaType(media);

              return (
                <div key={index} style={{ position: "relative" }}>
                  {type === "image" && (
                    <Image
                      src={media}
                      alt={`Media ${index + 1}`}
                      fluid
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "fill",
                        border: "2px solid white",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                  {type === "gif" && (
                    <Image
                      src={media}
                      alt={`Media ${index + 1}`}
                      fluid
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        border: "2px solid white",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                  {type === "video" && (
                    //  src={media}
                    <video
                      src={media}
                      controls
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        border: "2px solid white",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </Slider>

          <Card.Body
            style={{
              flex: "2",
              padding: "20px",
              // border: "0.5px solid grey",
              borderRadius: "20px",
              backgroundColor: "snow",
            }}
          >
            <Card.Text>
              <Row>
                <Col xs={8}>
                  <Image src={star} style={{ width: "40px" }} />
                  <Badge pill bg="primary">
                    Primary
                  </Badge>{" "}
                  Ratings
                </Col>
              </Row>
            </Card.Text>
            <Card.Title style={{ cursor: "pointer" }}>
              <Image src={Location} style={{ width: "40px" }} />
              {card.address}
            </Card.Title>
            <div
              className="button-container"
              style={{ marginTop: "auto", justifyContent: "flex-start" }}
            >
              <Button
                className="hover-button"
                variant="outline-secondary"
                onClick={() => (window.location.href = "tel:+919940821893")}
                style={{ display: "flex", alignItems: "center" }}
              >
                <TbPhoneCall style={{ marginRight: "8px" }} />
                <span>Call</span>
              </Button>

              <Button
                className="hover-button"
                variant="outline-secondary"
                onClick={() =>
                  window.open(
                    "https://wa.me/919940821893",
                    "noopener noreferrer"
                  )
                }
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={Whatsapp}
                  style={{ width: "28px", marginRight: "8px" }}
                  alt="Chat"
                />
                <span> Chat</span>
              </Button>

              <Button
                className="hover-button"
                variant="outline-secondary"
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: "Check out this card!",
                        text: "Here’s a link to a great card:",
                        url: "http://www.pradeepsathish.tech/card-link", // Replace with your card link
                      })
                      .then(() => console.log("Shared successfully!"))
                      .catch((error) => console.error("Error sharing:", error));
                  } else {
                    alert(
                      "Web Share API is not supported in this browser. Please copy and share the link manually."
                    );
                  }
                }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={Share}
                  style={{ width: "28px", marginRight: "8px" }}
                  alt="Chat"
                />
                <span> Share</span>
              </Button>
              <Button
                className="hover-button"
                variant="outline-secondary"
                onClick={() => {
                  handleLocationClick(card.address);
                }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={Location}
                  style={{ width: "28px", marginRight: "8px" }}
                  alt="Chat"
                />
                {/* <LocationLink address={card.address} /> */}
                <span>Direction </span>
              </Button>
            </div>
          </Card.Body>
          <Card.Body className="OneCard-Services-Card">
            <div>
              <Row className="text-center my-3">
                <Col xs={4} sm={4} className="mb-2">
                  <div
                    onClick={() => handleClick("Overview")}
                    className={`OneCard-Services-text ${
                      activeTab === "Overview" ? "active" : ""
                    }`}
                  >
                    Overview
                  </div>
                </Col>

                <Col xs={4} sm={4} className="mb-2">
                  <div
                    onClick={() => handleClick("Review")}
                    className={`OneCard-Services-text ${
                      activeTab === "Review" ? "active" : ""
                    }`}
                  >
                    Review
                  </div>
                </Col>
                <Col xs={4} sm={4} className="mb-2">
                  <div
                    onClick={() => handleClick("Services")}
                    className={`OneCard-Services-text ${
                      activeTab === "Services" ? "active" : ""
                    }`}
                  >
                    Services
                  </div>
                </Col>
              </Row>

              {activeTab === "Services" && (
                <div className="container my-4 overview-section">
                  <h2 className="mb-4">Services Offered</h2>
                  <div className="row">
                    {services.map((service, index) => (
                      <div
                        className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                        key={index}
                      >
                        <Card className="ServicesCard">
                          <Row noGutters className="d-flex align-items-center">
                            <Col
                              xs={5}
                              md={12}
                              className="d-flex justify-content-center"
                            >
                              <Card.Img
                                variant="top"
                                src={service.image}
                                className="img-fluid servicesImages"
                              />
                            </Col>
                            <Col
                              xs={7}
                              md={12}
                              className="d-flex align-items-center"
                            >
                              <Card.Body>
                                <center>
                                  <Card.Title className="ServicesName">
                                    {service.name}
                                  </Card.Title>
                                </center>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* {activeTab === "Review" && */}

              {activeTab === "Review" && (
                <div className="overview-section">
                  <div className="reviews-list">
                    {reviews.length > 0 ? (
                      reviews.map((review, index) => (
                        <div key={index} className="review-item">
                          <Row>
                            <Col xs={10}>
                              <div>UserName</div>
                              <div>
                                {[...Array(review.rating)].map((_, i) => (
                                  <FaStar key={i} color="#ffc107" size={20} />
                                ))}
                              </div>
                              <p>{review.comment}</p>

                              {/* Display submitted reply if it exists */}
                              {submittedReplies[review.id] ? (
                                <div
                                  className="reply-display"
                                  style={{
                                    marginLeft: "50px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <strong>Reply:</strong>{" "}
                                  {submittedReplies[review.id]}
                                  <Button
                                    onClick={() => handleDeleteReply(review.id)}
                                    className="review-btn"
                                  >
                                    <Image
                                      src={Delete}
                                      alt="Delete Reply"
                                      style={{ width: "15px" }}
                                    />
                                  </Button>
                                </div>
                              ) : (
                                // Show input and submit button only if no reply is submitted
                                commentsId === review.id && (
                                  <div className="email-form-container">
                                    <FloatingLabel
                                      controlId="floatingInput"
                                      label="Reply"
                                      className="BusinessReply"
                                    >
                                      <Form.Control
                                        type="text"
                                        placeholder="Comment here"
                                        value={replyInput[review.id] || ""}
                                        onChange={(e) =>
                                          handleReply(review.id, e)
                                        }
                                      />
                                    </FloatingLabel>
                                    <Button
                                      onClick={() =>
                                        handleReplySubmit(review.id)
                                      }
                                      className="review-btn"
                                    >
                                      <Image
                                        src={Submit}
                                        alt="Submit Reply"
                                        style={{ width: "20px" }}
                                      />
                                    </Button>
                                  </div>
                                )
                              )}
                            </Col>
                            <Col xs={2}>
                              {cookiesType === "Bussiness" && (
                                <>
                                  <Button
                                    onClick={() => handleCommenst(review.id)}
                                    className="review-btn"
                                  >
                                    <Image
                                      src={Comment}
                                      alt="Comment Icon"
                                      style={{ width: "20px" }}
                                    />
                                  </Button>
                                  <Button
                                    onClick={() => handleDelete(review.id)}
                                    className="review-btn"
                                  >
                                    <Image
                                      src={Delete}
                                      alt="Delete"
                                      style={{ width: "20px" }}
                                    />
                                  </Button>
                                </>
                              )}
                              <Button
                                onClick={() => handleLike(review.id)}
                                className="review-btn"
                              >
                                <Image
                                  src={
                                    likedReviews[review.id]
                                      ? redHeart
                                      : emptyHeart
                                  }
                                  alt="Heart Icon"
                                  style={{ width: "20px" }}
                                />
                              </Button>
                            </Col>
                          </Row>
                          <hr />
                        </div>
                      ))
                    ) : (
                      <div>No reviews</div>
                    )}
                  </div>

                  {cookiesType === "user" && (
                    <Form onSubmit={handleSubmitReview}>
                      <Form.Group className="mb-3" controlId="rating">
                        {[...Array(5)].map((_, index) => {
                          const ratingValue = index + 1;
                          return (
                            <label key={index}>
                              <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                                style={{ display: "none" }}
                              />
                              <FaStar
                                size={30}
                                color={
                                  ratingValue <= (hover || rating)
                                    ? "#ffc107"
                                    : "#e4e5e9"
                                }
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                                className="rating-star"
                              />
                            </label>
                          );
                        })}
                      </Form.Group>

                      <Form.Group className="mb-2" controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={comment}
                          onChange={handleCommentChange}
                          placeholder="Write your review here"
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit Review
                      </Button>
                    </Form>
                  )}
                </div>
              )}

              {/* } */}
              {activeTab === "Overview" && (
                <div className="overview-section ">
                  <h2 className="my-4 team-container">About {card.name}</h2>
                  <p>{card.description}</p>
                  <hr />

                  <h2 className="my-4 team-container">Details</h2>
                  <p>{card.description}</p>
                  <hr />

                  <section className="company-timing-section">
                    <h3 className="company-timing-heading">
                      Our Business Hours
                    </h3>
                    <div className="company-timing">
                      {Object.entries(cardData[0].timing).map(
                        ([day, hours], index) => (
                          <div key={index} className="timing-card">
                            <span className="timing-day">
                              {day.charAt(0).toUpperCase() + day.slice(1)}
                            </span>
                            <span className="timing-hours">{hours}</span>
                          </div>
                        )
                      )}
                    </div>
                  </section>
                  <hr />
                  <section className="testimonials-section">
                    <h3 className="testimonials-heading my-4 ">
                      What Our Clients Say
                    </h3>
                    <div className="testimonials-container">
                      {card.testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                          <blockquote className="testimonial-content">
                            <p className="testimonial-text">
                              "{testimonial.review}"
                            </p>
                            <footer className="testimonial-footer">
                              <span className="testimonial-author">
                                {testimonial.name}
                              </span>
                              <span className="testimonial-rating">
                                {testimonial.rating}
                                <FaStar color="#ffc107" />
                              </span>
                            </footer>
                          </blockquote>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              )}
            </div>
          </Card.Body>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default OneCard;
