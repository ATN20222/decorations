import { useEffect, useState } from 'react'

function LoadingOverlay() {
  const [phase, setPhase] = useState('loading')
  const [isMounted, setIsMounted] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const LOADER_EXTRA_MS = 1000
    const LOGO_MS = 1000
    const FADE_MS = 700
    let loaderHoldTimerId
    let logoTimerId
    let unmountTimerId
    let immediateId

    const onWindowLoaded = () => {
      // Keep showing loader for extra duration after load
      loaderHoldTimerId = window.setTimeout(() => {
        setPhase('logo')
        // Show logo for additional duration
        logoTimerId = window.setTimeout(() => {
          setIsFading(true)
          unmountTimerId = window.setTimeout(() => {
            setIsMounted(false)
          }, FADE_MS)
        }, LOGO_MS)
      }, LOADER_EXTRA_MS)
    }

    if (document.readyState === 'complete') {
      immediateId = window.setTimeout(onWindowLoaded, 0)
    } else {
      window.addEventListener('load', onWindowLoaded, { once: true })
    }

    return () => {
      if (immediateId) window.clearTimeout(immediateId)
      if (loaderHoldTimerId) window.clearTimeout(loaderHoldTimerId)
      if (logoTimerId) window.clearTimeout(logoTimerId)
      if (unmountTimerId) window.clearTimeout(unmountTimerId)
      window.removeEventListener('load', onWindowLoaded)
    }
  }, [])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    if (isMounted) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalOverflow
    }
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <div className={`loading-overlay${isFading ? ' is-fading' : ''}`} aria-hidden={false} aria-busy={phase !== 'logo'}>
      <div className="loading-content">
        {phase === 'loading' ? (
          <span className="loader" aria-label="Loading" />
        ) : (
          <img className="loading-logo" src="/Logo-Decorations-White.svg" alt="Logo" />
        )}
      </div>
    </div>
  )
}

export default LoadingOverlay


