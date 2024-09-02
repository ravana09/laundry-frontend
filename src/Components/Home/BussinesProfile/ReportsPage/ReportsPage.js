import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

import ConnectSale from "../../../Images/ConnectSale.png";
import ConnectNotSale from "../../..//Images/ConnectNotSale.png";
import Disconnected from "../../../Images/Disconnected.png";
import unabletoconnect from "../../../Images/unabletoconnect.png";
import { useNavigate } from "react-router-dom";

const sampleData = [
  {
    id: 1,
    name: "John Doe",
    mobileNumber: "123-456-7890",
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    service: "dry cleaning",
    typeServices: "connected/sale",
    Remarks: "",
  },
  {
    id: 2,
    name: "Jane Smith",
    mobileNumber: "987-654-3210",
    email: "jane.smith@example.com",
    address: "456 Oak Ave, Othertown, USA",
    service: "washing",
    typeServices: "connected/Notsale",
    Remarks: "",
  },
  {
    id: 3,
    name: "Bob Johnson",
    mobileNumber: "555-123-4567",
    email: "bob.johnson@example.com",
    address: "789 Pine Rd, Sometown, USA",
    service: "ironing",
    typeServices: "Not Connected",
    Remarks: "",
  },
  {
    id: 4,
    name: "Alice Brown",
    mobileNumber: "444-555-6666",
    email: "alice.brown@example.com",
    address: "101 Maple St, Anycity, USA",
    service: "all",
    typeServices: "Not Connected",
    Remarks: "",
  },
  {
    id: 5,
    name: "Emily White",
    mobileNumber: "222-333-4444",
    email: "emily.white@example.com",
    address: "202 Elm St, Metropolis, USA",
    service: "dry cleaning",
    typeServices: "connected/sale",
    Remarks: "",
  },
  {
    id: 6,
    name: "Michael Green",
    mobileNumber: "666-777-8888",
    email: "michael.green@example.com",
    address: "303 Birch Blvd, Cityville, USA",
    service: "washing",
    typeServices: "connected/Notsale",
    Remarks: "",
  },
  {
    id: 7,
    name: "Sarah Brown",
    mobileNumber: "999-888-7777",
    email: "sarah.brown@example.com",
    address: "404 Cedar Ln, Townsville, USA",
    service: "ironing",
    typeServices: "Unable to Connect",
    Remarks: "",
  },
  {
    id: 8,
    name: "David Black",
    mobileNumber: "111-222-3333",
    email: "david.black@example.com",
    address: "505 Fir St, Villagetown, USA",
    service: "all",
    typeServices: "Unable to Connect",
    Remarks: "",
  },
  {
    id: 9,
    name: "Laura Gray",
    mobileNumber: "444-666-8888",
    email: "laura.gray@example.com",
    address: "606 Spruce Ave, Suburbia, USA",
    service: "dry cleaning",
    typeServices: "connected/sale",
    Remarks: "",
  },
  {
    id: 10,
    name: "James Williams",
    mobileNumber: "777-888-9999",
    email: "james.williams@example.com",
    address: "707 Pine St, Lakeside, USA",
    service: "washing",
    typeServices: "connected/Notsale",
    Remarks: "",
  },
  {
    id: 11,
    name: "Olivia Martinez",
    mobileNumber: "555-444-3333",
    email: "olivia.martinez@example.com",
    address: "808 Maple St, Riverside, USA",
    service: "ironing",
    typeServices: "Not Connected",
    Remarks: "",
  },
  {
    id: 12,
    name: "Daniel Lee",
    mobileNumber: "333-222-1111",
    email: "daniel.lee@example.com",
    address: "909 Oak St, Woodtown, USA",
    service: "dry cleaning",
    typeServices: "Unable to Connect",
    Remarks: "",
  },
  {
    id: 13,
    name: "Sophia Brown",
    mobileNumber: "444-555-6667",
    email: "sophia.brown@example.com",
    address: "1010 Birch St, Lakeville, USA",
    service: "washing",
    typeServices: "connected/sale",
    Remarks: "",
  },
  {
    id: 14,
    name: "Ethan Jones",
    mobileNumber: "555-666-7778",
    email: "ethan.jones@example.com",
    address: "1212 Elm St, Hilltown, USA",
    service: "ironing",
    typeServices: "connected/Notsale",
    Remarks: "",
  },
  {
    id: 15,
    name: "Isabella Wilson",
    mobileNumber: "666-777-8889",
    email: "isabella.wilson@example.com",
    address: "1313 Cedar St, Coastville, USA",
    service: "all",
    typeServices: "Unable to Connect",
    Remarks: "",
  },
  {
    id: 16,
    name: "Liam Taylor",
    mobileNumber: "777-888-9990",
    email: "liam.taylor@example.com",
    address: "1414 Pine St, Hillcrest, USA",
    service: "dry cleaning",
    typeServices: "Not Connected",
    Remarks: "",
  },
  {
    id: 17,
    name: "Mia Harris",
    mobileNumber: "888-999-0001",
    email: "mia.harris@example.com",
    address: "1515 Maple St, Riverdale, USA",
    service: "washing",
    typeServices: "connected/sale",
    Remarks: "",
  },
  {
    id: 18,
    name: "Noah Clark",
    mobileNumber: "999-000-1112",
    email: "noah.clark@example.com",
    address: "1616 Fir St, Beachside, USA",
    service: "ironing",
    typeServices: "connected/Notsale",
    Remarks: "",
  },
  {
    id: 19,
    name: "Ava Lewis",
    mobileNumber: "000-111-2223",
    email: "ava.lewis@example.com",
    address: "1717 Birch St, Hilltown, USA",
    service: "all",
    typeServices: "Unable to Connect",
    Remarks: "",
  },
  {
    id: 20,
    name: "Lucas Young",
    mobileNumber: "111-222-3334",
    email: "lucas.young@example.com",
    address: "1818 Oak St, Townsville, USA",
    service: "dry cleaning",
    typeServices: "connected/sale",
    Remarks: "",
  },
];

