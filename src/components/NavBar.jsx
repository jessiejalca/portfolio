import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>Logo</Link>
      <nav role="navigation">
        <div className="menu">
          <Link className="link" to={"/"}>
            Home
          </Link>
          <Link className="link" to={"/about"}>
            About
          </Link>
          <Link className="link" to={"/projects"}>
            Projects
          </Link>
          <Link className="link" to={"/resume"}>
            Resume
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
