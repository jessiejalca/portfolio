import { useState, useEffect } from "react"

// Format GitHub last commit data
export function formatRelative(dateStr, lang = "en") {
  const diff = Date.now() - new Date(dateStr).getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  const t = {
    en: {
      justNow: "just now",
      minutesAgo: (m) => `${m}m ago`,
      hoursAgo: (h) => `${h}h ago`,
      yesterday: "yesterday",
      daysAgo: (d) => `${d}d ago`,
    },
    fr: {
      justNow: "à l'instant",
      minutesAgo: (m) => `il y a ${m}min`,
      hoursAgo: (h) => `il y a ${h}h`,
      yesterday: "hier",
      daysAgo: (d) => `il y a ${d}j`,
    },
  }

  const l = t[lang] ?? t.en

  if (minutes < 1) return l.justNow
  if (minutes < 60) return l.minutesAgo(minutes)
  if (hours < 24) return l.hoursAgo(hours)
  if (days === 1) return l.yesterday
  if (days < 30) return l.daysAgo(days)
  return new Date(dateStr).toLocaleDateString(lang)
}

// Check for cached data to protect against GitHub's 60 req/hr limit
const CACHE_KEY = "gh_latest_commit"
const CACHE_TTL = 10 * 60 * 1000 // 10 minutes
function getCached() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { data, timestamp } = JSON.parse(raw)
    if (Date.now() - timestamp > CACHE_TTL) return null
    return data
  } catch {
    return null
  }
}
function setCached(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }))
  } catch {}
}

// Fetch API data, using cache as fallback
export function useLatestCommit(username) {
  const [data, setData] = useState(() => getCached())

  useEffect(() => {
    if (getCached()) return

    fetch(`https://api.github.com/users/${username}/events/public`)
      .then(res => res.json())
      .then(events => {
        const push = events.find(e => e.type === "PushEvent")
        if (push) {
          const result = {
            repo: push.repo.name.split("/")[1],
            date: push.created_at,
          }
          setCached(result)
          setData(result)
        }
      })
      .catch(() => {})
  }, [username])

  return data
}
