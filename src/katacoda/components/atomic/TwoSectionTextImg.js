import React from 'react';
import '../../styles/two-section-text-img.scss';
import PrimaryLink from './PrimaryLink';

function TwoSectionTextImg(props) {
  return (
    <section className="two-section-text-img auto-fit-col">
      <div className="two-section-text-img__text">
        <div className="two-section-text-img__title">{props.data.title}</div>
        <div className="two-section-text-img__desc">{props.data.desc}</div>
        <div>
          <PrimaryLink to="/katacoda/create">{props.data.linkText}</PrimaryLink>
        </div>
      </div>
      <div className="two-section-text-img__img">
        <img src={props.data.img} alt={props.data.heading} />
      </div>
    </section>
  );
}

export default TwoSectionTextImg;