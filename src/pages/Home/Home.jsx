import { Link } from 'react-router-dom'
import './Home.css'
import backgroundVideo from '../../assets/BackgroundVideo.mp4'
import service1 from '../../assets/services1.jpg'
import service2 from '../../assets/mafroshat.jpg'
import service3 from '../../assets/developement.jpg'
import homeIcon from '../../assets/icons/home.svg'
import designIcon from '../../assets/icons/design.svg'
import qualityIcon from '../../assets/icons/quality.svg'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">ديكورات فاخرة ... تفاصيل تصنع الفرق</h1>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          نصمم وننفذ حلول ديكور متكاملة ومبتكرة تمزج بين الحداثة والفخامة، لتجعل منزلك مساحة استثنائية مليئة بالأناقة والراحة. نحن نهتم بأدق التفاصيل لنخلق بيئة تعكس ذوقك الخاص وتلبي احتياجاتك.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
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
      <section
        className="features"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s, transform 0.7s' }}
        ref={el => {
          if (!el) return;
          if (el._scrollListenerAdded) return;
          el._scrollListenerAdded = true;
          const onScroll = () => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 200) {
              el.style.opacity = 1;
              el.style.transform = 'translateY(0)';
              window.removeEventListener('scroll', onScroll);
            }
          };
          window.addEventListener('scroll', onScroll);
          onScroll();
        }}
      >
        <div className="container">

          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon"><img src={homeIcon} alt="home" /></div>
              <h3>تصميم مخصص</h3>
              <p>
                نقدم تصاميم فريدة ومخصصة تناسب ذوقكم الشخصي 
                ومساحة منزلكم بأفضل الطرق المبتكرة
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><img src={qualityIcon} alt="quality" /></div>
              <h3>جودة عالية</h3>
              <p>
                نستخدم أفضل المواد والأدوات عالية الجودة 
                لضمان نتائج مذهلة تدوم لسنوات عديدة
              </p>
            </div>
            
            <div className="feature-card">
            <div className="feature-icon"><img src={designIcon} alt="design" /></div>
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

          <div className="services-grid">
            <article className="service-card" data-aos="fade-up" data-aos-duration="800">
              <div className="service-card-image">
                <img src={service1} alt="تصميم الديكورات الداخلية" loading="lazy" />
              </div>
              <div className="service-card-body">
                <h3>تصميم الديكورات الداخلية</h3>
                <p>
                  نقدم خدمات التصميم الداخلي الشاملة للمنازل والمكاتب والفنادق.
                  نعمل على إعادة تصور المساحات وتحويلها إلى أماكن جميلة وعملية
                  تناسب احتياجاتكم وأسلوب حياتكم.
                </p>
                <Link to="/contact" className="service-cta">
                  <span>اطلب الخدمة الان</span>
                  <svg className="service-cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </article>

            <article className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <div className="service-card-image">
                <img src={service2} alt="اختيار المفروشات" loading="lazy" />
              </div>
              <div className="service-card-body">
                <h3>اختيار المفروشات</h3>
                <p>
                  نساعدكم في اختيار أفضل المفروشات والأثاث الذي يتناسب مع التصميم العام للمكان.
                  نقدم استشارات لاختيار الألوان والأنسجة والقطع التي تضيف لمسة أناقة مميزة.
                </p>
                <Link to="/contact" className="service-cta">
                  <span>اطلب الخدمة الان</span>
                  <svg className="service-cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </article>

            <article className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <div className="service-card-image">
                <img src={service3} alt="التجديد والتطوير" loading="lazy" />
              </div>
              <div className="service-card-body">
                <h3>التجديد والتطوير</h3>
                <p>
                  نقدم خدمات التجديد والتطوير للمساحات الموجودة لتحويلها إلى أماكن عصرية وجميلة
                  مع الحفاظ على الطابع الأصلي والهوية المعمارية.
                </p>
                <Link to="/contact" className="service-cta">
                  <span>اطلب الخدمة الان</span>
                  <svg className="service-cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </article>

            
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-light">
        <div className="container text-center">
          <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">شاهد أعمالنا المميزة</h2>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="mb-4">
            اكتشف كيف حوّلنا أفكار عملائنا إلى واقع ينبض بالجمال والإبداع.<br />
            تصفح معرض مشاريعنا واستلهم تصميم منزلك أو مكتبك القادم!
          </p>
          <Link to="/about" className="btn btn-large watch-btn" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            شاهد نماذج أعمالنا الآن
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
