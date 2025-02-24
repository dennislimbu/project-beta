import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTachometerAlt, faCalendarAlt, faBell, faCog, faUsers, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import supabase from '../helper/supabaseClient';
import './css/header.css';
import './css/NavBar.css';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState('');

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);
    navigate(selectedKey);
  };

  useEffect(() => {
    setActiveKey(location.pathname);
  }, [location]);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate('/login');
  };

  return (
    <Navbar className="navbar-custom flex-column vh-80">
      <div className='container-fluid h-100'>
        <div className='row h-100 w-70'>
          <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-column justify-content-start align-items-start mt-3 mb-1 h-auto">
            {/* Search Content */}
            <Form className="d-flex align-items-start w-100 mt-5">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light w-auto" className="search-button" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
            {/* Sidebar Navigation Content */}
            <hr className="divider" />
            <Nav className="flex-column w-100 justify-content-center align-items-start" activeKey={activeKey} onSelect={handleSelect}>
              <Nav.Link eventKey="/dashboard" href="#" className={activeKey === '/dashboard' ? 'active' : ''}>
                <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
                <span className="nav-text">Dashboard</span>
              </Nav.Link>
              <Nav.Link eventKey="/calendar" href="#" className={activeKey === '/calendar' ? 'active' : ''}>
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                <span className="nav-text">Calendar</span>
              </Nav.Link>
              <hr className="divider" />
              {/* Drop Down Content */}
              <NavDropdown title={<span><FontAwesomeIcon icon={faUsers} className="me-2" /><span className="nav-text">Employees</span></span>} id="basic-nav-dropdown" className="push-down-dropdown w-100">
                <NavDropdown.Item eventKey="/employees/list" className={activeKey === '/employees/list' ? 'active' : ''}>List</NavDropdown.Item>
                <NavDropdown.Item eventKey="/employees/add" className={activeKey === '/employees/add' ? 'active' : ''}>Add Employee</NavDropdown.Item>
                <NavDropdown.Item eventKey="/employee" className={activeKey === '/employee' ? 'active' : ''}>Employee</NavDropdown.Item>
                </NavDropdown>
              <hr className="divider" />
              <Nav.Link eventKey="/notifications" href="#" className={activeKey === '/notifications' ? 'active' : ''}>
                <FontAwesomeIcon icon={faBell} className="me-2" />
                <span className="nav-text">Notifications</span>
              </Nav.Link>
              <Nav.Link eventKey="/settings" href="#" className={activeKey === '/settings' ? 'active' : ''}>
                <FontAwesomeIcon icon={faCog} className="me-2" />
                <span className="nav-text">Settings</span>
              </Nav.Link>
            </Nav>
            {/* User and Signout */}
            <Nav className="flex-column align-items-start justify-content-end mt-auto p-3 w-100">
              <Nav.Link href="#" className={activeKey === '/user' ? 'active' : ''}>
                <FontAwesomeIcon icon={faUser} className="me-2" />
                <span className="nav-text">User</span>
              </Nav.Link>
              <Button variant="outline-light" onClick={signOut}>
                <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                <span className="nav-text">Sign Out</span>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
}

export default Sidebar;