import React from 'react';
import AppHeader from '../components/AppHeader';
import data from '../assets/mocks/courses.json';
import CourseGrid from '../components/CourseGrid';

function CoursesView (props) {
  const appHeaderProps = {
    title: "Learn Docker, Container Runtimes, Builders and Registries using Interactive Browser-Based Scenarios",
    desc: "Solve real problems and enhance your skills with browser based hands on labs without any downloads or configuration"
  };

  return (
    <div>
      <AppHeader data={appHeaderProps} />
      <CourseGrid category={data} linkText="Start Scenario" />
    </div>
  );
}

export default CoursesView;