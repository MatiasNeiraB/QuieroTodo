
import { FormGroup } from 'react-bootstrap';
//import axiosClient from '../../config/axiosClient';
import Form from 'react-bootstrap/Form';

function LoginForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"/>
            </Form.Group>

            <FormGroup className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" />
            </FormGroup>

            <button type='submit' className='btn btn-primary'>Entrar</button>
        </Form>
    );
}

export default LoginForm;