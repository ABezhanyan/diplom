import './App.css';
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom"
import Advantages from "./Components/HomePage/Advantages/Advantages";
import Catalog from "./Components/CommonComponents/Catalog/Catalog";
import Fresh from "./Components/HomePage/Fresh/Fresh";
import Reviews from "./Components/HomePage/Reviews/Reviews";
import Subscribe from "./Components/HomePage/Subscribe/Subscribe";
import ContactUs from "./Components/HomePage/ContactUs/ContactUs";
import HeaderM from "./Components/CommonComponents/Header/HeaderM";
import Footer from "./Components/CommonComponents/Footer/Footer";
import FooterShop from "./Components/ShopPage/FooterShop/FooterShop";
import About from "./Components/AboutPage/About/About";
import AboutContent from "./Components/AboutPage/AboutContent/AboutContent";


const App = () => {
  return (
   <BrowserRouter>
       <div className="mom">
           <div>
               <Routes>
                   <Route path="/" element={<HeaderM />}></Route>
                   <Route path="/shop" element={<HeaderM />}></Route>
                   <Route path="/about" element={<HeaderM />}></Route>
                   <Route path="/gallery" element={<HeaderM />}></Route>
                   <Route path="/contact" element={<HeaderM />}></Route>
               </Routes>
           </div>
               <Routes>
                   <Route path="/" element={<Footer />}></Route>
                   <Route path="/shop" element={<Footer />}></Route>
                   <Route path="/about" element={<About />}></Route>
               </Routes>
               <Routes>
                   <Route path="/" element={<Advantages />}></Route>
                   <Route path="/about" element={<AboutContent />}></Route>
               </Routes>
               <Routes>
                   <Route path="/" element={<Catalog />}></Route>
                   <Route path="/shop" element={<Catalog />}></Route>
               </Routes>
               <Routes>
                   <Route path="/" element={<Fresh />}></Route>
               </Routes>
               <Routes>
                   <Route path="/" element={<Reviews />}></Route>
               </Routes>
               <Routes>
                   <Route path="/" element={<Subscribe />}></Route>
               </Routes>
               <Routes>
                   <Route path="/" element={<ContactUs />}></Route>
                   <Route path="/shop" element={<FooterShop />}></Route>
                   <Route path="/about" element={<FooterShop />}></Route>
               </Routes>
       </div>
   </BrowserRouter>
  );
}

export default App;
