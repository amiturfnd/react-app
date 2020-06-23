import React from 'react';
import '../styles/course-grid.scss';
import CourseCard from './CourseCard';

function CourseGrid(props) {
  return (
    <section className="course-grid">
      <div className="course-grid__header">{props.category.title}</div>
      <div className="course-grid__info">{props.category.info}</div>
      <div className="course-grid__courses">
        {props.category.courses.map((course, i) => <CourseCard course={course} key={i} linkText={props.linkText} />)}
      </div>
    </section>
  );
}

export default CourseGrid;