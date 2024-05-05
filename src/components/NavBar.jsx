import { NavLink } from "react-router-dom"
import Toggle from "./Toggle"
import logo from "../assets/logo.svg"
import logoDark from "../assets/dm-logo.svg"
import darkModeToggle from "../assets/dark-mode.svg"
import darkModeToggleDark from "../assets/dm-dark-mode.svg"

const NavBar = (props) => {
  return (
    <header>
      <div className="menu">
        <NavLink to={"/"}>
          <img
            src={props.darkMode ? logoDark : logo}
            alt="Jessie's logo"
            className="logo"
          />
        </NavLink>
        <nav role="navigation">
          <NavLink className="link" to={"/"}>
            Home
          </NavLink>
          <NavLink className="link" to={"/projects"}>
            Projects
          </NavLink>
          <NavLink className="link" to={"/about"}>
            About
          </NavLink>
          <NavLink className="link" to={"mailto: jessiejalca@gmail.com"}>
            Contact
          </NavLink>
        </nav>
      </div>
      <div className="settings">
        <Toggle
          name="Animate Cursor"
          isChecked={props.cursorStatus}
          onToggle={props.setCursor}
        />
        <div className="toggle-box prevent-select" onClick={props.setDarkMode}>
          <img
            src={props.darkMode ? darkModeToggleDark : darkModeToggle}
            alt="Dark mode toggle"
            className="dark-mode-toggle"
          />
          <label htmlFor="dark-mode-toggle" className="toggleLabel">
            Lights {props.darkMode ? "On" : "Off"}
          </label>
        </div>
      </div>
    </header>
  )
}

export default NavBar
