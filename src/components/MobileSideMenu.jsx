import { Link } from 'react-router-dom'

const MobileSideMenu = ({ isOpen, onClose, currentPath }) => {
  return (
    <>
      <div
        className={`mobile-drawer-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <aside
        className={`mobile-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="قائمة التنقل"
      >
        <div className="mobile-drawer-header">
          <button className="mobile-drawer-close" onClick={onClose} aria-label="إغلاق القائمة">
            ×
          </button>
        </div>
        <nav className="mobile-drawer-nav">
          <ul>
            <li>
              <Link
                to="/"
                className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
                onClick={onClose}
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${currentPath === '/about' ? 'active' : ''}`}
                onClick={onClose}
              >
                من نحن
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`}
                onClick={onClose}
              >
                اتصل بنا
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default MobileSideMenu


