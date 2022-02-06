import './App.css';
import Hero from "./Components/Header/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Logo from "./Components/Logo/Logo";

const App = () => {
  return (
    <div className="ShopFood">
        <NavBar />
        <Logo />
        <Hero />
    </div>
  );
}

export default App;
