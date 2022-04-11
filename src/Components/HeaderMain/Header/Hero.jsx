import classes from './Hero.module.css'
// import hero from '../img/Hero.svg'
import hero1440 from '../img/Hero1440.jpg'
import hero from '../img/Hero.jpg'

const Hero = () => {
    return (
        <div className={classes.header}>
            <img src={hero1440} className={classes.img} alt=""/>
        </div>
    )
}

export default Hero;