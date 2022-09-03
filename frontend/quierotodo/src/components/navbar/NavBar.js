import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import ModalLogin from '../modal/ModalLogin';



const NavBar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Catalogo Quiero Todo</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <Button variant="primary" onClick={handleShow}>Administracion</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <ModalLogin show={show} handleClose={handleClose}/>
        </>
    );
}

export default NavBar;