import { Card } from 'react-bootstrap';

const CardProduct = () => {
    return (
        <>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src="https://f.fcdn.app/imgs/2c03cd/www.palaciodelamusica.com.uy/pmusuy/0955/original/catalogo/012AGG4000-012AGG4000_1/2000-2000/auricular-gamer-g4000-auricular-gamer-g4000.jpg" />
                <Card.Body>
                    <Card.Title>Nombre del producto</Card.Title>
                    <Card.Text>
                        Codigo:
                    </Card.Text>
                    <Card.Text>
                        Precio:
                    </Card.Text>
                </Card.Body>
            </Card>
        </>

    );
}

export default CardProduct;