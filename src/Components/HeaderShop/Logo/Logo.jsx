import classes from './Logo.module.css'
import logo from '../img/logo.svg'





const Logo = () => {
  return (
      <div className={classes.content}>
          <img src={logo} className="img" alt=""/>
      </div>
  )
}

export default Logo;