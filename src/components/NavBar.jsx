import { NavLink } from "react-router-dom"
import Toggle from "./Toggle"
import logo from "../assets/logo.png"

const NavBar = (props) => {
  return (
    <header>
      <NavLink to={"/"}>
        <img src={logo} alt="Jessie's logo" className="logo" />
      </NavLink>
      <nav role="navigation">
        <div className="menu">
          <div className="toggle-box">
            <Toggle isChecked={props.cursorStatus} onToggle={props.setCursor} />
            <label htmlFor="toggle" className="toggleLabel">
              Animate Cursor
            </label>
          </div>
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
        </div>
      </nav>
    </header>
  )
}

export default NavBar
