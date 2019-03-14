import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Loading.scss';

function Loading() {
  const spinner = <FontAwesomeIcon icon="spinner"/>

  return (
    <div className="fullscreen">
      {spinner}
    </div>
  )
}

export default Loading;