import { Link } from 'react-router-dom'
import logo from '../assets/Logo-Decorations-White.svg'
import locationIcon from '../assets/icons/location.svg'
import phoneIcon from '../assets/icons/phone.svg'
const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        {/* Top: Brand + description */}
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="العودة للصفحة الرئيسية">
              <img src={logo} alt="شركة الديكورات المتميزة" width="100px" />
            </Link>
          </div>

          {/* Quick Links */}
          <nav className="footer-links-group" aria-label="روابط مهمة">
            <div className="footer-links">
              <Link to="/" className="footer-link">الرئيسية</Link>
              <Link to="/about" className="footer-link">من نحن</Link>
              <Link to="/contact" className="footer-link">اتصل بنا</Link>
            </div>
          </nav>

          {/* Contact */}
          <div className="footer-contact">
            {/* <h4 className="footer-heading">تواصل</h4> */}
            <ul className="footer-contact-list" dir="rtl">
              <li className="footer-contact-item"><img src={locationIcon} alt="location" width="30px" /> الكويت، الكويت</li>
              <li className="footer-contact-item"><img src={phoneIcon} alt="phone" width="30px" /> الهاتف: 96555792622 <span>+</span></li>
              {/* <li className="footer-contact-item">البريد: decorations.arab@gmail.com</li> */}
            </ul>
          </div>
        </div>

        {/* Bottom: legal */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()}  ديكورات الكويت . جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
