import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Form } from 'react-bootstrap';




const NavBar = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="./product">Quiero Todo</Navbar.Brand>
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
                            <Button variant="primary" href='./login'>Inicia Sesión</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;