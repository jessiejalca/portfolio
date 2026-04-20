import { Link, useOutletContext } from "react-router-dom"
import { useLang } from "../contexts/LangContext"
import rightArrow from "../assets/right-arrow.svg"
import rightArrowDark from "../assets/dm-right-arrow.svg"
import { content } from "../data/content.js"


const NotFound = () => {
    const [darkMode] = useOutletContext()
    const { lang } = useLang()
    const t = content[lang].notFound

    const getRandomIdx = (max) => Math.floor(Math.random() * max)

    return (
        <main className="hero">
            <h1>Error: 404.</h1>
            <section aria-label="subheading">
                {t.intros[getRandomIdx(t.intros.length)]}. {t.comments[getRandomIdx(t.comments.length)]}
            </section>
            <Link className="actionBtn" to={"/"}>
                <p>{t.cta}</p>
                <img src={darkMode ? rightArrowDark : rightArrow} />
            </Link>
        </main>
    )
}

export default NotFound