import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import ModalLogin from '../Modal/ModalLogin';
import { Form } from 'react-bootstrap';



const NavBar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">hola</Navbar.Brand>
                    <Navbar.Toggle />
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="nombre o codigo"
                            className="me-2"
                            aria-label="Search"
                            name="search"
                        />
                        <Button variant="primary">Buscar</Button>
                    </Form>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button variant="primary" onClick={handleShow}>Administracion</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ModalLogin show={show} handleClose={handleClose} />
        </>
    );
}

export default NavBar;