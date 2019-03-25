import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import './Header.scss';

function Header() {
  return (
    <header>
      <div className="header-content">
        <Link to="/" className="brand">
          <div className="icon">
            <FontAwesomeIcon icon={["fas","bolt"]}/>
          </div>
        </Link>
        <small className="title">Neptune</small>
      </div>
    </header>
  )
}

export default Header;
