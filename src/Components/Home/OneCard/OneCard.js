import React from "react";
import "../OneCard/OneCard.css";
import { useLocation } from "react-router-dom";
import img1 from "../Card/sampleImages/luffy-3200-x-1800-picture-ao6tt30yuxjuvjlk.jpg";
import img2 from "../Card/sampleImages/sanji-and-one-piece-zoro-4k-99b5u5n1oeu8tqja.jpg";
import img3 from "../Card/sampleImages/wallpaperflare.com_wallpaper (1).jpg";
import { FaLocationDot } from "react-icons/fa6";
import star from "../../Images/Star.png";
import Location from "../../Images/LocationCircle.png";
import Whatsapp from "../../Images/GreenWhatsapp.png";
import { TbPhoneCall } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    _id: 1,
    title: "Company Name ",
    address:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3, img1, img2, img3],
  },
];

function OneCard({ handleNavigate }) {
  const location = useLocation();
  const { data } = location.state || {};
  const card = cardData[0]; // Assuming only one hotel for simplicity
  const visibleImages = card.images; // Show all images

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

  return (
    <Container fluid className="CompanyCard-body" > 
      <Card border="info">
        <Card.Body>
          <Card.Title className="singleCard-CompanyName !important">
            {card.title}
          </Card.Title>

          <Slider {...settings}>
            {visibleImages.map((image, index) => (
              <div key={index} style={{ position: "relative" }}>
                <Image
                  src={image}
                  alt={`Hotel Image ${index + 1}`}
                  fluid
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "fill",
                    border: "2px solid white",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ))}
          </Slider>

          <Card.Body
            style={{
              flex: "2",
              padding: "20px",
              border: "0.5px solid grey",
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
            <Card.Title> 
            <Image src={Location} style={{ width: "40px" }} />
              {card.address}</Card.Title>


            <div className="button-container" style={{ marginTop: "auto",justifyContent:'flex-start' }}>
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
        </Card.Body>
      </Card>
    </Container>
  );
}

export default OneCard;
