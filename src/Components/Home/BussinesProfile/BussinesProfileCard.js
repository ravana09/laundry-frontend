import React from "react";
import { Card } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import BussinesImage from "../../Images/BussinessProfile.jpg";
import "../BussinesProfile/BussinessProfile.css";

const BussinessProfileCard = () => {
  return (
    <Card
      className="Bussiness-Profile-ComapnyCard"
      style={{
        width: "100%",
        borderRadius: "20px",
        height: "auto",
        padding: "10px",
      }}
    >
      <Card.Img
        variant="top"
        src={BussinesImage}
        className="Bussiness-Profile-ProfilePic"
      />
      <Card.Body>
        <Card.Title>Company Name</Card.Title>
        <Card.Text>
          <FaLocationDot /> Company address
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Edit</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default BussinessProfileCard;
