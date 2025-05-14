import { Link } from "react-router-dom";
import '../CSS/navbar.css'

function Navbar() {
  return (
    <>
  <nav>
  <div className="menu-toggle" onClick={() => document.querySelector('ul').classList.toggle('active')}>
      ☰ 
    </div>
    <ul>
      <Link className="l1" to={'/'}><li>home</li></Link>
      <Link className="l1" to={'education'}><li>education</li></Link>
      <Link className="l1" to={'skills'}><li>skills</li></Link>
      <Link className="l1" to={'projects'}><li>projects</li></Link>
      <Link className="l1" to={'contact'}><li>contact</li></Link>
    </ul>
  </nav>
</>
  )
}

export default Navbar;