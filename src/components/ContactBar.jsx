import darkModeToggle from "../assets/dark-mode.svg"
import darkModeToggleDark from "../assets/dm-dark-mode.svg"
import githubLogo from "../assets/github.svg"
import githubLogoDark from "../assets/dm-github.svg"
import linkedinLogo from "../assets/linkedin.svg"
import linkedinLogoDark from "../assets/dm-linkedin.svg"
import emailLogo from "../assets/mail.svg"
import emailLogoDark from "../assets/dm-mail.svg"

const CONTACT_ITEMS = [
  { href: "https://github.com/jessiejalca", label: "GitHub", logo: githubLogo, logoDark: githubLogoDark, external: true },
  { href: "https://www.linkedin.com/in/jessiejalca/", label: "LinkedIn", logo: linkedinLogo, logoDark: linkedinLogoDark, external: true },
  { href: "mailto:jessiejalca@gmail.com", label: "Email", logo: emailLogo, logoDark: emailLogoDark, external: false },
]

const ContactBar = ({ darkMode, setDarkMode }) => (
  <div className="contact-bar">
    {CONTACT_ITEMS.map(({ href, label, logo, logoDark, external }) => (
      <a
        key={label}
        href={href}
        className="contact-bar-item"
        aria-label={label}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        <img src={darkMode ? logoDark : logo} alt={label} />
      </a>
    ))}
    <div className="contact-bar-divider" aria-hidden="true" />
    <button className="contact-bar-item" onClick={setDarkMode} aria-label="Toggle dark mode">
      <img src={darkMode ? darkModeToggleDark : darkModeToggle} alt="" />
    </button>
  </div>
)

export default ContactBar
