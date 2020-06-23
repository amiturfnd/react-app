import React from 'react';
import '../../styles/primary-btn.scss';
import { Link } from 'react-router-dom';

function PrimaryLink(props) {
  return (
    <Link to={props.to} className="primary-btn">{props.children}</Link>
  );
}

export default PrimaryLink;