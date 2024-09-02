import React from 'react'
import {  Card, Container } from 'react-bootstrap'
import CustomerLeads from '../CustomerLeads/CustomerLeads'
import { useLocation } from 'react-router-dom';

function AllReportsPage() {

    const location = useLocation();
    const { Reportstitle, data } = location.state || {};
  return (
    
        <Card>
          <Card.Body>
            <h5>Connected SaleData Reports</h5>
            <CustomerLeads
              data={data}
              Reportstitle={Reportstitle}
            />
          </Card.Body>
        </Card>
    
   
  )
}

export default AllReportsPage