import React from 'react'
import styles from './Header.css';

import { Link } from 'react-router-dom'

const Header = () => (
  <div className="Header">
    <h1>The Official CS260 Dating Site</h1>
    <Link to="/" className="Link">Browse Matches</Link>
    <Link to="/overview" className="Link">Hottest Profiles</Link>
    <Link to="/submit" className="Link">Submit Your Profile</Link>
  </div>
)

export default Header
