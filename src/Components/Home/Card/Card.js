import React, { useState, useRef, useEffect } from "react";
import "../Card/Card.css";
import {
  Badge,
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import img1 from "../Card/sampleImages/luffy-3200-x-1800-picture-ao6tt30yuxjuvjlk.jpg";
import img2 from "../Card/sampleImages/sanji-and-one-piece-zoro-4k-99b5u5n1oeu8tqja.jpg";
import img3 from "../Card/sampleImages/wallpaperflare.com_wallpaper (1).jpg";
import { FaLocationDot } from "react-icons/fa6";
import star from "../../Images/Star.png";
import Whatsapp from "../../Images/GreenWhatsapp.png";
import { TbPhoneCall } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    _id: 1,
    title:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    address:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  {
    _id: 2,
    title: "Card Title 2",
    address: "near something",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  {
    _id: 3,
    title: "Some quick ",
    address: "near something",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  {
    _id: 4,
    title: "Card Title 2",
    address: "near something",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  // Add more cards as needed
];

function CompanyCard() {
  let navigate = useNavigate();

  const handleNavigate = (page, id) => {
    navigate(page, { state: { data: id } });
  };

  return (
    <Container fluid className="CompanyCard-body">
      <div className="card-grid-container">
        {cardData.map((card) => (
          <Card
            key={card._id}
            className="CompanyCard-Card"
            style={{
              width: "100%",
              borderRadius: "20px",
              marginBottom: "20px",
              border: "2px solid black",
            }}
          >
            <Row>
              <Col sm={3}>
                
                <Carousel
                  fade
                  indicators={false}
                  interval={null}
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  {card.images.map((image, i) => (
                    <Carousel.Item key={i}>
                      <Image
                        src={image}
                        alt={`Slide ${i + 1}`}
                        fluid
                        className="companyCard-Carousel"
                        style={{
                          width: "100%",
                          height: "30vh",
                          objectFit: "fill",
                          margin: "10px",
                        }}
                        onClick={() => handleNavigate("/OneCard", card._id)}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
              <Col sm={9} md={6} lg={6} xl={6}>
                {/* Details section */}
                <Card.Body style={{ flex: "2", padding: "20px" }}>
                  <Card.Title onClick={() => handleNavigate("/OneCard", card._id)}>
                    {card.title}
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col xs={8}>
                        <Image src={star} style={{ width: "20px" }} />
                        <Badge pill bg="primary">
                          Primary
                        </Badge>{" "}
                        Ratings
                      </Col>
                      <Col xs="auto">reviews</Col>
                    </Row>
                  </Card.Text>
                  <Card.Title onClick={() => handleNavigate("/OneCard", card._id)}>
                    <AddressWithShowMore address={card.address} />
                  </Card.Title>
                  <div className="button-container" style={{ marginTop: "auto" }}>
                    <Button
                      className="hover-button"
                      variant="outline-success"
                      onClick={() => (window.location.href = "tel:+919940821893")}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <TbPhoneCall style={{ marginRight: "8px" }} />
                      <span>Call</span>
                    </Button>

                    <Button
                      className="hover-button"
                      variant="outline-info"
                      onClick={() =>
                        window.open("https://wa.me/919940821893", "noopener noreferrer")
                      }
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src={Whatsapp}
                        style={{ width: "28px", marginRight: "8px" }}
                        alt="Chat"
                      />
                      Chat
                    </Button>

                    <Button
                      className="hover-button"
                      variant="outline-info"
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
                      <BsCart3 style={{ marginRight: "8px" }} />
                      Share
                    </Button>
                  </div>
                </Card.Body>
              </Col>
              <Col sm={0} md={3} lg={3} xl={3} onClick={() => handleNavigate("/OneCard", card._id)} ></Col>
            </Row>
          </Card>
        ))}
      </div>
    </Container>
  );
}

function AddressWithShowMore({ address }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current.scrollWidth > textRef.current.clientWidth) {
      setIsTruncated(true);
    }
  }, []);

  const toggleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p style={{ fontSize: "12px" }} ref={textRef}>
      <FaLocationDot />
      {isExpanded || !isTruncated ? address : `${address}...`}
      {isTruncated && (
        <span
          onClick={toggleShowMore}
          style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </span>
      )}
    </p>
  );
}

export default CompanyCard;
