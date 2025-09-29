import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/" className="footer-link">الرئيسية</Link>
          <Link to="/about" className="footer-link">من نحن</Link>
          <Link to="/contact" className="footer-link">اتصل بنا</Link>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 شركة الديكورات المتميزة. جميع الحقوق محفوظة.</p>
          <p>نحن متخصصون في تقديم أفضل خدمات الديكورات والتصميم الداخلي</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
