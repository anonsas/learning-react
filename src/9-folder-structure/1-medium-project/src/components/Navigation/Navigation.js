import './Navigation.scss';
import { useState } from 'react';

function Navigation() {
  const [toogle, setToogle] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-center">
        <div className="navbar__header">
          <img src={logo} alt="logo" className="logo" />
          <button
            class={`fa-solid fa-bars nav-toggle ${isOpen ? 'nav-toggle-animate' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          ></button>
        </div>

        <nav className={`navbar__links ${isOpen ? 'show-links' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(!isOpen)}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(!isOpen)}>
            Projects
          </NavLink>
          <NavLink to="/skills" onClick={() => setIsOpen(!isOpen)}>
            Skills
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(!isOpen)}>
            Contact
          </NavLink>
        </nav>

        <ul className="navbar__socials">
          <a
            href="https://github.com/anonsas"
            target="_blank"
            class="fa-brands fa-github"
            rel="noreferrer"
          ></a>
          <a
            href="https://www.linkedin.com/in/lukjanov1337/"
            target="_blank"
            class="fa-brands fa-linkedin"
            rel="noreferrer"
          ></a>
        </ul>
      </div>
    </header>
  );
}

export default Navigation;
