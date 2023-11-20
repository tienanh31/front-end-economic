import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Navbar_Menu from "../Components/Navbar_Menu"
import Product_Card from "../Components/Product_Card"
const Home = () => {
    return (
        <>
<Header/>
<Navbar_Menu/>
<div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
            <div className="row product-grid-4">
            <Product_Card></Product_Card>
            <Product_Card></Product_Card>
            <Product_Card></Product_Card>
            <Product_Card></Product_Card>
            <Product_Card></Product_Card>
            <Product_Card></Product_Card>
            <Product_Card></Product_Card>
            <Product_Card></Product_Card>
            <Product_Card></Product_Card>
            <Product_Card></Product_Card>
            <Product_Card></Product_Card>
            <Product_Card></Product_Card>
            <Product_Card></Product_Card>

            </div>
    </div>
    </div>
<Footer/>
</>
        )
    }
    
    export default Home