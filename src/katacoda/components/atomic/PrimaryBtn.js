import React from 'react';
import '../../styles/primary-btn.scss';

function PrimaryBtn(props) {
  return (
    <a href="#" className="primary-btn">{props.children}</a>
  );
}

export default PrimaryBtn;