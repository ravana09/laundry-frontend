import React from 'react';
import Analysispage from '../Analysispage';
import { Card } from 'react-bootstrap';
import '../AnalysisPgae.css'

function AllAnalysisPage() {
  // Data for Services
  const Servicesdata = {
    "Washing": 50,
    "Ironing": 50,
    "Dry Cleaning": 100,
    "Others": 50,
    
  };

  const Overalldata = {
    "Washing": 150,
    "Ironing": 150,
    "Dry Cleaning": 200,
    "Others": 150
  };

  const Attendanvcedata = {
    "Present": 150,
    "Absent": 10,
    "Late": 5,
    "Leave": 7
  };

  const Leadsedata = {
    "sale": 150,
    "Notsale": 50,
    "Not Connected": 15,
    "Unable to connect": 10
  };

  return (
    <Card style={{ marginTop: '10vh', padding: '1rem' }}>
      <Card.Body className='AllAnalysitBody'>
        <h2>Overall Analysis</h2>
        <Analysispage data={Overalldata} />
        <h2>Services Analysis</h2>
        <Analysispage data={Servicesdata} />
        <h2>Leads Analysis</h2>
        <Analysispage data={Leadsedata} />
        <h2>Attendance Analysis</h2>
        <Analysispage data={Attendanvcedata} />
      </Card.Body>
    </Card>
  );
}

export default AllAnalysisPage;
