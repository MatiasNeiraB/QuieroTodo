import { Card, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axiosClient from '../../config/axiosClient';

const CardProduct = () => {

    const [products, setProducts] = useState([]);

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
    }, []);
    return (
        <Container className='d-flex flex-wrap'>
            {products.map((product) => (
                <Card className='m-2' style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>Codigo:{product.sku} </Card.Text>
                        <Card.Text>Precio: {product.price}</Card.Text>
                    </Card.Body>
                </Card>
            ))
            }
        </Container>
    );
}

export default CardProduct;