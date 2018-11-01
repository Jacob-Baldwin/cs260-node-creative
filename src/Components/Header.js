import React from 'react'
import styles from './Header.css';

import { Link } from 'react-router-dom'

const Header = () => (
  <div className="Header">
    <Link to="/" className="Link">Home</Link>
    <Link to="/overview" className="Link">Scoreboard</Link>
    <Link to="/submit" className="Link">Submit</Link>
  </div>
)

export default Header
