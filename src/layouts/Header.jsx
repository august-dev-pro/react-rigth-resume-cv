import React from "react";

const Header = () => {
  return (
    <header className="d-print-none">
      <div className="container text-center text-lg-left">
        <div className="py-3 clearfix">
          <h1 className="site-title mb-0">Joyce Harrison</h1>
          <div className="site-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://twitter.com/templateflip"
                    title="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                    <span className="menu-title sr-only">Twitter</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.facebook.com/templateflip"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook"></i>
                    <span className="menu-title sr-only">Facebook</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/templateflip"
                    title="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                    <span className="menu-title sr-only">Instagram</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/templateflip"
                    title="Github"
                  >
                    <i className="fab fa-github"></i>
                    <span className="menu-title sr-only">Github</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
