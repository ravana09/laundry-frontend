import React, { useEffect, useState } from "react";
import "../CustomerLeads/CustomerLeads.css";
import BussinessProfileCard from "../BussinesProfile/BussinesProfileCard";
import { Col, Container, Row, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function CustomerLeads() {
  const [details, setDetails] = useState([]);

  const sampleData = [
    {
      id: 1,
      name: "John Doe",
      mobileNumber: "123-456-7890",
      email: "john.doe@example.com",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 2,
      name: "Jane Smith",
      mobileNumber: "987-654-3210",
      email: "jane.smith@example.com",
      address: "456 Oak Ave, Othertown, USA",
    },
    {
      id: 3,
      name: "Bob Johnson",
      mobileNumber: "555-123-4567",
      email: "bob.johnson@example.com",
      address: "789 Pine Rd, Sometown, USA",
    },
    {
      id: 4,
      name: "Alice Brown",
      mobileNumber: "444-555-6666",
      email: "alice.brown@example.com",
      address: "101 Maple St, Anycity, USA",
    },
    {
      id: 5,
      name: "Charlie Davis",
      mobileNumber: "333-444-5555",
      email: "charlie.davis@example.com",
      address: "202 Birch Ln, Anytown, USA",
    },
    {
      id: 6,
      name: "Eve White",
      mobileNumber: "222-333-4444",
      email: "eve.white@example.com",
      address: "303 Cedar Ct, Othertown, USA",
    },
    {
      id: 7,
      name: "Frank Green",
      mobileNumber: "111-222-3333",
      email: "frank.green@example.com",
      address: "404 Elm St, Sometown, USA",
    },
    {
      id: 8,
      name: "Grace Black",
      mobileNumber: "999-888-7777",
      email: "grace.black@example.com",
      address: "505 Spruce Ave, Anycity, USA",
    },
    {
      id: 9,
      name: "Hank Blue",
      mobileNumber: "888-777-6666",
      email: "hank.blue@example.com",
      address: "606 Redwood Dr, Anytown, USA",
    },
    {
      id: 10,
      name: "Ivy Yellow",
      mobileNumber: "777-666-5555",
      email: "ivy.yellow@example.com",
      address: "707 Ash St, Othertown, USA",
    },
    {
      id: 11,
      name: "Jack Red",
      mobileNumber: "666-555-4444",
      email: "jack.red@example.com",
      address: "808 Fir Ln, Sometown, USA",
    },
    {
      id: 12,
      name: "Karen Orange",
      mobileNumber: "555-444-3333",
      email: "karen.orange@example.com",
      address: "909 Sycamore Rd, Anycity, USA",
    },
    {
      id: 13,
      name: "Larry Purple",
      mobileNumber: "444-333-2222",
      email: "larry.purple@example.com",
      address: "1010 Cedar Ct, Anytown, USA",
    },
    {
      id: 14,
      name: "Mona Gray",
      mobileNumber: "333-222-1111",
      email: "mona.gray@example.com",
      address: "1111 Oak Ave, Othertown, USA",
    },
    {
      id: 15,
      name: "Nancy Pink",
      mobileNumber: "222-111-0000",
      email: "nancy.pink@example.com",
      address: "1212 Pine Rd, Sometown, USA",
    },
    {
      id: 16,
      name: "Oscar Silver",
      mobileNumber: "111-000-9999",
      email: "oscar.silver@example.com",
      address: "1313 Maple St, Anycity, USA",
    },
    {
      id: 17,
      name: "Paul Gold",
      mobileNumber: "000-999-8888",
      email: "paul.gold@example.com",
      address: "1414 Birch Ln, Anytown, USA",
    },
    {
      id: 18,
      name: "Quincy Bronze",
      mobileNumber: "999-888-7777",
      email: "quincy.bronze@example.com",
      address: "1515 Cedar Ct, Othertown, USA",
    },
    {
      id: 19,
      name: "Rachel White",
      mobileNumber: "888-777-6666",
      email: "rachel.white@example.com",
      address: "1616 Elm St, Sometown, USA",
    },
    {
      id: 20,
      name: "Sam Blue",
      mobileNumber: "777-666-5555",
      email: "sam.blue@example.com",
      address: "1717 Spruce Ave, Anycity, USA",
    },
  ];

  useEffect(() => {
    setDetails(sampleData);
  }, []);

  const customStyles = {
    rows: {
      style: {
        minHeight: "60px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        color: "white",
        backgroundColor: "black",
        borderRight: "1px solid white",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        borderRight: "1px solid #ddd",
      },
    },
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Mobile Number",
      selector: (row) => row.mobileNumber,
      sortable: true,
    },
    {
      name: "Email ID",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
  ];

  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(details);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Customer Leads");
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([wbout], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, "CustomerLeads.xlsx");
  };

  const handlePrint = () => {
    const printWindow = window.open("", "", "height=600,width=800");
    const printContent = document.getElementById("data-table").outerHTML;

    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
      .map(style => style.outerHTML)
      .join("");

    printWindow.document.write("<html><head><title>Print</title>");
    printWindow.document.write(styles);
    printWindow.document.write("</head><body>");
    printWindow.document.write(printContent);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  // Calculate the number of rows for the "All" option
  const paginationRowsPerPageOptions = [5, 10, 15, sampleData.length].map(num =>
    num === sampleData.length ? "All" : num
  );

  return (
    <>
      <Container fluid className="Bussiness-Profile-head">
        <Row>
          <Col xs={12} sm={2} md={2} lg={2} xl={2}>
            <BussinessProfileCard />
          </Col>
          <Col
            xs={12}
            sm={10}
            md={10}
            lg={10}
            xl={10}
            style={{ backgroundColor: "white" }}
          >
            <Button
              variant="primary"
              onClick={handleExport}
              style={{ marginBottom: "10px" }}
            >
              Export to Excel
            </Button>
            <Button
              variant="secondary"
              onClick={handlePrint}
              style={{ marginBottom: "10px", marginLeft: "10px" }}
            >
              Print
            </Button>
            <div id="data-table">
              <DataTable
                columns={columns}
                data={details}
                customStyles={customStyles}
                selectableRows
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={paginationRowsPerPageOptions}
                selectableRowsHighlight
                highlightOnHover
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CustomerLeads;
