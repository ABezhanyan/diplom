import './Logo.css'
import logo from '../img/logo.svg'

const Logo = () => {
  return (
      <div className="content">
          <img src={logo} className='imgLogo' alt=""/>
      </div>
  )
}

export default Logo;