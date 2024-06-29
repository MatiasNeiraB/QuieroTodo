import { useState, useEffect } from "react";
import axiosClient from '../../config/axiosClient';
import { Container } from "react-bootstrap";
import ModalEditProduct from "../ModalEditProduct/ModalEditProduct";


const ProductsAdmin = () => {

    const [products, setProducts] = useState([]);
    const [tablaProducts, setTablaProducts] = useState([]);
    const [busqueda, setBusqueda] = useState([]);
    const [selected, setSelected] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getProducts = async () => {
        try {
            const response = await axiosClient.get("/product");
            setProducts(response.data);
            setTablaProducts(response.data);
            //console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const hadleChange = e => {
        filtrar(e.target.value);
        setBusqueda(e.target.value)
    }

    const filtrar = (terminoBusqueda) => {
        var resultadoBusqueda = tablaProducts.filter((producto) => {
            if (producto.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || producto.sku.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return producto;
            }
        })
        setProducts(resultadoBusqueda)

    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container>
            <div class="input-group mb-3">
                <input type="text" class="form-control" value={busqueda} onChange={hadleChange}
                    placeholder="Nombre o Sku" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Sku</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Imagen</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.sku} onClick={()=>setSelected(product.sku)}>
                            <td>{product.sku}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><img src={product.img} width="60" /></td>
                            <th className=" btn btn-primary" onClick={handleShow} scope="col">Editar</th>
                        </tr>
                    ))}

                </tbody>
            </table>
            <ModalEditProduct show={show} handleClose={handleClose} selected={selected} />
        </Container>
    );

}

export default ProductsAdmin;