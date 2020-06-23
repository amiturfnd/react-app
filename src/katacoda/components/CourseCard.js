import React from 'react';
import '../styles/course-card.scss';
import PrimaryLink from './atomic/PrimaryLink';

function CourseCard(props) {
  return (
    <section className="course-card">
      <div className="course-card__header">
        <img src={`/courses-logo/${props.course.logo}.svg`} alt={props.course.title} />
        <div className="course-card__scenarios">
          {props.course.scenarios} {props.course.scenarios === 1 ? 'Scenario' : 'Scenarios'}
        </div>
      </div>
      <div className="course-card__title">{props.course.title}</div>
      <div className="course-card__info">{props.course.info}</div>
      <PrimaryLink to={`/katacoda/courses/${props.course.id}`}>{props.linkText}</PrimaryLink>
    </section>
  );
}

export default CourseCard;