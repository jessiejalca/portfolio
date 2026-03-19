import { useState, useEffect } from "react"

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

export function useLatestCommit(username) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/events/public`)
      .then(res => res.json())
      .then(events => {
        const push = events.find(e => e.type === "PushEvent")
        if (push) {
          setData({
            repo: push.repo.name.split("/")[1],
            date: push.created_at,
          })
        }
      })
      .catch(() => {})
  }, [username])

  return data
}
