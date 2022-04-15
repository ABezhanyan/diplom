import classes from './LogoShop.module.scss'
import logo from '../img/logo.svg'


const LogoShop = () => {
    return (
        <div className={classes.content}>
            <img src={logo} className="img" alt=""/>
        </div>
    )
}

export default LogoShop;