import React from 'react';
import '../styles/app-nav.scss';
import logo from '../assets/logo-white.png';
import { NavLink, Link } from 'react-router-dom';

function AppNav() {
  const links = ["Courses", "Create", "Embed", "Defence", "Attack", "Search", "Log In", "Sign Up"];
  return (
    <section className="app-nav">
      <div className="app-nav__container">

        <div className="app-nav__logo">
          <Link to="/katacoda"><img src={logo} alt="logo" /></Link> 
        </div>
        <ul className="app-nav__links">
          {links.map((l, i) => <li key={i}><NavLink to={`/katacoda/${l.toLowerCase()}`} className="app-nav__link" activeClassName="app-nav__link--active">{l}</NavLink></li>)}
        </ul>
        
      </div>
    </section>
  );
}

export default AppNav;