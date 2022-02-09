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



const App = () => {
  return (
    <div>
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
    </div>
  );
}

export default App;
