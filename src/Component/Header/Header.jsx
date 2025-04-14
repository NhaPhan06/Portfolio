import React, { useEffect } from 'react'
import './header.css'

const Header = () => {


    return (
        <header className="navbar position-fixed top-0 mt-3">
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
        </header>
    )
}

export default Header