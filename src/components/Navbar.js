import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar(props) {

  return <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{
          backgroundColor: props.mode
        }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleBlueMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={` ${props.mode === 'light' ? "text-primary" : "text-white"} `} htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Blue Dark Mode' : 'Enable Light Mode'}</label>
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleRedMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={` ${props.mode === 'light' ? "text-danger" : "text-white"} `} htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Red Dark Mode' : 'Enable Light Mode'}</label>
        </div>
        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleGreenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={` ${props.mode === 'light' ? "text-success" : "text-white"} `} htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Green Dark Mode' : 'Enable Light Mode'}</label>
        </div>
        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={` ${props.mode === 'light' ? "text-dark" : "text-white"} `} htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
        </div>
      </nav>

      
  </div>;
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutUs: PropTypes.string.isRequired
}

NavBar.defaultProps = {
    title: "Set title here",
    aboutUs: "Set About Us here"
}
