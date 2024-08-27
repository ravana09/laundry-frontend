import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import BussinesImage from "../../Images/BussinessProfile.jpg";
import "../BussinesProfile/BussinessProfile.css";
import { useNavigate } from "react-router-dom";

const BussinessProfileCard = () => {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(page);
    console.log("navigate");
  };

  return (
    <Card
      className="Bussiness-Profile-ComapnyCard"
      style={{
        width: "100%",
        padding: "10px 10px 5px 10px",
      }}
      onClick={()=>{
        handleNavigation("/BussinessEditPage");
      }}
    >
      <Card.Img
        variant="top"
        src={BussinesImage}
        className="Bussiness-Profile-ProfilePic"
      />
      <Card.Body>

        <Card.Title className="BEditFront-Title">Company Name</Card.Title>
        {/* <Card.Text>
          <FaLocationDot /> Company address
        </Card.Text> */}
        <Button>Company Details</Button>
      </Card.Body>
     
      
    </Card>
  );
};

export default BussinessProfileCard;
