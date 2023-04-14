import React, { useRef, useEffect, useState } from "react"
import Logo from "./images/logo.svg"
import Ham from "./images/icon-menu.svg"
import Close from "./images/icon-menu-close.svg"

export default function Navbar() {

    const navLinksRef = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function showMenu() {
        const navLinks = navLinksRef.current
        if (navLinks) {
            navLinks.style.right = "0"
            setIsMenuOpen(true)
            document.body.classList.add("blur")
            document.querySelector('.content-container').classList.add("blur")
        }
    }

    function hideMenu() {
        const navLinks = navLinksRef.current
        if (navLinks) {
            navLinks.style.right = "-300px"
            setIsMenuOpen(false)
            document.body.classList.remove("blur")
            document.querySelector('.content-container').classList.remove("blur")
        }
    }

    useEffect(() => {
        hideMenu()
    }, [])

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