import React from 'react'
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Styles/NavBar.css"

const NavBar = () => {
    return (
        <div>

            <Navbar expand="lg" className="shadow-sm py-3 BG" id='bg'>
                <Container fluid>
                    {/* Logo on the extreme left */}
                    <Navbar.Brand as={Link} to="/" className="d-flex align-items-center me-auto">
                        <img
                            src="images/logo.jpg" // Replace with your actual logo path
                            alt="AgriConnect Logo"
                            width="50px"
                            height="50px"
                            className="me-2 logo-img"
                        />
                        <span style={{ color: '#2E7D32' }} className="fw-bold fs-4">Kishan</span>
                        <span style={{ color: '#FFFFFF' }} className="fw-bold fs-4">Sakhi</span>
                    </Navbar.Brand>

                    {/* Hamburger Toggle for mobile */}
                    <Navbar.Toggle aria-controls="navbar-nav" />

                    {/* All other nav options aligned to the right */}
                    <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                        <Nav className="align-items-center d-flex gap-2">
                            <Nav.Link as={Link} to="/" style={{ color: '#255c14' }}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/buy" style={{ color: '#255c14' }}>Buy</Nav.Link>
                            <Nav.Link as={Link} to="/sell" style={{ color: '#255c14' }}>Sell</Nav.Link>
                            <Nav.Link as={Link} to="/cropadvisor" style={{ color: '#255c14' }}>CropAdvisor</Nav.Link>
                            <Nav.Link as={Link} to="/weather" style={{ color: '#255c14' }}>Weather</Nav.Link>
                            <Nav.Link as={Link} to="/livemarketprice" style={{ color: '#255c14' }}>LiveMarkpetPrice</Nav.Link>
                            <Nav.Link as={Link} to="/learn" style={{ color: '#255c14' }}>Learn</Nav.Link>

                            {/* Language Toggle */}
                            <Dropdown className="ms-3 ">
                                <Dropdown.Toggle className='gradient-btn'>
                                    EN
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>ENGLISH</Dropdown.Item>
                                    <Dropdown.Item>हिन्दी</Dropdown.Item>
                                    <Dropdown.Item>ଓଡ଼ିଆ</Dropdown.Item>
                                    <Dropdown.Item>മലയാളം</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* Auth Buttons */}
                            <Button as={Link} to="/login" variant="success" className="ms-3  gradient-btn">Login</Button>
                            <Button as={Link} to="/signup" variant="success" className="ms-2 gradient-btn">Sign Up</Button>
                            <Dropdown className="mt-3">
                                <Dropdown.Toggle className="gradient-btn">Profile</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/profile">View Profile</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar;