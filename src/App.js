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
import Revives from "./Components/Reviews/Review/Revives";
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
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom"
import Gen from "./Components/HeaderMain/HeaderMain";
import Advantages from "./Components/Advantages/Advantages";
import HeaderMain from "./Components/HeaderMain/HeaderMain";
import Catalog from "./Components/Catalog/Catalog";
import Fresh from "./Components/Fresh/Fresh";
import Reviews from "./Components/Reviews/Reviews";
import Subscribe from "./Components/Subscribe/Subscribe";
import ContactUs from "./Components/ContactUs/ContactUs";
import HeaderShop from "./Components/HeaderShop/HeaderShop";






const App = () => {
  return (
   <BrowserRouter>
       <div className="mom">
           <div>
               <Routes>
                  <Route path="/" element={<HeaderMain />}></Route>
               </Routes>
               <Routes>
                   <Route path="/shop" element={<HeaderShop />}></Route>
               </Routes>
           </div>
           <div>
               <Routes>
                   <Route path="/" element={<Advantages />}></Route>
               </Routes>
           </div>
           <div>
               <Routes>
                   <Route path="/" element={<Catalog />}></Route>
               </Routes>
               <Routes>
                   <Route path="/shop" element={<Catalog />}></Route>
               </Routes>
           </div>
           <div>
               <Routes>
                   <Route path="/" element={<Fresh />}></Route>
               </Routes>
           </div>
           <div>
               <Routes>
                   <Route path="/" element={<Reviews />}></Route>
               </Routes>
           </div>
           <div>
               <Routes>
                   <Route path="/" element={<Subscribe />}></Route>
               </Routes>
           </div>
           <div>
               <Routes>
                   <Route path="/" element={<ContactUs />}></Route>
               </Routes>
           </div>
       </div>
   </BrowserRouter>
  );
}

export default App;
