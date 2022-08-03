import React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children }) => {
  const linkStyle = `
     hover:opacity-70 bg-red-300;
     text-sm
     sm:text-lg
     transition delay-150
    `
  const logoStyle = `
    text-white 
    font-rammetto
    sm:text-base
    text-sm
    `
  return (
    <div>
      <nav className="flex sm:justify-between justify-around items-center bg-green-900 lg:px-20 sm:px-6 py-8 text-gray-100 ">
        <h3 className={logoStyle}>Test Blog</h3>
        <ul className="flex  justify-around w-1/3 md:w-1/4">
          <li className={linkStyle}>
            <Link to="/">Home</Link>
          </li>
          <li className={linkStyle}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={linkStyle}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <main>{children}</main>

      <footer className="text-center py-8 bg-green-900 text-gray-100">
        <p>
          Copyright 2030 <span className={logoStyle}>Test Blog</span>
        </p>
      </footer>
    </div>
  )
}

export default Layout
