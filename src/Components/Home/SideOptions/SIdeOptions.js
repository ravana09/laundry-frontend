import React from "react";
import { Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa"; // Location icon
import "../SideOptions/SideOption.css";

function SIdeOptions() {
  return (
    <Card
      style={{
        width: "100%",
        minHeight: "100vh",
        marginTop: "12vh",
        backgroundColor: "transparent",
      }}
    >
      <Card.Body>
        <div >
          <OverlayTrigger
            // placement="top"
            overlay={<Tooltip>Find Near Me</Tooltip>}
          >
            <Button style={{width:'100%',backgroundColor:'skyblue',color:'blaCK'}}>
           <FaMapMarkerAlt className="location-icon" />
        </Button>
          </OverlayTrigger>
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default SIdeOptions;
