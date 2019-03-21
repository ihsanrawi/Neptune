import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import './Header.scss';

function Header() {
  return (
    <header>
      <div className="header-content">
        <Link to="/">
          <div className="icon">
            <FontAwesomeIcon icon={["fab","reddit"]}/>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header;
