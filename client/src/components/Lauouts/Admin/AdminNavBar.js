import React from 'react'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from '../../../context/auth';
import { useNavigate } from 'react-router-dom';
import Logo from "../../../assets/img/logo.png";

const AdminNavBar = () => {
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate();
    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ''
        });
        localStorage.removeItem('auth');
        navigate(`/`)
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/admin/dashboard"><img src={Logo}  width={250}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/admin/dashboard">Home</Nav.Link>
                        <NavDropdown title="Slider" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/admin/sliders">Show All Slider</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/add_slider">Add New Slider </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="About" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/admin/about">Show About</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/add_about">Add About Section </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Service" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/admin/services">Services</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/add_services">Add Service </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Project" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/admin/projects">Projects</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/add_project">Add Project </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Clients" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/admin/clients">Clients</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/add_client">Add Client </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Conects" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/admin/appointment">Appointments</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/contact">Contact </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink} style={{ marginRight: '5pc' }}><i className="fa-solid fa-circle-user"></i></Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Hello {auth.user[0].name}</Dropdown.Item>
                            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default AdminNavBar