import React, { useRef } from "react"
import Logo from "./images/logo.svg"
import Ham from "./images/icon-menu.svg"
import Close from "./images/icon-menu-close.svg"

export default function Navbar() {

    const navLinksRef = useRef(null)

    function showMenu() {
        const navLinks = navLinksRef.current
        if (navLinks) {
            navLinks.style.right = "0"
        }
    }

    function hideMenu() {
        const navLinks = navLinksRef.current
        if (navLinks) {
            navLinks.style.right = "-300px"
        }
    }

    return (
        <nav className="nav">
            <img src={Logo} alt="logo" className="logo" />
            <div className="nav_links">
                <ul className="navbar-center" ref={navLinksRef}>
                    <img
                        src={Close}
                        alt="icon-menu-close"
                        onClick={() => { navLinksRef.current && hideMenu() }}
                        className="icon-menu-close"
                    />
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                </ul>
            </div>
            <img src={Ham} alt="hamburger" className="icon-menu" onClick={showMenu} />
        </nav>
    )
}