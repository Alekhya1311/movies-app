import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-large-container">
        <ul className="nav-menu-left">
          <div className="movies-letters">
            <p className="letter">M</p>
            <p className="letter">O</p>
            <p className="letter">V</p>
            <p className="letter">I</p>
            <p className="letter">E</p>
            <p className="letter">S</p>
          </div>
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/popular" className="nav-link">
              Popular
            </Link>
          </li>
        </ul>

        <ul className="nav-menu-right">
          <li className="nav-menu-item">
            <Link to="/accounts" className="nav-link">
              <div className="movies-letters">
                <p className="letter-account">A</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
