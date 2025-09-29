import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Logo-Decoration.svg'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo" onClick={closeMenu}>
         <img src={logo} alt="logo" width="50px"/>
        </Link>
        
        <nav>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                من نحن
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                اتصل بنا
              </Link>
            </li>
          </ul>
        </nav>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu}
          aria-label="فتح القائمة"
        >
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header
