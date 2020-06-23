import React from 'react';
import '../../styles/img-title-desc-card.scss';

function ImgTitleDescCard({data}) {
  return (
    <div className="img-title-desc-card">
      <div className="img-title-desc-card__header">
        <img src={data.img} alt={data.title} />
      </div>
      <div className="img-title-desc-card__title">{data.title}</div>
      <div className="img-title-desc-card__desc">{data.desc}</div>
    </div>
  );
}

export default ImgTitleDescCard;