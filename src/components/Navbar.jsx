import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext';

const Navbar = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Septri Putra Wiarka</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/interest">Interest</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/awards">Awards</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <button className="btn btn-outline-dark" onClick={toggleDarkMode}>
            Toggle Dark Mode
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
