import NavBar from "../components/navbar/NavBar";
import CardProduct from "../components/Cards/Cards";
import '../components/Cards/Cards.css'


const Home = () => {
    return(
        <div>
        <NavBar/>
        <div class="box">
        <CardProduct/>
        </div>
        </div>
    )

}

export default Home;