import classes from './Logo.module.css'
import logo from '../img/logo.svg'


const Logo = () => {
  return (
      <div className={classes.content}>
          <img src={logo} className={classes.img} alt=""/>
      </div>
  )
}

export default Logo;