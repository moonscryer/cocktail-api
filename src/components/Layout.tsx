import React from "react";
import { type ReactNode } from "react";
import { NavLink, Link } from "react-router";

type PropTypes = { children: ReactNode };

const Layout = ({ children }: PropTypes) => {
  return (
    <>
      <header>
        <Link to="/">
          <img src="/vite.svg" alt="" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cocktails">Cocktails</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>&copy; 2025 - Syntra</footer>
    </>
  );
};
export default Layout;
