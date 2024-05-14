import githubLogo from "../assets/github.svg"
import githubLogoDark from "../assets/dm-github.svg"
import linkedinLogo from "../assets/linkedin.svg"
import linkedinLogoDark from "../assets/dm-linkedin.svg"
import emailLogo from "../assets/mail.svg"
import emailLogoDark from "../assets/dm-mail.svg"

const Footer = (props) => {
  return (
    <footer className="box">
      <ul>
        <li>
          <a href="https://github.com/jessiejalca" target="_blank">
            <img
              src={props.darkMode ? githubLogoDark : githubLogo}
              alt="Github logo"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jessiejalca/" target="_blank">
            <img
              src={props.darkMode ? linkedinLogoDark : linkedinLogo}
              alt="LinkedIn logo"
            />
          </a>
        </li>
        <li>
          <a href="mailto: jessiejalca@gmail.com">
            <img
              src={props.darkMode ? emailLogoDark : emailLogo}
              alt="Email logo"
            />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
