import githubLogo from "../assets/github.svg"
import linkedinLogo from "../assets/linkedin.svg"

const Footer = () => {
  return (
    <footer className="box">
      <ul>
        <li>
          <a href="https://github.com/jessiejalca" target="_blank">
            <img src={githubLogo} alt="Github logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jessiejalca/" target="_blank">
            <img src={linkedinLogo} alt="LinkedIn logo" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
