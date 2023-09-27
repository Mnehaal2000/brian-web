import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../assets/navitems/LOGO.png"

const NavBar = () => {
    return (
        <>
            <Navbar sticky="top" expand="md">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 lg:gap-2 xl:gap-14"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/login"><span className='text-xs lg:text-sm font-bold xl:ml-[60px]'>Who we are</span></Nav.Link>
                            <Nav.Link href="#action2"><span className='text-xs lg:text-sm font-bold'>What we do</span></Nav.Link>
                            <Nav.Link href="#action3"><span className='text-xs lg:text-sm font-bold'>Energy & Innovation</span></Nav.Link>
                            <Nav.Link href="#action4"><span className='text-xs lg:text-sm font-bold'>Ecocentury Startups &ventures</span></Nav.Link>
                            <Nav.Link href="#action5"><span className='text-xs lg:text-sm font-bold'>Resources</span></Nav.Link>
                            <Nav.Link href="#action6"><span className='text-xs lg:text-sm font-bold'>Store</span></Nav.Link>
                        </Nav>

                        <Button className='xl:w-[120px]' variant="success">Login</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
