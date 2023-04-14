import React from "react"
import Navbar from "./Navbar"
import Home from "./Home"
import Popular from "./Popular"

export default function App() {
    return (
        <div>
            <Navbar />
            <div className="content-container">
                <Home />
                <Popular />
            </div>
        </div>
    )
}