import React from 'react';
import AppHeader from '../components/AppHeader';
import Search from '../components/Search';
import data from '../assets/mocks/courses-layout.json';
import LifeAtImg from '../assets/people-working.jpg';
import CourseGrid from '../components/CourseGrid';
import TwoSectionTextImg from '../components/atomic/TwoSectionTextImg';

function CoursesLayout(props) {
  const twoSectionProbs = {
    title: "Create Interactive Katacoda Scenarios",
    desc: "Use Katacoda's environments to create interactive content and guides",
    linkText: "Tech Using Katacoda",
    img: LifeAtImg
  };

  const appHeaderProps = {
    title: "Interactive Browser Based Labs, Courses & Playgrounds",
    desc: "You'll find over 300 real-world scenarios and counting. Simply pick a lab and start learning without any downloads or configuration"
  };

  return (
    <div>
      <AppHeader data={appHeaderProps} />
      <Search></Search>
      {data.map((c, i) => <CourseGrid category={c} key={i} linkText="Start Course" />)}
      <TwoSectionTextImg data={twoSectionProbs} />
    </div>
  );

}

export default CoursesLayout;