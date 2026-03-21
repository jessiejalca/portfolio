import { useEffect } from "react"

const BLOB_CONFIGS = [
  { speed: 0.012 }, // periwinkle — fastest
  { speed: 0.004 }, // pink — very sluggish
  { speed: 0.007 }, // teal — mid
]

const DOT_SPACING = 18
const DOT_RADIUS = 1
const DOT_INFLUENCE_R = 80
const DOT_MAX_DISPLACE = 5
const DOT_TRACKER_SPEED = 0.025

function drawDots(ctx, canvas, dotX, dotY, isHoverDevice) {
  const isDark = document.body.classList.contains("dark-mode")
  const influenceR2 = DOT_INFLUENCE_R * DOT_INFLUENCE_R

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Base pass — all dots at normal opacity
  ctx.fillStyle = isDark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.25)"
  ctx.beginPath()
  for (let gx = DOT_SPACING; gx < canvas.width; gx += DOT_SPACING) {
    for (let gy = DOT_SPACING; gy < canvas.height; gy += DOT_SPACING) {
      ctx.moveTo(gx + DOT_RADIUS, gy)
      ctx.arc(gx, gy, DOT_RADIUS, 0, Math.PI * 2)
    }
  }
  ctx.fill()

  // Boost pass — dots near cursor brightened with smooth distance falloff
  if (isHoverDevice) {
    const boostAlpha = isDark ? 0.5 : 0.45
    ctx.fillStyle = isDark ? "#ffffff" : "#000000"
    for (let gx = DOT_SPACING; gx < canvas.width; gx += DOT_SPACING) {
      for (let gy = DOT_SPACING; gy < canvas.height; gy += DOT_SPACING) {
        const dx = gx - dotX
        const dy = gy - dotY
        const distSq = dx * dx + dy * dy
        if (distSq < influenceR2) {
          const dist = Math.sqrt(distSq)
          const t = 1 - dist / DOT_INFLUENCE_R
          let px = gx, py = gy
          if (dist > 0) {
            const force = t * DOT_MAX_DISPLACE
            px += (dx / dist) * force
            py += (dy / dist) * force
          }
          ctx.globalAlpha = t * boostAlpha
          ctx.beginPath()
          ctx.arc(px, py, DOT_RADIUS, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }
    ctx.globalAlpha = 1
  }
}

export function useBackgroundEffects() {
  useEffect(() => {
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    const blobs = BLOB_CONFIGS.map((cfg) => ({ ...cfg, x: cx, y: cy }))
    const isHoverDevice = window.matchMedia("(hover: hover)").matches

    let mx = cx, my = cy
    let dotX = cx, dotY = cy
    let rafId

    const canvas = document.getElementById("dot-canvas")
    const ctx = canvas ? canvas.getContext("2d") : null

    const onResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    onResize()

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const onTouch = (e) => {
      if (e.touches.length > 0) {
        mx = e.touches[0].clientX
        my = e.touches[0].clientY
      }
    }

    const loop = () => {
      const root = document.documentElement

      blobs.forEach((b, i) => {
        b.x += (mx - b.x) * b.speed
        b.y += (my - b.y) * b.speed
        root.style.setProperty(`--blob${i + 1}-x`, `${b.x}px`)
        root.style.setProperty(`--blob${i + 1}-y`, `${b.y}px`)
      })

      if (isHoverDevice) {
        dotX += (mx - dotX) * DOT_TRACKER_SPEED
        dotY += (my - dotY) * DOT_TRACKER_SPEED
      }

      if (ctx && canvas) drawDots(ctx, canvas, dotX, dotY, isHoverDevice)

      const h1 = document.querySelector("h1")
      if (h1) {
        const rect = h1.getBoundingClientRect()
        const angle =
          Math.atan2(
            blobs[1].y - (rect.top + rect.height / 2),
            blobs[1].x - (rect.left + rect.width / 2)
          ) * (180 / Math.PI)
        root.style.setProperty("--h1-angle", `${angle}deg`)
      }

      rafId = requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("touchmove", onTouch, { passive: true })
    window.addEventListener("resize", onResize)
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("touchmove", onTouch)
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(rafId)
    }
  }, [])
}