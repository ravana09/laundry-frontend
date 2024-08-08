import React, { useState } from "react";
import "../Card/Card.css";
import { Badge, Button, Card, Carousel, Container, Image } from "react-bootstrap";
import img1 from "../Card/sampleImages/luffy-3200-x-1800-picture-ao6tt30yuxjuvjlk.jpg";
import img2 from "../Card/sampleImages/sanji-and-one-piece-zoro-4k-99b5u5n1oeu8tqja.jpg";
import img3 from "../Card/sampleImages/wallpaperflare.com_wallpaper (1).jpg";
import { FaLocationDot } from "react-icons/fa6";
import star from "../../Images/Star.png";

const cardData = [
  {
    id: 1,
    title: "Card Title 1",
    address: "near something  gfghfghgfhfghfghgfhhfhfghfghfghfghfghfghfghfghgf",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content fghdfsdrtrdtgrdtgfdgfdgdfgfdgfdgfdgdfgdfgfdgfd.",
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
    id: 3,
    title: "Card Title 3",
    address: "near something ",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  {
    id: 4,
    title: "Card Title 4",
    address: "near something ",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  {
    id: 5,
    title: "Card Title 5",
    address: "near something ",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  {
    id: 6,
    title: "Card Title 6",
    address: "near something ",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
];
function CompanyCard() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleText = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

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
            }}
          >
            <Card.Body>
              <Carousel fade indicators={false} interval={null}>
                {card.images.map((image, i) => (
                  <Carousel.Item key={i}>
                    <Image
                      src={image}
                      alt={`Slide ${i + 1}`}
                      fluid
                      style={{
                        width: "100%",
                        height: "30vh",
                        borderRadius: "20px",
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                <Image src={star} style={{ width: "20px" }} />
                <Badge pill bg="primary">
                  Primary
                </Badge>{" "}
                Ratings
              </Card.Text>
              <Card.Title>
                <FaLocationDot />
                {card.address}
              </Card.Title>
              <h5>Reviews</h5>
              <Card.Text
                className={expandedCard === card.id ? "expanded" : "truncated"}
              >
                {card.text}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              {card.text.length > 100 && (
                <Button variant="link" onClick={() => toggleText(card.id)}>
                  {expandedCard === card.id ? "Show Less" : "Show More"}
                </Button>
              )}
              <div className="button-container">
                <Button variant="primary">Call</Button>
                <Button variant="primary">Chat</Button>
                <Button variant="primary">Order</Button>
              </div>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default CompanyCard;
