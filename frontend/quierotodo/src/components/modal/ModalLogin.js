import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import useForm from '../../hooks/useForm';
import { validationLogin } from '../../helpers/validationLogin';
import { values_login } from '../../constants/login';
import { Alert } from 'react-bootstrap';


const modalLogin = ({ show, handleClose }) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { handleKeyUp, handleSubmit, values, errors } = useForm(values_login, validationLogin);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Panel Administración</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email" placeholder="name@example.com" name="email" onKeyUp={handleKeyUp} autoFocus />
                            {values.email.touch && errors.email && <Alert severity="error" variant="filled" className="mt-3" >{errors.email}</Alert>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="contraseña" name="password" onKeyUp={handleKeyUp} autoFocus />
                            {values.password.touch && errors.password && <Alert severity="error" variant="filled" className="mt-3" >{errors.password}</Alert>}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                    <Button variant="primary" type="submit" Click={handleClose}>Entrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default modalLogin;