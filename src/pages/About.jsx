const About = () => {
  return (
    <div className="container padding-top">
      {/* Page Header */}
      <section className="section">
        <div className="text-center">
          <h1>من نحن</h1>
          <p className="text-gray">
            شركة الديكورات المتميزة - رائدون في عالم التصميم الداخلي والديكورات الفاخرة
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="grid grid-2">
          <div>
            <h2>قصتنا</h2>
            <p>
              تأسست شركة الديكورات المتميزة عام 2010 بهدف تقديم أفضل خدمات 
              التصميم الداخلي والديكورات في المملكة العربية السعودية. 
              بدأنا رحلتنا برؤية واضحة وهي تحويل المساحات العادية إلى 
              أماكن استثنائية تعكس شخصية أصحابها.
            </p>
            <p>
              على مدار السنوات الماضية، تمكنّا من إنجاز أكثر من 500 مشروع 
              ناجح في مختلف أنحاء المملكة، مما جعلنا من الشركات الرائدة 
              في مجال الديكورات والتصميم الداخلي.
            </p>
          </div>
          <div className="text-center">
            <div className="service-image" style={{ width: '100%', height: '300px', margin: '0 auto' }}>
              🏢
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-light">
        <div className="grid grid-2">
          <div className="card">
            <h3>رؤيتنا</h3>
            <p>
              أن نكون الشركة الرائدة في مجال الديكورات والتصميم الداخلي 
              في الشرق الأوسط، وأن نقدم تجربة استثنائية لعملائنا 
              من خلال الابتكار والجودة والتميز في الخدمة.
            </p>
          </div>
          <div className="card">
            <h3>مهمتنا</h3>
            <p>
              نسعى لتقديم حلول ديكورات مبتكرة وعالية الجودة تلبي 
              احتياجات عملائنا وتتجاوز توقعاتهم، مع الحفاظ على 
              القيم الأصيلة والهوية الثقافية في كل مشروع.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="section-title">
          <h2>قيمنا الأساسية</h2>
          <p>القيم التي نؤمن بها ونعمل وفقاً لها في كل مشروع</p>
        </div>
        
        <div className="grid grid-4">
          <div className="card text-center">
            <div className="feature-icon">🎯</div>
            <h4>الجودة</h4>
            <p>نلتزم بأعلى معايير الجودة في كل ما نقدمه</p>
          </div>
          
          <div className="card text-center">
            <div className="feature-icon">🤝</div>
            <h4>الثقة</h4>
            <p>نبني علاقات طويلة الأمد مبنية على الثقة المتبادلة</p>
          </div>
          
          <div className="card text-center">
            <div className="feature-icon">💡</div>
            <h4>الابتكار</h4>
            <p>نبحث دائماً عن الحلول المبتكرة والإبداعية</p>
          </div>
          
          <div className="card text-center">
            <div className="feature-icon">⭐</div>
            <h4>التميز</h4>
            <p>نسعى للتميز في كل تفصيل من تفاصيل عملنا</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-light">
        <div className="section-title">
          <h2>فريقنا المحترف</h2>
          <p>فريق من الخبراء والمختصين في مجال الديكورات والتصميم</p>
        </div>
        
        <div className="grid grid-3">
          <div className="card text-center">
            <div className="service-image" style={{ width: '150px', height: '150px', margin: '0 auto var(--spacing-lg)' }}>
              👨‍💼
            </div>
            <h4>أحمد محمد</h4>
            <p className="text-primary font-semibold">المدير التنفيذي</p>
            <p>خبرة 15 عام في مجال التصميم الداخلي والديكورات</p>
          </div>
          
          <div className="card text-center">
            <div className="service-image" style={{ width: '150px', height: '150px', margin: '0 auto var(--spacing-lg)' }}>
              👩‍🎨
            </div>
            <h4>فاطمة أحمد</h4>
            <p className="text-primary font-semibold">مصممة رئيسية</p>
            <p>متخصصة في التصميم الداخلي الحديث والكلاسيكي</p>
          </div>
          
          <div className="card text-center">
            <div className="service-image" style={{ width: '150px', height: '150px', margin: '0 auto var(--spacing-lg)' }}>
              👨‍🔧
            </div>
            <h4>محمد علي</h4>
            <p className="text-primary font-semibold">مهندس تنفيذي</p>
            <p>خبير في تنفيذ مشاريع الديكورات والتصميم</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section">
        <div className="section-title">
          <h2>إنجازاتنا بالأرقام</h2>
          <p>نفتخر بالإنجازات التي حققناها على مدار السنوات</p>
        </div>
        
        <div className="grid grid-4">
          <div className="card text-center">
            <h3 className="text-primary font-bold" style={{ fontSize: 'var(--font-size-4xl)' }}>500+</h3>
            <p>مشروع مكتمل</p>
          </div>
          
          <div className="card text-center">
            <h3 className="text-primary font-bold" style={{ fontSize: 'var(--font-size-4xl)' }}>15</h3>
            <p>سنة من الخبرة</p>
          </div>
          
          <div className="card text-center">
            <h3 className="text-primary font-bold" style={{ fontSize: 'var(--font-size-4xl)' }}>1000+</h3>
            <p>عميل راضي</p>
          </div>
          
          <div className="card text-center">
            <h3 className="text-primary font-bold" style={{ fontSize: 'var(--font-size-4xl)' }}>50+</h3>
            <p>جائزة وتقدير</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