function ReportsPage() {
  // Function to filter data based on typeServices
  const filterByTypeServices = (data, type) => {
    return data.filter((item) => item.typeServices === type);
  };

  // Example usage
  const connectedSaleData = filterByTypeServices(sampleData, "connected/sale");
  const connectedNotsaleData = filterByTypeServices(
    sampleData,
    "connected/Notsale"
  );
  const notConnectedData = filterByTypeServices(sampleData, "Not Connected");
  const unableToConnectData = filterByTypeServices(
    sampleData,
    "Unable to Connect"
  );

  console.log("Connected/Sale Data:", connectedSaleData);
  console.log("Connected/Notsale Data:", connectedNotsaleData);
  console.log("Not Connected Data:", notConnectedData);
  console.log("Unable to Connect Data:", unableToConnectData);

  const navigate = useNavigate();
  const handleNavigation = (page, Reportstitle, data) => {
    navigate(page, {
      state: { Reportstitle, data },
    });
  };

  const secondSectionCards = [
    {
      title: "Connected Sale",
      TotalLeads: connectedSaleData.length,
      Navigate: "/AllReportsPage",
      Image: ConnectSale,
      data: connectedSaleData,
    },
    {
      title: "Connected Not sale",
      TotalLeads: connectedNotsaleData.length,
      Navigate: "/AllReportsPage",
      Image: ConnectNotSale,
      data: connectedNotsaleData,
    },
    {
      title: "Not Connected",
      TotalLeads: notConnectedData.length,
      Navigate: "/AllReportsPage",
      Image: Disconnected,
      data: notConnectedData,
    },
    {
      title: "Unable To Connect",
      TotalLeads: unableToConnectData.length,
      Navigate: "/AllReportsPage",
      Image: unabletoconnect,
      data: unableToConnectData,
    },
  ];

  return (
    <>
      <Container fluid style={{ marginTop: "12vh" }}>
        <Card>
          <Card.Body>
            <Col xs={12}>
              <Row className="justify-content-center">
                {secondSectionCards.map((item, index) => (
                  <Col key={index} xs={12} sm={6} md={6} className="mb-3">
                    <div className="leadCOntaoiner-InnerCard-div d-flex align-items-center justify-content-center ">
                      <Card
                        onClick={() =>
                          handleNavigation(item.Navigate, item.title, item.data)
                        }
                        style={{ cursor: "pointer" ,width:'70%',marginTop:'8%'}}
                        className="leadCOntaoiner-InnerCard"
                      >
                        <Card.Body>
                          <Row className="align-items-center">
                            <Col xs={12} sm={12} className="text-center">
                              <Image
                                src={item.Image}
                                alt="Card Image"
                                style={{ maxWidth: "50px" }}
                              />
                            </Col>
                            <Col xs={12} sm={12} style={{ marginTop: "20px" }}>
                              <center>
                                <h4>{item.title}</h4>
                                <p> Total Leads {item.TotalLeads}</p>
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
          
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ReportsPage;
