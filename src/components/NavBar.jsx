import { Link } from "react-router-dom"
import Toggle from "./Toggle"

const NavBar = (props) => {
  return (
    <header>
      <Link to={"/"}>Logo</Link>
      <nav role="navigation">
        <div className="menu">
          <div className="toggle-box">
            <Toggle isChecked={props.cursorStatus} onToggle={props.setCursor} />
            <label htmlFor="toggle" className="toggleLabel">
              Animate Cursor
            </label>
          </div>
          <Link className="link" to={"/"}>
            Home
          </Link>
          <Link className="link" to={"/projects"}>
            Projects
          </Link>
          <Link className="link" to={"/about"}>
            About
          </Link>
          <Link className="link" to={"mailto: jessiejalca@gmail.com"}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
