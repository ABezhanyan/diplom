import './App.css';
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom"
import Advantages from "./Components/Advantages/Advantages";
import Catalog from "./Components/Catalog/Catalog";
import Fresh from "./Components/Fresh/Fresh";
import Reviews from "./Components/Reviews/Reviews";
import Subscribe from "./Components/Subscribe/Subscribe";
import ContactUs from "./Components/ContactUs/ContactUs";
import HeaderM from "./Components/Header/HeaderM";
import Footer from "./Components/Footer/Footer";


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
                   <Route path="/about" element={<Footer />}></Route>
               </Routes>
               <Routes>
                   <Route path="/" element={<Advantages />}></Route>
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
               </Routes>
       </div>
   </BrowserRouter>
  );
}

export default App;
