import { useEffect, useRef, useState, useMemo } from 'react'
import { createPortal } from 'react-dom'

const isSafari = typeof navigator !== 'undefined' && /AppleWebKit\//.test(navigator.userAgent) && /Safari\//.test(navigator.userAgent) && !/Chrome|CriOS|Android/.test(navigator.userAgent)

const generateSafariPoster = (videoEl) => {
  if (!isSafari || !videoEl) return
  if (!videoEl.videoWidth || !videoEl.videoHeight) return
  try {
    const canvas = document.createElement('canvas')
    canvas.width = videoEl.videoWidth
    canvas.height = videoEl.videoHeight
    const onSeeked = () => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height)
      const dataUrl = canvas.toDataURL('image/jpeg', 0.6)
      videoEl.setAttribute('poster', dataUrl)
      videoEl.currentTime = 0
      videoEl.pause()
      videoEl.removeEventListener('seeked', onSeeked)
    }
    videoEl.addEventListener('seeked', onSeeked)
    videoEl.currentTime = 0.05
  } catch (_) {}
}

const createObserver = (onIntersect) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onIntersect(entry.target)
      }
    })
  }, { rootMargin: '200px 0px', threshold: 0.1 })
}

const VideoCard = ({ item, index, onOpen }) => {
  const videoRef = useRef(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    const handleIntersect = () => {
      if (videoEl.dataset.src && !videoEl.src) {
        videoEl.src = videoEl.dataset.src
      }
    }

    const observer = createObserver(handleIntersect)
    if (observer) {
      observer.observe(videoEl)
    } else {
      // Fallback: load immediately
      if (videoEl.dataset.src && !videoEl.src) videoEl.src = videoEl.dataset.src
    }

    return () => {
      if (observer) observer.disconnect()
    }
  }, [])

  return (
    <figure className="video-card">
      <div className={`video-thumb ${isReady ? '' : 'is-loading'}`} role="button" tabIndex={0} onClick={() => onOpen(index)} onKeyDown={(e) => { if (e.key === 'Enter') onOpen(index) }}>
        <video
          ref={videoRef}
          className="thumb-video"
          data-src={item.src}
          preload="metadata"
          muted
          playsInline
          webkit-playsinline="true"
          onLoadedMetadata={() => setIsReady(true)}
          onLoadedData={() => generateSafariPoster(videoRef.current)}
        />
        <div className="video-overlay">
          <button className="video-play-button" aria-label="تشغيل الفيديو" onClick={() => onOpen(index)}>
            ▶
          </button>
        </div>
      </div>
    </figure>
  )
}

const VideoLightbox = ({ openIndex, items, onClose }) => {
  const videoEl = useRef(null)

  useEffect(() => {
    if (!videoEl.current) return
    if (openIndex === null) {
      videoEl.current.pause()
      videoEl.current.src = ''
      return
    }
    // assign when open
    const src = items[openIndex]?.src
    if (src) {
      videoEl.current.src = src
      videoEl.current.play().catch(() => {})
    }
  }, [openIndex, items])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (openIndex === null) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = originalOverflow }
  }, [openIndex])

  if (openIndex === null) return null

  return createPortal(
    <div className="video-lightbox" role="dialog" aria-modal="true">
      <div className="lightbox-backdrop" onClick={onClose} />
      <div className="lightbox-content">
        <button className="lightbox-close" aria-label="إغلاق" onClick={onClose}>×</button>
        <video
          ref={videoEl}
          className="lightbox-video"
          controls
          preload="metadata"
          playsInline
          webkit-playsinline="true"
        />
      </div>
    </div>,
    document.body
  )
}

export default function ProjectsGallery({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null)

  const safeItems = useMemo(() => items.filter(Boolean), [items])

  return (
    <div className="projects-gallery">
      <div className="projects-grid">
        {safeItems.map((item, idx) => (
          <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
            <VideoCard item={item} index={idx} onOpen={setOpenIndex} />
          </div>
        ))}
      </div>
      <VideoLightbox openIndex={openIndex} items={safeItems} onClose={() => setOpenIndex(null)} />
    </div>
  )
}


