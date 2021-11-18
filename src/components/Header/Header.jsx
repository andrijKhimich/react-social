import logo from "./images/logo.png"
import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <a href="./" className="logo-link">
          <img src={logo} alt="facebook"/>
        </a>
      </div>
    </div>
  )
}

export default Header;
