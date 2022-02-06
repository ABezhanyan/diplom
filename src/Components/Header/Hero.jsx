import './Hero.css'
import hero from '../img/Hero.svg';

const Hero = () => {
    return (
        <div className="header">
            <img src={hero} className="header_img" alt=""/>
        </div>
    )
}

export default Hero;