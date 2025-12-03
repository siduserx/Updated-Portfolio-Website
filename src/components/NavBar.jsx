import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">

        {/* Logo */}
        <a href="#hero" className="logo">
          Siddhesh Nimodiya
        </a>

        {/* Desktop Nav */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name, download }) => (
              <li key={name} className="group">
                <a href={link} download={download ? true : undefined}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Contact */}
        <a href="#contact" className="contact-btn group desktop">
          <div className="inner"><span>Contact me</span></div>
        </a>

        {/* MOBILE MENU BUTTON (3 dots / hamburger) */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            {navLinks.map(({ link, name, download }) => (
              <li key={name}>
                <a
                  href={link}
                  download={download ? true : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </a>
              </li>
            ))}

            {/* MOBILE CONTACT BUTTON */}
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}

    </header>
  );
};

export default NavBar;
