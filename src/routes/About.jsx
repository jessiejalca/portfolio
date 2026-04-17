import { useLang } from "../contexts/LangContext"
import { content } from "../data/content.js"


const About = () => {
  const { lang } = useLang()
  const t = content[lang].about

  return (
    <main>
      <h1>{t.heading}</h1>
      <section aria-label="subheading" className="sub">{t.subheading}</section>
      <p>{t.bio}</p>
      <p>{t.hobbies}</p>
    </main>
  )
}

export default About
