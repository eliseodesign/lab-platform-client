"use client"
import React, { useState } from 'react';
import NavLink from 'next/link'
import './navbar.css'; 
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const router = usePathname();
  const onDashboard = router.startsWith('/dashboard');

  if(onDashboard) return <></>

  return (
    <div>
      <div onClick={()=> setIsOpen(false)} className={`bg-modal ${isOpen ? 'bg-modal-active' : ''}`}></div>
      <header id="header-1">
        {/* Aquí puedes agregar contenido adicional para el encabezado si es necesario */}
      </header>
      <nav className={`navbar z-10 ${isOpen ? 'navbar-active' : ''}`}>
        <img src="/img/logo/esfe-logo.png" alt="logo-esfe" />
        <ul>
          <NavLink onClick={()=> setIsOpen(false)} href="/">Inicio</NavLink>
          <NavLink onClick={()=> setIsOpen(false)} href="/blog">Blog</NavLink>
          <NavLink onClick={()=> setIsOpen(false)} href="/aprende">Aprende</NavLink>
          {/* <a className="butn" href="#">Login</a>
          <a className="butn butn-i" href="#">Register</a> */}
        </ul>

        <label className={`hamburger ${isOpen ? 'hamburger-active' : ''}`} onClick={toggleMenu}>
          <div id="bar4" className="bars"></div>
          <div id="bar5" className="bars"></div>
          <div id="bar6" className="bars"></div>
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
