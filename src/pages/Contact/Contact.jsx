import { useState } from 'react'
import './Contact.css'
import Seo from '../../components/Seo'
import locationIcon from '../../assets/icons/location.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import whatsappIcon from '../../assets/icons/whatsapp.svg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setStatus({ type: '', message: '' })
    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, honeypot: '' })
      })
      if (!resp.ok) throw new Error('failed')
      setStatus({ type: 'success', message: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' })
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: 'تعذر إرسال الرسالة. حاول مرة أخرى لاحقاً.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <Seo title="اتصل بنا | شركة ديكورات الكويت" description="تواصل مع شركة ديكورات الكويت للاستشارات ومواعيد التصميم والتنفيذ في الكويت." />
      {/* Page Header */}

      <section className="section about-page-header contact-hero" data-aos="fade-down" data-aos-duration="800">
        <div className="text-center">
          <h1>اتصل بنا</h1>
          <p className="text-gray">
            نحن هنا لمساعدتك في تحقيق أحلامك في الديكورات والتصميم الداخلي
          </p>
        </div>
      </section>
      <div className="container">
        {/* Contact Information */}
        <section className="section">
          <div className="contact-layout grid grid-2">
            <div className="contact-info" data-aos="fade-left" data-aos-duration="800">
              <h2 className="mb-3">معلومات التواصل</h2>
              <div className="contact-cards">
                <div className="card contact-card pro" data-aos="fade-up" data-aos-duration="800" data-aos-delay="0" data-aos-once="true">
                  <div className="card-header">
                    <span className="contact-icon"><img src={locationIcon} alt="" /></span>
                    <h4 className="card-title">العنوان</h4>
                  </div>
                  <p>الكويت، الكويت<br />
                  شارع الكويت<br />
                  مبنى الديكورات </p>
                </div>
                <div className="card contact-card pro" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" data-aos-once="true">
                  <div className="card-header">
                    <span className="contact-icon"><img src={phoneIcon} alt="" /></span>
                    <h4 className="card-title">الهاتف</h4>
                  </div>
                  <p>+96555792622 </p>
                </div>
                {/* <div className="card contact-card pro" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-once="true">
                  <div className="card-header">
                    <span className="contact-icon at">@</span>
                    <h4 className="card-title">البريد الإلكتروني</h4>
                  </div>
                  <p>info@decorations-arabic.com<br />
                  support@decorations-arabic.com</p>
                </div> */}
              </div>
              <div className="social-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="250" data-aos-once="true">
                <h4>تابعنا</h4>
                <div className="social-links">
                  <a href="https://www.instagram.com/decoration.kuwait?r=nametag" target="_blank" rel="noopener" className="social-link instagram" aria-label="Instagram">
                    <span className="social-icon" aria-hidden>
                      <img src={instagramIcon} alt="Instagram" />
                    </span> 
                    <span>انستغرام</span>
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener" className="social-link facebook" aria-label="Facebook">
                    <span className="social-icon" aria-hidden>
                      <img src={facebookIcon} alt="Facebook" />
                    </span>
                    <span>فيسبوك</span>
                  </a>
                  <a href="https://wa.me/message/PAENXTG64RGUO1" target="_blank" rel="noopener" className="social-link whatsapp" aria-label="WhatsApp">
                    <span className="social-icon" aria-hidden>
                      <img src={whatsappIcon} alt="WhatsApp" />
                    </span>
                    <span>واتساب</span> 
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrap" data-aos="fade-right"  >
              <h2 className="mb-3">أرسل لنا رسالة</h2>
              <form className="contact-form modern" onSubmit={handleSubmit}>
                {status.message && (
                  <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-error'}`} role="status">{status.message}</div>
                )}
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
                
                <button type="submit" className="btn btn-large contact-form-btn" style={{ width: '100%' }} disabled={submitting}>
                  {submitting ? 'جارٍ الإرسال...' : 'إرسال الرسالة'}
                </button>
              </form>
            </div>
          </div>
        </section>

    </div>
       

        {/* Call to Action */}
        <section className="section bg-light">
          <div className="text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h2>ابدأ مشروعك معنا اليوم</h2>
            <p className="mb-4">
              احجز استشارة الآن واكتشف كيف يمكننا تحويل مساحتك إلى مكان استثنائي
            </p>
            <div className="hero-buttons" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" >
              <a href="tel:+96555792622" className="btn btn-large contact-form-btn">
                اتصل بنا الآن
              </a>
              <a href="mailto:info@decorations-arabic.com" className="btn btn-secondary btn-large contact-btn-secondary" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" >
                أرسل بريد إلكتروني
              </a>
            </div>
          </div>
        </section>
      </div>

  )
}

export default Contact
