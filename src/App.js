import './App.css';
import Hero from "./Components/Header/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Logo from "./Components/Logo/Logo";
import Wip from "./Components/Swiper/Wip";
import Content from "./Components/Content/Content";



const App = () => {
  return (
    <div className="ShopFood">
        <NavBar />
        <Logo />
        <Hero />
        <Wip />
        <Content />
    </div>
  );
}

export default App;
