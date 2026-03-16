import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import Toggle from "./Toggle"
import logo from "../assets/logo.svg"
import logoDark from "../assets/dm-logo.svg"
import darkModeToggle from "../assets/dark-mode.svg"
import darkModeToggleDark from "../assets/dm-dark-mode.svg"

const NavBar = (props) => {
  // Get the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [scrolled, setScrolled] = useState(false)

  // Update the window width state when the window is resized
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Toggle `scrolled` from the page's scrollY position.
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    // Ensure state matches initial scroll position on refresh.
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // `shrink` gets compact CSS styles.
    <header className={scrolled ? "navbar shrink" : "navbar"}>
      <div className="menu">
        <NavLink to={"/"}>
          <img
            src={props.darkMode ? logoDark : logo}
            alt="Jessie's logo"
            className="logo"
          />
        </NavLink>
        <nav role="navigation">
          {windowWidth > 520 ? (
            <NavLink className="link" to={"/"}>
              Home
            </NavLink>
          ) : (
            ""
          )}
          <NavLink className="link" to={"/projects"}>
            Projects
          </NavLink>
          <NavLink className="link" to={"/about"}>
            About
          </NavLink>
        </nav>
      </div>
      <div className="settings">
        {windowWidth > 780 ? (
          <Toggle
            name="Animate Cursor"
            isChecked={props.cursorStatus}
            onToggle={props.setCursor}
          />
        ) : (
          ""
        )}
        <button
          id="dark-mode-toggle"
          className={`toggle-box prevent-select ${
            windowWidth > 620 ? "toggle-long" : ""
          }`}
          onClick={props.setDarkMode}>
          <img
            src={props.darkMode ? darkModeToggleDark : darkModeToggle}
            alt="Dark mode toggle"
            className="dark-mode-toggle"
          />
          {windowWidth > 620 ? (
            <label htmlFor="dark-mode-toggle" className="toggleLabel">
              Lights {props.darkMode ? "On" : "Off"}
            </label>
          ) : (
            ""
          )}
        </button>
      </div>
    </header>
  )
}

export default NavBar
