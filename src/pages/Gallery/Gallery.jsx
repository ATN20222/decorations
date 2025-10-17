import { useEffect, useMemo, useRef, useState } from 'react'
import Seo from '../../components/Seo'
import './Gallery.css'
import { Link } from 'react-router-dom'
const isSafari = typeof navigator !== 'undefined' && /AppleWebKit\//.test(navigator.userAgent) && /Safari\//.test(navigator.userAgent) && !/Chrome|CriOS|Android/.test(navigator.userAgent)

const primeThumbAtOneSecond = (videoEl) => {
  if (!videoEl) return
  const stopAt = 1.0
  const onTimeUpdate = () => {
    if (videoEl.currentTime >= stopAt) {
      videoEl.pause()
      videoEl.currentTime = stopAt
      videoEl.removeEventListener('timeupdate', onTimeUpdate)
    }
  }
  const playPromise = videoEl.play()
  if (playPromise && typeof playPromise.then === 'function') {
    playPromise.then(() => {
      videoEl.addEventListener('timeupdate', onTimeUpdate)
    }).catch(() => {})
  } else {
    videoEl.addEventListener('timeupdate', onTimeUpdate)
  }
}

// Glob import of gallery images and videos without eagerly bundling them
const imageLoaders = import.meta.glob('../../assets/GalleryImages/*.{png,jpg,jpeg,webp}', { eager: false })
const videoLoaders = import.meta.glob('../../assets/videos/*.{mp4,webm,ogg}', { eager: false })

const LazyGalleryItem = ({ load, alt, onOpen, index, type }) => {
  const [src, setSrc] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onIntersect = async (entries, observer) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
          try {
            const mod = await load()
            const url = mod?.default || mod
            if (typeof url === 'string') setSrc(url)
          } catch (_) {
            // ignore load errors for individual images
          }
        }
      })
    }
    const observer = new IntersectionObserver(onIntersect, { rootMargin: '200px 0px', threshold: 0.01 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [load])

  return (
    <figure className="gallery-item" ref={ref} onClick={() => onOpen(index)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onOpen(index) }}>
      {src ? (
        type === 'video' ? (
          <video
            className="gallery-video"
            src={src}
            preload="metadata"
            muted
            playsInline
            webkit-playsinline="true"
            onLoadedData={(e) => primeThumbAtOneSecond(e.currentTarget)}
          />
        ) : (
          <img src={src} alt={alt} loading="lazy" decoding="async" />
        )
      ) : (
        <div className="gallery-skeleton" aria-hidden="true" />
      )}
      {type === 'video' && <div className="video-badge" aria-hidden>▶</div>}
    </figure>
  )
}

const ImageLightbox = ({ openIndex, items, onClose }) => {
  useEffect(() => {
    if (openIndex === null) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [openIndex, onClose])

  if (openIndex === null) return null

  const current = items[openIndex]
  if (!current) return null

  return (
    <div className="image-lightbox" role="dialog" aria-modal="true">
      <div className="lightbox-backdrop" onClick={onClose} />
      <div className="lightbox-content">
        <button className="lightbox-close" aria-label="إغلاق" onClick={onClose}>×</button>
        {current.type === 'video' ? (
          <video
            src={current.src}
            className="lightbox-video"
            controls
            preload="metadata"
            playsInline
            webkit-playsinline="true"
            autoPlay
          />
        ) : (
          <img src={current.src} alt={current.alt} className="lightbox-image" />
        )}
      </div>
    </div>
  )
}

const Gallery = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [loadedImages, setLoadedImages] = useState({})
  const [activeTab, setActiveTab] = useState('images') // 'images' or 'videos'

  const items = useMemo(() => {
    const entries = Object.entries(imageLoaders)
    // Sort by filename to keep a stable order
    entries.sort((a, b) => a[0].localeCompare(b[0]))
    return entries.map(([key, loader]) => ({ key, load: loader, alt: 'صورة من أعمالنا', type: 'image' }))
  }, [])

  // TODO: Add video items when path is provided
  const videoItems = useMemo(() => {
    const entries = Object.entries(videoLoaders)
    entries.sort((a, b) => a[0].localeCompare(b[0]))
    return entries.map(([key, loader]) => ({ key, load: loader, alt: 'فيديو من أعمالنا', type: 'video' }))
  }, [])

  const handleImageOpen = async (index) => {
    const currentItems = activeTab === 'images' ? items : videoItems
    const item = currentItems[index]
    if (!item) return

    // Load the image if not already loaded
    if (!loadedImages[item.key]) {
      try {
        const mod = await item.load()
        const src = mod?.default || mod
        if (typeof src === 'string') {
          setLoadedImages(prev => ({ ...prev, [item.key]: src }))
        }
      } catch (_) {
        return
      }
    }
    setOpenIndex(index)
  }

  const currentItems = activeTab === 'images' ? items : videoItems
  const lightboxItems = currentItems.map(item => ({
    src: loadedImages[item.key] || '',
    alt: item.alt,
    type: item.type
  }))

  return (
    <>
      <Seo title="معرض الأعمال | ديكورات الكويت" description="تصفح معرض أعمالنا وصور المشاريع المنفذة باحترافية وجودة عالية." />

      {/* Page Header (hero) to match other pages */}
      <section className="section about-page-header gallery-page-header" data-aos="fade-down" data-aos-duration="800">
        <div className="text-center">
          <h1>معرض الأعمال</h1>
          <p className="text-gray">لقطات مختارة من مشاريعنا المنفذة بجودة عالية</p>
          {/* Tab Navigation */}
          <div className="gallery-tabs mt-5" data-aos="fade-up" data-aos-duration="800">
            <button 
              className={`tab-button ${activeTab === 'images' ? 'active' : ''}`}
              onClick={() => setActiveTab('images')}
            >
              الصور
            </button>
            <button 
              className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
              onClick={() => setActiveTab('videos')}
            >
              الفيديوهات
            </button>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          

          {/* Content Grid */}
          <div className="gallery-grid">
            {currentItems.map((item, idx) => (
              <div key={item.key} data-aos="zoom-in" data-aos-delay={(idx % 6) * 40}>
                <LazyGalleryItem 
                  load={item.load}
                  alt={item.alt}
                  onOpen={handleImageOpen}
                  index={idx}
                  type={item.type}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container text-center mb-5">
      <Link to="https://www.instagram.com/decoration.kuwait?r=nametag" target="_blank" rel="noopener" className="btn btn-large btn-secondary">شاهد أكثر على انستغرام</Link>
      </div>
      <ImageLightbox 
        openIndex={openIndex}
        items={lightboxItems}
        onClose={() => setOpenIndex(null)}
      />
    </>
  )
}

export default Gallery


