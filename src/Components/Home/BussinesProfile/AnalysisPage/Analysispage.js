import React, { useState } from "react";
import { Card, Col, Row, Button, Image } from "react-bootstrap";
import { Bar, Pie } from "react-chartjs-2";
import barImg from "../../../Images/BarChart.png";
import pieImg from "../../../Images/pieCharat.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useMediaQuery } from "react-responsive";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Analysispage = ({ data }) => {
  const [showBarChart, setShowBarChart] = useState(true);

  // Convert data to arrays suitable for Chart.js
  const labels = Object.keys(data);
  const dataValues = Object.values(data);

  // Bar Chart Data
  const barData = {
    labels: labels,
    datasets: [
      {
        label: "Bar Dataset",
        data: dataValues,
        backgroundColor: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
      },
    ],
  };

  // Pie Chart Data
  const pieData = {
    labels: labels,
    datasets: [
      {
        label: "Pie Dataset",
        data: dataValues,
        backgroundColor: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
      },
    ],
  };

  // Media query for mobile view
  const isMobile = useMediaQuery({ query: "(max-width: 575px)" });

  return (
    <Card style={{ height: "auto", marginBottom: "1rem" }}>
      <Card.Body style={{ width: "100%" }}>
        {isMobile && (
          <Button
          onClick={() => setShowBarChart(!showBarChart)}
          style={{
            marginBottom: "1rem",
            backgroundColor: "white",
            border: "1px solid #ddd",
            padding: "0.5rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
            borderRadius: "5px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
          aria-label={
            showBarChart ? "Switch to Pie Chart" : "Switch to Bar Chart"
          }
        >
          <Image
            src={showBarChart ? pieImg : barImg}
            alt={showBarChart ? "Pie Chart" : "Bar Chart"}
            style={{ width: "20px", height: "20px", objectFit: "contain" }}
          />
          <span style={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}>
            {showBarChart ? "Pie Chart" : "Bar Chart"}
          </span>
        </Button>
        
        )}
        <Row>
          {(!isMobile || showBarChart) && (
            <Col
              xs={12}
              sm={6}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0.5rem",
              }}
            >
              <div style={{ width: "100%", height: "300px" }}>
                <Bar
                  data={barData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false, // Added this line
                    plugins: {
                      legend: {
                        position: "top",
                      },
                      tooltip: {
                        callbacks: {
                          label: (context) => {
                            const datasetLabel = context.dataset.label || "";
                            return `${datasetLabel}: ${context.raw}`;
                          },
                        },
                      },
                    },
                    scales: {
                      x: {
                        title: {
                          display: true,
                          text: "Services",
                        },
                        ticks: {
                          autoSkip: true,
                          maxTicksLimit: 10,
                        },
                      },
                      y: {
                        title: {
                          display: true,
                          text: "Values",
                        },
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </Col>
          )}

          {(!isMobile || !showBarChart) && (
            <Col
              xs={12}
              sm={6}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0.5rem",
              }}
            >
              <div
                style={{ width: "100%", maxWidth: "300px", height: "300px" }}
              >
                <Pie
                  data={pieData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                      tooltip: {
                        callbacks: {
                          label: (context) => {
                            const label = context.label || "";
                            const value = context.raw || 0;
                            const total =
                              context.chart.data.datasets[0].data.reduce(
                                (acc, data) => acc + data,
                                0
                              );
                            const percentage = ((value / total) * 100).toFixed(
                              2
                            );
                            return `${label}: ${value} (${percentage}%)`;
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Analysispage;