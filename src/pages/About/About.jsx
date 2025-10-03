import './About.css'
import logo from '../../assets/Logo-Decoration.svg'
import { lazy, Suspense } from 'react'
import v1 from '../../assets/videos/VID-20250930-WA0001.mp4'
import v2 from '../../assets/videos/VID-20250930-WA0002.mp4'
import v3 from '../../assets/videos/VID-20250930-WA003.mp4'
import v4 from '../../assets/videos/VID-20250930-WA004.mp4'
import v5 from '../../assets/videos/VID-20250930-WA005.mp4'
import v6 from '../../assets/videos/VID-20250930-WA006.mp4'

import medal from '../../assets/icons/medal.svg'
import handshake from '../../assets/icons/handshake.svg'
import idea from '../../assets/icons/lightbulb.svg'
import star from '../../assets/icons/star.svg'
import { Link } from 'react-router-dom'

const ProjectsGallery = lazy(() => import('../../components/ProjectsGallery'))

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="section about-page-header" data-aos="fade-down" data-aos-duration="800">
        <div className="text-center">
          <h1>من نحن</h1>
          <p className="text-gray">
            شركة ديكورات الكويت  - رائدون في عالم التصميم الداخلي والديكورات الفاخرة
          </p>
        </div>
      </section>

      <div className="container">
      {/* Company Story */}
        <section className="section about-company-story" data-aos="fade-up" data-aos-duration="800">
          <div className="grid grid-2">
          <div data-aos="fade-left" data-aos-delay="100">
            <h2>قصتنا</h2>
            <p>
              تأسست شركتنا بهدف تقديم أفضل خدمات التصميم الداخلي والديكورات، 
              مع رؤية واضحة تتمثل في تحويل المساحات العادية إلى أماكن استثنائية 
              تعكس ذوق وشخصية أصحابها.
            </p>
            <p>
              على مر السنوات، استطعنا تنفيذ العديد من المشاريع المميزة في مختلف 
              المناطق، مما جعلنا من الشركات البارزة في مجال الديكورات والتصميم الداخلي.
            </p>
          </div>

            <div className="text-center" data-aos="zoom-in" data-aos-delay="150">
              <div className="service-image">
                <img src={logo} alt="لوجو الشركة" width="100%"  />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="section values-section" data-aos="fade-up" data-aos-duration="800">
        <div className="container">
        <div className="section-title">
          <h2>قيمنا الأساسية</h2>
          <p>القيم التي نؤمن بها ونعمل وفقاً لها في كل مشروع</p>
        </div>
        
        <div className="values-grid grid grid-4">
          <div className="value-card card text-center" data-aos="zoom-in" data-aos-delay="0">
            <div className="feature-icon">
              <img src={medal} alt="الجودة" />
            </div>
            <h4>الجودة</h4>
            <p>نلتزم بأعلى معايير الجودة في كل ما نقدمه</p>
          </div>
          
          <div className="value-card card text-center" data-aos="zoom-in" data-aos-delay="100">
            <div className="feature-icon">
              <img src={handshake} alt="الثقة" />
            </div>
            <h4>الثقة</h4>
            <p>نبني علاقات طويلة الأمد مبنية على الثقة المتبادلة</p>
          </div>
          
          <div className="value-card card text-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="feature-icon">
              <img src={idea} alt="الابتكار" />
            </div>
            <h4>الابتكار</h4>
            <p>نبحث دائماً عن الحلول المبتكرة والإبداعية</p>
          </div>
          
          <div className="value-card card text-center" data-aos="zoom-in" data-aos-delay="300">
            <div className="feature-icon">
              <img src={star} alt="التميز" />
            </div>
            <h4>التميز</h4>
            <p>نسعى للتميز في كل تفصيل من تفاصيل عملنا</p>
          </div>
        </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="section bg-light" data-aos="fade-up" data-aos-duration="800">
        <div className="container">
        <div className="grid grid-2">
          <div className="card" data-aos="fade-up" data-aos-delay="0">
            <h3>رؤيتنا</h3>
            <p>
              أن نكون الشركة الرائدة في مجال الديكورات والتصميم الداخلي 
              في الشرق الأوسط، وأن نقدم تجربة استثنائية لعملائنا 
              من خلال الابتكار والجودة والتميز في الخدمة.
            </p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="150">
            <h3>مهمتنا</h3>
            <p>
              نسعى لتقديم حلول ديكورات مبتكرة وعالية الجودة تلبي 
              احتياجات عملائنا وتتجاوز توقعاتهم، مع الحفاظ على 
              القيم الأصيلة والهوية الثقافية في كل مشروع.
            </p>
          </div>
        </div>
        </div>
        
      </section>

      {/* Projects */}
      <section className="section " data-aos="fade-up" data-aos-duration="800" id="projects">
        <div className="container">
          <div className="section-title">
            <h2>مشاريعنا</h2>
          </div>
          <Suspense fallback={<div className="projects-gallery"><div className="projects-grid"><div className="video-card" style={{height:'220px'}} /></div></div>}>
            <ProjectsGallery
              items={[
                { src: v1 },
                { src: v2 },
                { src: v3 },
                { src: v4 },
                { src: v5 },
                { src: v6 },

              ]}
            />
          </Suspense>
        </div>
        <div className="show-more-projects" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <Link to="https://www.instagram.com/decoration.kuwait?r=nametag" target="_blank"  className="btn btn-large">
            شاهد المزيد من المشاريع
          </Link>
        </div>
      </section>

     
    </div>
  )
}

export default About
