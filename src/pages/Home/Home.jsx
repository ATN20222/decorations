import { Link } from 'react-router-dom'
import './Home.css'
import backgroundVideo from '../../assets/BackgroundVideo.mp4'
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>مرحباً بكم في عالم الديكورات الفاخرة</h1>
          <p>
            نحن نقدم أفضل خدمات التصميم الداخلي والديكورات المنزلية 
            بأعلى معايير الجودة والأناقة العصرية
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-large hero-find-btn">
              اكتشف المزيد
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-large">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>لماذا تختارنا؟</h2>
            <p>نحن نتميز بتقديم خدمات متميزة تلبي جميع احتياجاتكم في عالم الديكورات</p>
          </div>
          
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>تصميم مخصص</h3>
              <p>
                نقدم تصاميم فريدة ومخصصة تناسب ذوقكم الشخصي 
                ومساحة منزلكم بأفضل الطرق المبتكرة
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>جودة عالية</h3>
              <p>
                نستخدم أفضل المواد والأدوات عالية الجودة 
                لضمان نتائج مذهلة تدوم لسنوات عديدة
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>فريق محترف</h3>
              <p>
                فريق من المصممين والمهندسين المحترفين 
                ذوي الخبرة الواسعة في مجال الديكورات
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-title">
            <h2>خدماتنا المتميزة</h2>
            <p>نقدم مجموعة شاملة من خدمات الديكورات والتصميم الداخلي</p>
          </div>
          
          <div className="service-item">
            <div className="service-content">
              <h3>تصميم الديكورات الداخلية</h3>
              <p>
                نقدم خدمات التصميم الداخلي الشاملة للمنازل والمكاتب والفنادق. 
                نعمل على إعادة تصور المساحات وتحويلها إلى أماكن جميلة وعملية 
                تناسب احتياجاتكم وأسلوب حياتكم.
              </p>
            </div>
            <div className="service-image">🎨</div>
          </div>
          
          <div className="service-item">
            <div className="service-content">
              <h3>اختيار المفروشات</h3>
              <p>
                نساعدكم في اختيار أفضل المفروشات والأثاث الذي يتناسب مع 
                التصميم العام للمكان. نقدم استشارات مجانية لاختيار الألوان 
                والأنسجة والقطع التي تضيف لمسة أناقة مميزة.
              </p>
            </div>
            <div className="service-image">🛋️</div>
          </div>
          
          <div className="service-item">
            <div className="service-content">
              <h3>التجديد والتطوير</h3>
              <p>
                نقدم خدمات التجديد والتطوير للمساحات الموجودة. 
                نحول المساحات القديمة إلى أماكن عصرية وجميلة 
                مع الحفاظ على الطابع الأصلي والهوية المعمارية.
              </p>
            </div>
            <div className="service-image">🔨</div>
          </div>
          
          <div className="service-item">
            <div className="service-content">
              <h3>الاستشارات المجانية</h3>
              <p>
                نقدم استشارات مجانية لمساعدتكم في اتخاذ القرارات الصحيحة 
                في مجال الديكورات. ننصحكم بأفضل الخيارات التي تناسب 
                ميزانيتكم وتوقعاتكم.
              </p>
            </div>
            <div className="service-image">💡</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-light">
        <div className="container text-center">
          <h2>ابدأ مشروعك معنا اليوم</h2>
          <p className="mb-4">
            تواصل معنا الآن واحصل على استشارة مجانية لمشروعك القادم
          </p>
          <Link to="/contact" className="btn btn-large">
            احجز استشارة مجانية
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
