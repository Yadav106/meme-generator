import React from "react";
import './components.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <img src="/troll-face.png" className="nav--image"/>
            <p id="nav--text">Meme Generator</p>
            <p id="nav--title">React Course - Project 3</p>
        </div>
    )
}