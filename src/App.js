import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import {BrowserRouter} from "react-router-dom"
import Advantages from "./Components/HomePage/Advantages/Advantages";
import Catalog from "./Components/CommonComponents/Catalog/Catalog";
import Fresh from "./Components/HomePage/Fresh/Fresh";
import Reviews from "./Components/HomePage/Reviews/Reviews";
import Subscribe from "./Components/HomePage/Subscribe/Subscribe";
import axios from 'axios';
import HeaderM from "./Components/CommonComponents/Header/HeaderM";
import Footer from "./Components/CommonComponents/Footer/Footer";
import FooterShop from "./Components/ShopPage/FooterShop/FooterShop";
import About from "./Components/AboutPage/About/About";
import AboutContent from "./Components/AboutPage/AboutContent/AboutContent";
import AboutSubscribe from './Components/AboutPage/AboutSubscribe/AboutSubscribe';
import Gallery from './Components/ContactPage/Contact/Contact'
import GalleryContent from './Components/ContactPage/ContactContent/ContactContent';
import ContactUSTwo from './Components/ContactPage/ContactUS_page/ContactUSTwo';
import MapYandex from './Components/ContactPage/Map/MapYandex';
import ShopHeader from './Components/ShopPage/ShopHeader/ShopHeader';
import Drawer from './Components/ShopPage/Shop/Drawer/Drawer';
import React from 'react';
import CatalogOne from './Components/CommonComponents/Catalog/CatalogOne/CatalogOne';
import CHeader from './Components/CommonComponents/Catalog/CHeader/CHeader';




const App = (props) => {
    
    const [cardOpened, setCartOpened] = React.useState(false);
    const [cardItems, setCartItems] = React.useState([]);
    const [items, setItems] = React.useState([]);
  


    React.useEffect(() => {
        axios.get('https://62665c61dbee37aff9afd76c.mockapi.io/items')
        .then((res) => {
            setItems(res.data);
        }) 
        axios.get('https://62665c61dbee37aff9afd76c.mockapi.io/card')
        .then((res) => {
            setCartItems(res.data);
        }) 
    }, []);
  
    const onAddtoCart = (obj) => {
        axios.post('https://62665c61dbee37aff9afd76c.mockapi.io/card', obj);
        setCartItems((prev) => [...prev, obj]);
    }
  
    const onRemoveItem = (id) => {
        axios.delete(`https://62665c61dbee37aff9afd76c.mockapi.io/card/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id));
    }
    

  return (
   <BrowserRouter>
       <div className="mom">
           <div>
                <Route path="/">
                    {cardOpened && <Drawer items={cardItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)} />}
                </Route>

                <Route path="/" exact>
                    {<HeaderM onClickCart={() => setCartOpened(true)}/>}
                    <Footer />
                    <Advantages />

                
                    <div className="Catalog">
                            <CHeader />
                            <div className="catalog_items">
                                <div className="catalog_items_col">
                                    {items.map((obj) => (
                                    <CatalogOne
                                        title={obj.title}
                                        price={obj.price}
                                        imageUrl={obj.imageUrl}
                                        onPluse={(obj) => onAddtoCart(obj)}
                                    />
                                    ))}
                            </div>
                        </div>
                    </div>

                    <Fresh />
                    <Reviews />
                    <Subscribe />
                    <FooterShop />
                    
                    
                </Route>
            
               <Route path="/shop" exact>
                    {<HeaderM onClickCart={() => setCartOpened(true)}/>}
                    <ShopHeader />
                    
                    <div className="Catalog">
                            <CHeader />
                            <div className="catalog_items">
                                <div className="catalog_items_col">
                                    {items.map((obj) => (
                                    <CatalogOne
                                        title={obj.title}
                                        price={obj.price}
                                        imageUrl={obj.imageUrl}
                                        onPluse={(obj) => onAddtoCart(obj)}
                                    />
                                    ))}
                            </div>
                        </div>
                    </div>

                    <FooterShop />
               </Route>

               <Route path="/about" exact>
                    {<HeaderM onClickCart={() => setCartOpened(true)}/>}
                    <About />
                    <AboutContent />
                    <AboutSubscribe />
                    <FooterShop />
               </Route>

               <Route path="/contact" exact>
                    {<HeaderM onClickCart={() => setCartOpened(true)}/>}
                    <Gallery />
                    <GalleryContent />
                    <ContactUSTwo />
                    <MapYandex />
                    <FooterShop />
               </Route>
           </div>    
       </div>
   </BrowserRouter>
  );
}

export default App;
