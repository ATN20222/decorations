import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="container padding-top">
      {/* Page Header */}
      <section className="section">
        <div className="text-center">
          <h1>اتصل بنا</h1>
          <p className="text-gray">
            نحن هنا لمساعدتك في تحقيق أحلامك في الديكورات والتصميم الداخلي
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="grid grid-2">
          <div>
            <h2>معلومات التواصل</h2>
            <div className="card">
              <h4>العنوان</h4>
              <p>الرياض، المملكة العربية السعودية<br />
              شارع الملك فهد، حي العليا<br />
              مبنى الديكورات المتميزة</p>
            </div>
            
            <div className="card">
              <h4>الهاتف</h4>
              <p>+966 11 123 4567<br />
              +966 50 123 4567</p>
            </div>
            
            <div className="card">
              <h4>البريد الإلكتروني</h4>
              <p>info@decorations-arabic.com<br />
              support@decorations-arabic.com</p>
            </div>
            
            <div className="card">
              <h4>ساعات العمل</h4>
              <p>السبت - الخميس: 8:00 ص - 6:00 م<br />
              الجمعة: مغلق</p>
            </div>
          </div>
          
          <div>
            <h2>أرسل لنا رسالة</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">الاسم الكامل *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">رقم الهاتف</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="أدخل رقم هاتفك"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">الموضوع *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="موضوع الرسالة"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">الرسالة *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-large" style={{ width: '100%' }}>
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="section-title">
          <h2>الأسئلة الشائعة</h2>
          <p>إجابات على أكثر الأسئلة شيوعاً حول خدماتنا</p>
        </div>
        
        <div className="grid grid-2">
          <div className="card">
            <h4>كم تستغرق مدة تنفيذ المشروع؟</h4>
            <p>
              تختلف مدة التنفيذ حسب حجم المشروع وتعقيده. 
              المشاريع الصغيرة تستغرق من أسبوع إلى شهر، 
              بينما المشاريع الكبيرة قد تستغرق من شهرين إلى ستة أشهر.
            </p>
          </div>
          
          <div className="card">
            <h4>هل تقدمون ضمان على الأعمال؟</h4>
            <p>
              نعم، نقدم ضمان شامل على جميع أعمالنا لمدة سنتين 
              من تاريخ التسليم. كما نقدم خدمة ما بعد البيع 
              لضمان رضاكم التام.
            </p>
          </div>
          
          <div className="card">
            <h4>ما هي تكلفة الاستشارة المجانية؟</h4>
            <p>
              الاستشارة الأولى مجانية تماماً. نقدم لكم تقييم شامل 
              للمساحة ونصائح مجانية حول أفضل الحلول 
              التي تناسب ميزانيتكم.
            </p>
          </div>
          
          <div className="card">
            <h4>هل تتعاملون مع جميع أنواع المساحات؟</h4>
            <p>
              نعم، نتعامل مع جميع أنواع المساحات سواء كانت منازل، 
              شقق، مكاتب، محلات تجارية، أو فنادق. 
              لدينا خبرة واسعة في مختلف أنواع المشاريع.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="text-center">
          <h2>ابدأ مشروعك معنا اليوم</h2>
          <p className="mb-4">
            احجز استشارة مجانية الآن واكتشف كيف يمكننا تحويل مساحتك إلى مكان استثنائي
          </p>
          <div className="hero-buttons">
            <a href="tel:+966501234567" className="btn btn-large">
              اتصل بنا الآن
            </a>
            <a href="mailto:info@decorations-arabic.com" className="btn btn-secondary btn-large">
              أرسل بريد إلكتروني
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
