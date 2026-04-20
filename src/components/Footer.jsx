import { useLang } from "../contexts/LangContext"
import { content } from "../data/content.js"

const Footer = () => {
  const { lang } = useLang()

  return (
    <footer>
      <p>{content[lang].footer}.</p>
    </footer>
  )
}

export default Footer
