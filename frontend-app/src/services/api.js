const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:10000/api"
const BACKEND_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:10000"

export async function predictText(text, model) {
  const res = await fetch(`${API_BASE}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text, model })
  })

  return res.json()
}

export async function getComparison() {
  const res = await fetch(`${API_BASE}/comparison`)
  return res.json()
}

export async function getConfusionMatrices() {
  const res = await fetch(`${API_BASE}/confusion-matrices`)
  return res.json()
}

export async function getPerformancePlots() {
  const res = await fetch(`${API_BASE}/performance-plots`)
  return res.json()
}

export { BACKEND_BASE }