import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'

const DEFAULT_SITE_KEY =
  import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'

const Turnstile = forwardRef(function Turnstile(
  {
    siteKey = DEFAULT_SITE_KEY,
    onSuccess,
    onError,
    onExpire,
    theme = 'light',
    className = '',
  },
  ref
) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (window.turnstile && widgetIdRef.current !== null) {
        try {
          window.turnstile.reset(widgetIdRef.current)
        } catch {
          // ignore
        }
      }
    },
    remove: () => {
      if (window.turnstile && widgetIdRef.current !== null) {
        try {
          window.turnstile.remove(widgetIdRef.current)
          widgetIdRef.current = null
        } catch {
          // ignore
        }
      }
    },
  }))

  useEffect(() => {
    let isMounted = true

    const initWidget = () => {
      if (!isMounted || !containerRef.current || !window.turnstile) return

      // If already rendered, remove previous
      if (widgetIdRef.current !== null) {
        try {
          window.turnstile.remove(widgetIdRef.current)
        } catch {
          // ignore
        }
        widgetIdRef.current = null
      }

      try {
        const id = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          callback: (token) => {
            if (isMounted && onSuccess) {
              onSuccess(token)
            }
          },
          'error-callback': (code) => {
            if (isMounted && onError) {
              onError(code)
            }
          },
          'expired-callback': () => {
            if (isMounted && onExpire) {
              onExpire()
            }
          },
        })
        widgetIdRef.current = id
      } catch (err) {
        console.error('Error rendering Cloudflare Turnstile:', err)
      }
    }

    // Check if script is already in document
    const scriptSrc = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    let script = document.querySelector(`script[src*="turnstile"]`)

    if (!script) {
      script = document.createElement('script')
      script.src = scriptSrc
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }

    if (window.turnstile) {
      initWidget()
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval)
          initWidget()
        }
      }, 50)

      return () => {
        isMounted = false
        clearInterval(interval)
        if (window.turnstile && widgetIdRef.current !== null) {
          try {
            window.turnstile.remove(widgetIdRef.current)
          } catch {
            // ignore
          }
          widgetIdRef.current = null
        }
      }
    }

    return () => {
      isMounted = false
      if (window.turnstile && widgetIdRef.current !== null) {
        try {
          window.turnstile.remove(widgetIdRef.current)
        } catch {
          // ignore
        }
        widgetIdRef.current = null
      }
    }
  }, [siteKey, theme, onSuccess, onError, onExpire])

  return (
    <div
      ref={containerRef}
      className={`min-h-[65px] flex items-center justify-start ${className}`}
      data-testid="cloudflare-turnstile"
    />
  )
})

export default Turnstile
