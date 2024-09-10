import React, { useState, useRef, useEffect } from "react";
import "../Card/Card.css";
import {
  Badge,
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import img1 from "../Card/sampleImages/luffy-3200-x-1800-picture-ao6tt30yuxjuvjlk.jpg";
import img2 from "../Card/sampleImages/sanji-and-one-piece-zoro-4k-99b5u5n1oeu8tqja.jpg";
import img3 from "../Card/sampleImages/wallpaperflare.com_wallpaper (1).jpg";
import { FaLocationDot } from "react-icons/fa6";
import star from "../../Images/Star.png";
import Whatsapp from "../../Images/GreenWhatsapp.png";
import Location from "../../Images/LocationCircle.png";
import Share from "../../Images/Share.png";
import { TbPhoneCall } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import LocationLink from "../GoogleMap/LocationLink";
import BubbleAnimation from "../../BubbleAnimation/BubbleAnimation";
import NavbarBubbleAnimation from "../SideNavbar/NavbarAnimation";
import PopupCard from "../PopupCard/PopupCard";
import Cookies from "js-cookie";
import "../PopupCard/PopupCard.css";
import SIdeOptions from "../SideOptions/SIdeOptions";
import SideOptions from "./SideOptions";
import { ImSearch } from "react-icons/im";

const cardData = [
  {
    _id: 1,
    title: "kandhsamy company",
    address:
      "Kamaraj Road, off Killiyur Falls Road, Post, Ondikadai, Yercaud, Tamil Nadu 636601",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  {
    _id: 2,
    title: "Ravana Laundry",
    address:
      "No-1, AMC Rd, Y.M.R. Patty, Karunanidhi Nagar, Dindigul, Tamil Nadu 624001",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  {
    _id: 3,
    title: "Shiva ironing",
    address:
      "opposite to sun marketing North south junction, Raja Mill Rd, Pollachi, Tamil Nadu 642001",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  {
    _id: 4,
    title: "kandhsamy company",
    address:
      "13, 37, Avinashi Rd, TNHB Colony, Civil Aerodrome Post, Nehru Nagar West, Coimbatore, Tamil Nadu 641014",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    images: [img1, img2, img3],
  },
  // Add more cards as needed
];

function CompanyCard() {
  let navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formdata, setFormData] = useState(cardData);

  const [searchBarValue, setSearchBarValue] = useState("");

  useEffect(() => {
    if (!sessionStorage.getItem("popupClosed")) {
      setIsPopupVisible(true);
    }
  }, [searchBarValue]);

  const location = useLocation();
  const selectedOptions = location.state?.selectedOptions || [];
  console.log(selectedOptions, "card js ");

  const handleNavigate = (page, id) => {
    navigate(page, { state: { data: id } });
  };

  const handleLocation = (givenaddress) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`); // Log position for debugging

          const address = encodeURIComponent(givenaddress);
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${address}`;
          window.open(mapsUrl, "_blank");
        },
        (error) => {
          let errorMessage = "Unable to retrieve location.";
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage =
                "Location access denied. Please allow location access in your browser settings.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              errorMessage = "The request to get user location timed out.";
              break;
            case error.UNKNOWN_ERROR:
              errorMessage = "An unknown error occurred.";
              break;
            default:
              errorMessage = "An unexpected error occurred.";
          }
          console.error(`Error Code: ${error.code} - ${errorMessage}`); // Log error details for debugging
          alert(errorMessage);

          const address = encodeURIComponent(givenaddress);
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
          window.open(mapsUrl, "_blank");
        }
      );
    } else {
      alert(
        "Geolocation is not supported by this browser. Please use a modern browser."
      );
      const address = encodeURIComponent(givenaddress);
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
      window.open(mapsUrl, "_blank");
    }
  };

  const handleSearchBarChange = (e) => {
    const { value } = e.target;
    setSearchBarValue(value);
    handleSearch();
  };

  const handleSearch = () => {
    if (searchBarValue.length > 0) {
      const filteredRows = cardData.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchBarValue.toLowerCase())
        )
      );
      console.log(filteredRows, "filtered");
      setFormData(filteredRows);
      console.log(formdata, " form data filtered");
    } else {
      setFormData(cardData);
    }
  };

  return (
    <>
      <Row>
        <Col xs={0} sm={0} md={0} lg={1}></Col>
        <Col
          xs={12}
          sm={12}
          md={10}
          lg={9}
          className="Home-Body"
          style={{ margin: "0px", padding: "0px" }}
        >
          <Container fluid className="CompanyCard-body">
            <NavbarBubbleAnimation />
            {isPopupVisible && <PopupCard />}

            <div className="card-grid-container">
              <Form
                className="d-flex justify-content-end sticky-header "
                style={{ gap: "8px", borderBottom: "0.1px solid #ddd" }}
              >
                {/* <div className="search-wrapper"> */}
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleSearchBarChange}
                    className="search-input"
                    style={{
                      Width:'650px'
                    }}
                  />
                  <ImSearch className="search-icon" />
                {/* </div> */}
              </Form>

              {formdata.map((card) => (
                <Card
                  key={card._id}
                  className="CompanyCard-Card"
                  style={{
                    width: "100%",

                    border: "none",
                    borderBottom: "0.1px solid #ddd",
                    marginBottom: "5px",
                  }}
                >
                  <Row>
                    <Col xs={12} sm={3}>
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
                              onClick={() =>
                                handleNavigate("/OneCard", card._id)
                              }
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </Col>
                    <Col sm={8}>
                      {/* Details section */}

                      <Card.Body
                        style={{ flex: "2", padding: "20px 20px 0px 20px" }}
                      >
                        <div
                          onClick={() => handleNavigate("/OneCard", card._id)}
                        >
                          <Card.Title
                            onClick={() => handleNavigate("/OneCard", card._id)}
                            className="companyCard-Title"
                          >
                            {card.title}
                          </Card.Title>
                          <Card.Text style={{ paddingBottom: "5px" }}>
                            <Row>
                              <Col xs={8}>
                                <Image src={star} style={{ width: "20px" }} />
                                <Badge pill bg="primary">
                                  Primary
                                </Badge>{" "}
                                Ratings
                              </Col>
                            </Row>
                          </Card.Text>
                        </div>
                        <Card.Title
                          onClick={() => handleNavigate("/OneCard", card._id)}
                        >
                          <AddressWithShowMore address={card.address} />
                        </Card.Title>
                        <div
                          className="button-container"
                          style={{ marginTop: "auto" }}
                        >
                          <Button
                            className="hover-button"
                            variant="outline-secondary"
                            onClick={() =>
                              (window.location.href = "tel:+919940821893")
                            }
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
                                  .then(() =>
                                    console.log("Shared successfully!")
                                  )
                                  .catch((error) =>
                                    console.error("Error sharing:", error)
                                  );
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
                              handleLocation(card.address);
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
                    </Col>
                    <Col
                      sm={1}
                      onClick={() => handleNavigate("/OneCard", card._id)}
                    ></Col>
                  </Row>
                </Card>
              ))}
              <hr />
            </div>
          </Container>
        </Col>
        <Col xs={0} sm={0} md={2} lg={2} style={{ margin: "0px" }}>
          <SideOptions />
        </Col>
      </Row>
    </>
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
