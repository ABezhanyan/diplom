import classes from './Hero.module.css'
import hero from '../img/Hero.svg'

const Hero = () => {
    return (
        <div className={classes.header}>
            <img src={hero} className={classes.img} alt=""/>
        </div>
    )
}

export default Hero;