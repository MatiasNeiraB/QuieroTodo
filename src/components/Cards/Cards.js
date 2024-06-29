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
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container className='d-flex flex-wrap'>
            {products.map((product) => (
                <ProductCard key={product.sku} product={product} />
            ))}
        </Container>
    );
};


const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <Card className='m-2' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body><div className='text-center'>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Codigo: {product.sku}</Card.Text>
                <Card.Text className='my-2'><strong>$</strong>{product.price}</Card.Text>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={handleDecrease} className='btn btn-danger'>-</button>
                    <input type='number' value={quantity} className='inputQuantity mx-2'></input>
                    <button onClick={handleIncrease} className='btn btn-success'>+</button>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-success mt-2' id={product.sku}>AGREGAR AL CARRITO</button>
                </div>
            </Card.Body>
        </Card>
    );
};


export default CardProduct;
