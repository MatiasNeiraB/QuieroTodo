import NavBar from "../components/navbar/NavBar";
import CardProduct from "../components/cards/Cards";
import '../components/cards/Cards.css'


const Products = () => {
    return(
        <div>
        <NavBar/>
        <div class="box">
        <CardProduct/>
        </div>
        </div>
    )

}

export default Products;