import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav role="navigation" className="navigation">
      <Link to={"/"}>Logo</Link>
      <div className="menu">
        <Link className="link" to="/about">
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
  )
}

export default NavBar
