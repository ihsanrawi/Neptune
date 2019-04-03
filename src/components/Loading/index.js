import React from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Loading.scss';

function Loading({type}) {
  const spinner = <FontAwesomeIcon icon="spinner"/>

  switch(type){
    case "fullscreen":
      return <div className="fullscreen">{spinner}</div>
      case "inline":
      return <div className="inline">Loading more...</div>
    default:
      return null;
  }
}

Loading.propTypes = {
  type: PropTypes.oneOf(["regular", "fullscreen", "inline"]).isRequired,
};

export default Loading;