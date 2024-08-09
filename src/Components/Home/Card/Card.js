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
import Whatsapp from "../../Images/WhatsApp.jpeg";
import { TbPhoneCall } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";

const cardData = [
  {
    id: 1,
    title: "Some quick example text to build on the card title and make up the bulk of the card's content. ",
    address: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  {
    id: 2,
    title: "Card Title 2",
    address: "near something ",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  {
    id: 1,
    title: "Some quick ",
    address: "near something",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  {
    id: 2,
    title: "Card Title 2",
    address: "near something ",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },

  // Add more cards as needed
];

function CompanyCard() {
  return (
    <Container fluid className="CompanyCard-body">
      <div className="card-grid-container">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className="CompanyCard-Card"
            style={{
              width: "100%",
              borderRadius: "20px",
              marginBottom: "20px",
              border:'2px soild black '
            }}
          >
            <Row>
              <Col sm={3}>
                {/* Image section */}
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
                          width:'100%',
                          height: "30vh",
                          objectFit: "fill",
                          margin:'10px',
                          // borderRadius:'20px'
                        }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
              <Col sm={9} md={6} lg={6} xl={6}>
                {/* Details section */}
                <Card.Body style={{ flex: "2", padding: "20px" }}>
                  <Card.Title>{card.title}</Card.Title>
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
                  <Card.Title>
                    <AddressWithShowMore address={card.address} />
                  </Card.Title>
                  <div className="button-container" style={{ marginTop: "auto" }}>
                    <Button className="hover-button" variant="outline-success" > <TbPhoneCall /> <span>Call</span></Button>
                    <Button className="hover-button" variant="outline-info" ><img src={Whatsapp} style={{width:'28px'}}/>Chat</Button>
                    <Button className="hover-button" variant="outline-info"> <BsCart3 />Order</Button>
                  </div>
                </Card.Body>
              </Col>
              <Col sm={0} md={3} lg={3} xl={3}></Col>
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
