import { Modal, Button, Form, Card } from "react-bootstrap";
import { useEffect, useState } from 'react';
import axiosClient from "../../config/axiosClient";

const ModalEditProduct = ({ show, handleClose, selected }) => {

    const [products, setProducts] = useState([]);
    const [resultado, setResultado] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axiosClient.get("/product");
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProducts();
    }, [selected]);

    const filtrar = (selected) => {
        var resultadoBusqueda = products.filter((producto) => {
            if (producto.sku.toString().includes(selected)) {
                return producto;
            }
        }) 
        setResultado(resultadoBusqueda)

    }
    return (
        <>
            {resultado.map((product) => (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        <Card className='m-2' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>Codigo:{product.sku} </Card.Text>
                                <Card.Text>Precio: {product.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                        <Button variant="primary" type="submit" Click={handleClose}>Entrar</Button>
                    </Modal.Footer>

                </Modal>
            ))}

        </>
    )
}
export default ModalEditProduct;
