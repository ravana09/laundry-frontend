import React, { useEffect, useState } from "react";
import "../CustomerLeads/CustomerLeads.css";
import {
  Col,
  Container,
  Row,
  Button,
  Image,
  OverlayTrigger,
  Tooltip,
  Card,
  Collapse,
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Excel from "../../Images/excel.png";
import Printer from "../../Images/printer.png";
import { useLocation } from "react-router-dom";
import { FaSave } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // For arrow icons

function CustomerLeads() {
  const [details, setDetails] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [dataChanged, setDataChanged] = useState({});
  const [changedRows, setChangedRows] = useState(new Set());
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (rowId) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };

  const location = useLocation();
  const { title, sampleData } = location.state || {};

  useEffect(() => {
    if (sampleData) {
      setDetails(sampleData);
    }
  }, [sampleData]);

  const renderCompanyServices = (
    row,
    handleTypeServicesChange,
    dataChanged,
    CompanyCationOptions
  ) => {
    const selectedOption = CompanyCationOptions.find(
      (option) =>
        option.value === (dataChanged[row.id]?.typeServices || row.typeServices)
    );
    const backgroundColor = selectedOption
      ? selectedOption.backgroundColor
      : "white";

    return (
      <select
        value={dataChanged[row.id]?.typeServices || row.typeServices || ""}
        onChange={(e) => handleTypeServicesChange(row.id, e)}
        style={{
          height: "40px",
          width: "100%",
          backgroundColor: backgroundColor,
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        <option
          value=""
          disabled
          style={{ color: "black", backgroundColor: "white" }}
        >
          Choose an option
        </option>
        {CompanyCationOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            style={{
              color: option.backgroundColor,
              backgroundColor: "white",
              borderBottom: "2px solid grey ",
            }}
          >
            {option.label}
          </option>
        ))}
      </select>
    );
  };

  const customStyles = {
    rows: {
      style: {
        minHeight: "50px",
        width: "100%",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        color: "white",
        backgroundColor: "black",
        borderRight: "1px solid white",
        width: "100%",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        borderRight: "1px solid #ddd",
        width: "100%",
      },
    },
  };

  const handleTypeServicesChange = (rowId, e) => {
    setDataChanged((prevDetails) => ({
      ...prevDetails,
      [rowId]: {
        ...prevDetails[rowId],
        typeServices: e.target.value,
      },
    }));
    setChangedRows((prev) => new Set(prev.add(rowId)));
  };

  const handleRemarksChange = (rowId, e) => {
    setDataChanged((prevDetails) => ({
      ...prevDetails,
      [rowId]: {
        ...prevDetails[rowId],
        Remarks: e.target.value,
      },
    }));
    setChangedRows((prev) => new Set(prev.add(rowId)));
  };

  const handleSave = (rowId) => {
    const updatedRow = details.find((row) => row.id === rowId);
    console.log(
      `Saving changes in row ${rowId}, typeServices is ${
        dataChanged[rowId]?.typeServices || updatedRow?.typeServices
      } and remark is ${dataChanged[rowId]?.Remarks || updatedRow?.Remarks}`
    );
    setChangedRows((prev) => {
      const newSet = new Set(prev);
      newSet.delete(rowId);
      return newSet;
    });
  };

  const CompanyCationOptions = [
    {
      value: "connected/sale",
      label: "connected/sale",
      backgroundColor: "#4caf50",
      color: "white",
    },
    {
      value: "connected/Notsale",
      label: "connected/Notsale",
      backgroundColor: "#ff9800",
      color: "white",
    },
    {
      value: "Not Connected",
      label: "Not Connected",
      backgroundColor: "#f44336",
      color: "white",
    },
    {
      value: "Unable to connect",
      label: "Unable to connect",
      backgroundColor: "#9e9e9e",
      color: "white",
    },
  ];

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
    {
      name: "Services",
      selector: (row) => row.service,
      sortable: true,
    },
    {
      name: "Company Services",
      cell: (row) =>
        renderCompanyServices(
          row,
          handleTypeServicesChange,
          dataChanged,
          CompanyCationOptions
        ),
      sortable: true,
    },
    {
      name: "Remarks",
      cell: (row) => (
        <div className="remarks-container d-flex align-items-center">
          <input
            type="text"
            name="Remarks"
            value={dataChanged[row.id]?.Remarks || row.Remarks || ""}
            onChange={(e) => handleRemarksChange(row.id, e)}
            placeholder="Enter remarks"
            className="remarks-input flex-grow-1"
          />
          {changedRows.has(row.id) && (
            <Button
              className="remarks-save-btn "
              onClick={() => handleSave(row.id)}
            >
              <FaSave />
            </Button>
          )}
        </div>
      ),
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
    const rowsToPrint = selectedRows.length > 0 ? selectedRows : details;

    if (rowsToPrint.length === 0) {
      alert("No data available to print.");
      return;
    }

    const printWindow = window.open("", "", "height=600,width=800");
    let printContent =
      "<table border='1' style='border-collapse: collapse; width: 100%;'><thead><tr>";

    columns.forEach((col) => {
      printContent += `<th style='padding: 8px; text-align: left; border: 1px solid black;'>${
        col.name || ""
      }</th>`;
    });

    printContent += "</tr></thead><tbody>";

    rowsToPrint.forEach((row) => {
      printContent += "<tr>";
      columns.forEach((col) => {
        let cellValue = "-"; // Default value if no selector or row data

        if (col.selector && typeof col.selector === "function") {
          cellValue = col.selector(row);
        }

        if (typeof cellValue === "number") {
          cellValue = cellValue.toLocaleString();
        } else if (cellValue instanceof Date) {
          cellValue = cellValue.toLocaleDateString();
        } else if (typeof cellValue === "boolean") {
          cellValue = cellValue ? "Yes" : "No";
        }

        printContent += `<td style='padding: 8px; border: 1px solid black;'>${cellValue}</td>`;
      });
      printContent += "</tr>";
    });

    printContent += "</tbody></table>";

    const styles = Array.from(
      document.querySelectorAll('link[rel="stylesheet"], style')
    )
      .map((style) => style.outerHTML)
      .join("");

    printWindow.document.write(styles);
    printWindow.document.write("</head><body>");
    printWindow.document.write(printContent);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handleRowSelected = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
  };

  const paginationRowsPerPageOptions = [5, 10, 15];

  return (
    <>
      <Container fluid className="business-profile-head">
        <div className="fixed-header">
          <Row className="align-items-center">
            <Col xs={0} sm={5}></Col>
            <Col xs={6} sm={5}>
              <h4>{title}</h4>
            </Col>
            <Col xs={6} sm={2} className="d-flex justify-content-end">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-excel">Convert to Excel</Tooltip>}
              >
                <Button
                  variant="light"
                  className="icon-button"
                  onClick={handleExport}
                >
                  <Image src={Excel} alt="Excel" className="icon-image" />
                </Button>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-print">Print</Tooltip>}
              >
                <Button
                  variant="light"
                  className="icon-button"
                  onClick={handlePrint}
                >
                  <Image src={Printer} alt="Print" className="icon-image" />
                </Button>
              </OverlayTrigger>
            </Col>
          </Row>
        </div>

        <div id="data-table" className="data-table-container">
          {/* Mobile view layout */}
          <div id="data-table-card" className="data-table-container-mobile">
            {details.map((row) => {
              const isExpanded = expandedRow === row.id;
              return (
                <Card key={row.id} className="mb-3">
                  <Card.Body>
                    <div className="data-item-content">
                      {columns.map((col) => {
                        // Display specific columns at the top
                        if (
                          [
                            "Name",
                            "Mobile Number",
                            "Company Services",
                            "Remarks",
                          ].includes(col.name)
                        ) {
                          const value =
                            typeof col.cell === "function"
                              ? col.cell(row)
                              : typeof col.selector === "function"
                              ? col.selector(row)
                              : "-"; // Default value

                          return (
                            <div className="data-item-detail" key={col.name}>
                              <Col xs={10}>
                              <h5 className="data-item-detail-name">{col.name}:</h5>
                              <p>{value}</p> 
                              </Col>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>

                    <Button
                      className="show-more-button"
                      variant="link"
                      onClick={() => toggleRow(row.id)}
                    >
                      {isExpanded ? <FaChevronUp /> : <FaChevronDown />} Show
                      More
                    </Button>

                    <Collapse in={isExpanded}>
                      <div className="data-item-expanded">
                        {columns.map((col) => {
                          // Display additional details in the dropdown
                          if (
                            ![
                              "Name",
                              "Mobile Number",
                              "Company Services",
                              "Remarks",
                            ].includes(col.name)
                          ) {
                            const value =
                              typeof col.cell === "function"
                                ? col.cell(row)
                                : typeof col.selector === "function"
                                ? col.selector(row)
                                : "-"; // Default value

                            return (
                              <div className="data-item-detail" key={col.name}>
                                <strong>{col.name}:</strong> {value}
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
          {/* Large screen layout */}
          <div id="data-table-large" className="data-table-container-large">
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
              onSelectedRowsChange={handleRowSelected}
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default CustomerLeads;
