import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <nav className="float-left">
          <ul>
            <li>
              <a href="">
                Dashboard
              </a>
            </li>
            <li>
              <a href="">
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright float-right">
          <i className="material-icons">
            copyright
          </i>
          &nbsp;
          <b>
            {new Date().getFullYear()}
          </b>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
