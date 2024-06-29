import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




const NavBarLogin = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="./product">Quiero Todo</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarLogin;