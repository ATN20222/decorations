import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Logo-Decoration.svg'
import logoWhite from '../assets/Logo-Decorations-White.svg'
import MobileSideMenu from './MobileSideMenu'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className={`navbar ${location.pathname !== '/' ? 'nav-c' : '' } ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-content">
        <Link to="/" className="logo" onClick={closeMenu}>
         <img src={!isScrolled ? logoWhite : logo} alt="logo" width="60px"/>
        </Link>
        
        <nav className="desktop-nav">
          <ul className="nav-menu">
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
          className={`mobile-menu-toggle ${isMenuOpen ? 'is-open' : ''}`} 
          onClick={toggleMenu}
          aria-label="فتح القائمة"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-drawer"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <MobileSideMenu isOpen={isMenuOpen} onClose={closeMenu} currentPath={location.pathname} />
    </header>
  )
}

export default Header
