import { useState } from "react";
import Link from "next/link";
import logo from "../../src/assets/logo.svg";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className='navigation'>
      <div className='navbar'>
        <div className='kompweb'>
          {/* <Link href='/'> */}
          <a href='/'>{"Kompweb"}</a>
          {/* </Link> */}
          <p> React Solutions </p>
        </div>
        <button
          className='hamburger'
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
          <img
            className='react'
            viewBox='0 0 20 20'
            fill='white'
            src={logo}
            alt='logo'
          />

          {/* icon from Heroicons.com */}
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg> */}
        </button>

        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/projects'>
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/contactUs'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
