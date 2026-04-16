import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LangProvider } from "./contexts/LangContext"
import App from "./App"
import Home from "./routes/Home"
import About from "./routes/About"
import Projects from "./routes/Projects"
import NotFound from "./routes/NotFound"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LangProvider>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        </LangProvider>
    </BrowserRouter>
  </React.StrictMode>
)
