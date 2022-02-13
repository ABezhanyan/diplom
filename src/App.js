import './App.css';
import Hero from "./Components/HeaderMain/Header/Hero";
import NavBar from "./Components/HeaderMain/NavBar/NavBar";
import Logo from "./Components/HeaderMain/Logo/Logo";
import Wip from "./Components/HeaderMain/Swiper/Wip";
import Content from "./Components/HeaderMain/Content/Content";
import AHeader from "./Components/Advantages/AHeaderMain/AHeader";
import CardOne from "./Components/Advantages/CardOne/CardOne";
import CardTwo from "./Components/Advantages/CardTwo/CardTwo";
import CardThree from "./Components/Advantages/CardThree/CardThree";
import CardFour from "./Components/Advantages/CardFour/CardFour";
import CHeader from "./Components/Catalog/CHeader/CHeader";
import CatalogOne from "./Components/Catalog/CatalogOne/CatalogOne";
import CatalogTwo from "./Components/Catalog/CatalogTwo/CatalogTwo";
import CatalogThree from "./Components/Catalog/CatalogThree/CatalogThree";
import CatalogFour from "./Components/Catalog/CatalogFour/CatalogFour";
import CatalogFive from "./Components/Catalog/CatalogFive/CatalogFive";
import CatalogSix from "./Components/Catalog/CatalogSix/CatalogSix";
import CatalogSeven from "./Components/Catalog/CatalogSeven/CatalogSeven";
import CatalogEight from "./Components/Catalog/CatalogEight/CatalogEight";
import CatalogNine from "./Components/Catalog/CatalogNine/CatalogNine";
import AllProducts from "./Components/Catalog/CatalogAllProducts/AllProducts";
import FreshImg from "./Components/Fresh/FreshImg/FreshImg";
import FreshText from "./Components/Fresh/FreshText/FreshText";



const App = () => {
  return (
    <div className="mom">
        <div className="ShopFood">
            <NavBar />
            <Logo />
            <Hero />
            <Wip />
            <Content />
        </div>
        <div className="Advantages">
            <AHeader />
            <CardOne />
            <CardTwo />
            <CardThree />
            <CardFour />
        </div>
        <div className="Catalog">
            <CHeader />
            <CatalogOne />
            <CatalogTwo />
            <CatalogThree />
            <CatalogFour />
            <CatalogFive />
            <CatalogSix />
            <CatalogSeven />
            <CatalogEight />
            <CatalogNine />
            <AllProducts />
        </div>
        <div className="Fresh">
            <FreshImg />
            <FreshText />
        </div>
    </div>
  );
}

export default App;
