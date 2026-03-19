import { useState, useEffect } from "react"

// Format GitHub last commit data
export function formatRelative(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (minutes < 1) return "just now"
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days === 1) return "yesterday"
  if (days < 30) return `${days}d ago`
  return new Date(dateStr).toLocaleDateString()
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
