import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BoostImage from "../../Images/BoostImg.png";
import AllLeads from "../../Images/leadsAlldata.png";
import TodayLeads from "../../Images/leadOnlyToday.png";
import Washing from "../../Images/leadsWasing.png";
import Ironing from "../../Images/leadIroning.png";
import DryClean from "../../Images/leadDryC;lean.png";
import Others from "../../Images/LeadsOthers.png";
import "../LeadsContainer/LeadsContainer.css";

const sampleData = [
  {
    "id": 1,
    "name": "John Doe",
    "mobileNumber": "123-456-7890",
    "email": "john.doe@example.com",
    "address": "123 Main St, Anytown, USA",
    "service": "dry cleaning",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "mobileNumber": "987-654-3210",
    "email": "jane.smith@example.com",
    "address": "456 Oak Ave, Othertown, USA",
    "service": "washing",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "mobileNumber": "555-123-4567",
    "email": "bob.johnson@example.com",
    "address": "789 Pine Rd, Sometown, USA",
    "service": "ironing",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 4,
    "name": "Alice Brown",
    "mobileNumber": "444-555-6666",
    "email": "alice.brown@example.com",
    "address": "101 Maple St, Anycity, USA",
    "service": "all",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "mobileNumber": "333-444-5555",
    "email": "charlie.davis@example.com",
    "address": "202 Birch Ln, Anytown, USA",
    "service": "dry cleaning",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 6,
    "name": "Eve White",
    "mobileNumber": "222-333-4444",
    "email": "eve.white@example.com",
    "address": "303 Cedar Ct, Othertown, USA",
    "service": "washing",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 7,
    "name": "Frank Green",
    "mobileNumber": "111-222-3333",
    "email": "frank.green@example.com",
    "address": "404 Elm St, Sometown, USA",
    "service": "ironing",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 8,
    "name": "Grace Black",
    "mobileNumber": "999-888-7777",
    "email": "grace.black@example.com",
    "address": "505 Spruce Ave, Anycity, USA",
    "service": "all",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 9,
    "name": "Hank Blue",
    "mobileNumber": "888-777-6666",
    "email": "hank.blue@example.com",
    "address": "606 Redwood Dr, Anytown, USA",
    "service": "dry cleaning",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 10,
    "name": "Ivy Yellow",
    "mobileNumber": "777-666-5555",
    "email": "ivy.yellow@example.com",
    "address": "707 Ash St, Othertown, USA",
    "service": "washing",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 11,
    "name": "Jack Red",
    "mobileNumber": "666-555-4444",
    "email": "jack.red@example.com",
    "address": "808 Fir Ln, Sometown, USA",
    "service": "ironing",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 12,
    "name": "Karen Orange",
    "mobileNumber": "555-444-3333",
    "email": "karen.orange@example.com",
    "address": "909 Sycamore Rd, Anycity, USA",
    "service": "all",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 13,
    "name": "Larry Purple",
    "mobileNumber": "444-333-2222",
    "email": "larry.purple@example.com",
    "address": "1010 Cedar Ct, Anytown, USA",
    "service": "dry cleaning",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 14,
    "name": "Mona Gray",
    "mobileNumber": "333-222-1111",
    "email": "mona.gray@example.com",
    "address": "1111 Oak Ave, Othertown, USA",
    "service": "washing",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 15,
    "name": "Nancy Pink",
    "mobileNumber": "222-111-0000",
    "email": "nancy.pink@example.com",
    "address": "1212 Pine Rd, Sometown, USA",
    "service": "ironing",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 16,
    "name": "Oscar Silver",
    "mobileNumber": "111-000-9999",
    "email": "oscar.silver@example.com",
    "address": "1313 Maple St, Anycity, USA",
    "service": "all",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 17,
    "name": "Paul Gold",
    "mobileNumber": "000-999-8888",
    "email": "paul.gold@example.com",
    "address": "1414 Birch Ln, Anytown, USA",
    "service": "dry cleaning",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 18,
    "name": "Quincy Bronze",
    "mobileNumber": "999-888-7777",
    "email": "quincy.bronze@example.com",
    "address": "1515 Cedar Ct, Othertown, USA",
    "service": "washing",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 19,
    "name": "Rachel White",
    "mobileNumber": "888-777-6666",
    "email": "rachel.white@example.com",
    "address": "1616 Elm St, Sometown, USA",
    "service": "ironing",
    "typeServices": "Not Connected",
    "Remarks": ""
  },
  {
    "id": 20,
    "name": "Sam Blue",
    "mobileNumber": "777-666-5555",
    "email": "sam.blue@example.com",
    "address": "1717 Spruce Ave, Anycity, USA",
    "service": "all",
    "typeServices": "Not Connected",
    "Remarks": ""
  }
]
;


