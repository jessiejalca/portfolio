import { useLang } from "../contexts/LangContext"

const LangToggle = ({ className = "toggle-box toggle-long prevent-select" }) => {
  const { lang, setLang } = useLang()
  return (
    <button
      className={className}
      onClick={() => setLang(lang === "en" ? "fr" : "en")}
      aria-label={`Switch to ${lang === "en" ? "French" : "English"}`}
    >
      {lang === "en" ? "FR" : "EN"}
    </button>
  )
}

export default LangToggle