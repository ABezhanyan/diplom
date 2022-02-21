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
import Revives from "./Components/Reviews/Revives";
import SubText from "./Components/Subscribe/SubscribeText/SubText";
import SubForm from "./Components/Subscribe/SubscribeForm/SubForm";
import ContactHeader from "./Components/ContactUs/ContactHeader/ContactHeader";
import ContactInfo from "./Components/ContactUs/ContactInfo/ContactInfo";
import ContactForm from "./Components/ContactUs/ContactForm/ContactForm";
import ContactOrganicText_Social from "./Components/ContactUs/ContactOrganicText/ContactOrganicText_Social";
import ContactMainMenu from "./Components/ContactUs/ContactMainMenu/ContactMainMenu";
import ContactUS_Text from "./Components/ContactUs/ContactUS_Text/ContactUS_Text";
import ContactUP from "./Components/ContactUs/ContactUP/ContactUP";
import All from "./Components/ContactUs/All2022/All";







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
        <div className="Reviews">
            <Revives />
        </div>
        <div className="Subscribe">
            <SubText />
            <SubForm />
        </div>
        <div className="ContactUS">
           <div className="ContactUS_one">
               <ContactHeader />
               <ContactInfo />
               <ContactForm />
           </div>
            <div className="ContactUS_two">
                <div className="ContactUS_coll">
                    <ContactOrganicText_Social />
                    <ContactMainMenu />
                    <ContactUS_Text />
                    <ContactUP />
                </div>
                <div className="ContactAll">
                    <All />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