function LeadsContainer() {
  const navigate = useNavigate();

  const handleNavigation = (page, title) => {
    navigate(page, {
      state: { title,sampleData }, 
    });
  };
  
  // Card data for each section
  const firstSectionCards = [
    {
      title: "All Leads",
      TotalLeads: 100,
      Navigate: "/CustomerLeads",
      Image:AllLeads,
      details:sampleData,
      
    },
    {
      title: "Today Leads",
      TotalLeads: 20,
      Navigate: "/CustomerLeads",
      Image:TodayLeads,
    },
  ];

  const secondSectionCards = [
    {
      title: "Washing",
      TotalLeads: 10,
      Navigate: "/CustomerLeads",
      Image:Washing,
    },
    {
      title: "Dry Cleaning",
      TotalLeads: 10,
      Navigate: "/CustomerLeads",
      Image:Ironing,
    },
    {
      title: "Ironing",
      TotalLeads: 10,
      Navigate: "/CustomerLeads",
      Image:DryClean,
    },
    {
      title: "Others",
      TotalLeads: 0,
      Navigate: "/CustomerLeads",
      Image:Others,
    },
  ];

  return (
    <Container fluid style={{ marginTop: "10vh" }}>
      <Card style={{ padding: "10px", height: "auto", marginTop: "10vh" }}>
        <Card.Body>
          <Row className="justify-content-center">
            {/* First section with 2 cards */}
            <center>
              {" "}
              <h1>Leads</h1>
            </center>
            <Col xs={12} md={6}>
              <Row>
                {firstSectionCards.map((item, index) => (
                  <Col key={index} xs={12} sm={6}>
                    <div className="leadCOntaoiner-InnerCard-div ">
                    <Card
                      onClick={() => handleNavigation(item.Navigate,item.title)}
                      className="mb-3 leadCOntaoiner-InnerCard "
                     
                    >
                      <Card.Body>
                        <Row className="align-items-center">
                          <Col xs={6} sm={12}  className="text-center" >
                            <Image
                              src={item.Image}
                              alt="Leads Image"
                              style={{ maxWidth: "80px" }}
                            />
                          </Col>
                          <Col xs={6} sm={12}  style={{marginTop:'20px'}}>
                          <center>
                            <h4 className="mb-1">{item.title}</h4>
                            <p className="text-muted"> Total Leads {item.TotalLeads}</p>
                            </center>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <hr />
            <center>
              {" "}
              <h1>Services Leads</h1>
            </center>
            {/* Second section with 4 cards */}
            <Col xs={12}>
              <Row className="justify-content-center">
                {secondSectionCards.map((item, index) => (
                  <Col key={index} xs={12} sm={6} md={3} className="mb-3">
                    <div className="leadCOntaoiner-InnerCard-div ">
                    <Card
                      onClick={() => handleNavigation(item.Navigate,item.title)}
                      style={{ cursor: "pointer" }}
                      className="leadCOntaoiner-InnerCard"
                    >
                      <Card.Body>
                        <Row className="align-items-center">
                          <Col xs={6} sm={12} className="text-center">
                            <Image
                                src={item.Image}
                              alt="Card Image"
                              style={{ maxWidth: "80px" }}
                            />
                          </Col>
                          <Col xs={6} sm={12} style={{marginTop:'20px'}}>
                          <center>
                            <h4 >{item.title}</h4>
                            <p > Total Leads {item.TotalLeads}</p>
                            </center>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LeadsContainer;
