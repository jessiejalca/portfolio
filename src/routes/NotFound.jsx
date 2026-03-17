import { Link, useOutletContext } from "react-router-dom"
import rightArrow from "../assets/right-arrow.svg"
import rightArrowDark from "../assets/dm-right-arrow.svg"


const NotFound = () => {
    const [darkMode, setDarkMode] = useOutletContext()

    const intros = ["Hmm", "Uh oh", "Yikes", "Huh", "Whoops", "Oops", "Welp"]
    const comments = [
        "Nothing to see here — literally. It doesn't exist.",
        "Looks like this page doesn't exist — or maybe it used to and I broke it.",
        "Even I don't know what's supposed to be here.",
        "This page took a wrong turn somewhere. Same, honestly.",
        "This page was probably deleted in a cleanup commit.",
        "This probably existed on main at some point."
    ]

    function getRandomIdx(max) {
    return Math.floor(Math.random() * max);
    }

    return (
        <main className="hero">
            <h1>Error: 404.</h1>
            <section aria-label="subheading">
                {intros[getRandomIdx(intros.length)]}. {comments[getRandomIdx(comments.length)]}
            </section>
            <Link className="actionBtn" to={"/"}>
                <p>Anyway, not to be rude, but go home.</p>
                <img src={darkMode ? rightArrowDark : rightArrow} />
            </Link>
        </main>
    )
}

export default NotFound