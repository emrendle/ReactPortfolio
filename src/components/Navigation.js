import React from "react";

function Navigation() {
  return (
    <nav className="navbar is-dark is-fixed-top">
      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="#about">
            <span className="icon">
              <i className="fas fa-info"></i>
            </span>
            <span>About</span>
          </a>
          <a className="navbar-item" href="#portfolio">
            <span className="icon">
              <i className="fas fa-th-list"></i>
            </span>
            <span>Portfolio</span>
          </a>
          <a
            className="navbar-item"
            href="assets/files/Rendleman_2021Resume.pdf"
          >
            <span className="icon">
              <i className="fas fa-file-alt"></i>
            </span>
            <span>Resume</span>
          </a>
          <a className="navbar-item" href="mailto:emilyrendleman@gmail.com">
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
