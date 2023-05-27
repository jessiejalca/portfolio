import rightArrow from "../assets/right-arrow.svg"

const Hero = () => {
  return (
    <main>
      <div className="hero">
        <h1>I'm Jessie Jalca</h1>
        <p>
          Frontend developer, JavaScript engineer, UX/UI advocate, language
          learner, practicing minimalist, occasional photographer.
        </p>
        <a className="actionBtn">
          <p>See what I can do</p>
          <img src={rightArrow} />
        </a>
      </div>
    </main>
  )
}

export default Hero
