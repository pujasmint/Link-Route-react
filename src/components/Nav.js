import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav () {
  return (
      <div className="Nav">
          <ul>
            <li><Link className="navlink" to="/">Home</Link></li>
            <li><Link className="navlink" to="/About">About</Link></li>
            <li><Link className="navlink" to="/Contact">Contact</Link></li>
          </ul>
      </div>
  )
}

