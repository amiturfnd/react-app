import React from 'react';
import '../../styles/multi-section-grid.scss';
import ImgTitleDescCard from './ImgTitleDescCard';

function MultiSectionGrid({data}) {
  return (
    <section className="multi-section-grid">
      <div className="multi-section-grid__title">{data.title}</div>
      <div className="multi-section-grid__desc">{data.desc}</div>
      <div className={`multi-section-grid__sections multi-section-grid__sections--${data.sections.length}-section`}>
        {data.sections.map((section, i) => <ImgTitleDescCard data={section} key={i} />)}
      </div>
    </section>
  );
}

export default MultiSectionGrid;