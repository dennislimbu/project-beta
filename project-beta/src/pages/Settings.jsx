import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from '../components/Navbar';
import Header from '../components/Header';

function Settings() {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Update the code to get the info from the back log */}
      <Header user={{ firstName: 'John', lastName: 'Doe', position: 'Manager', image: 'default-image-url' }} /> 
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <Container className="mt-5 flex-grow-1">
          <h1>Settings</h1>
        </Container>
      </div>
    </div>
  );
}

export default Settings;