import React from 'react';
import AppHeader from '../components/AppHeader';
import LifeAtImg from '../assets/people-working.jpg';
import pplPlanning from '../assets/people-planning.jpg';
import configure from '../assets/configure.jpg';
import docs from '../assets/docs.png';
import guided from '../assets/guided.png';
import TwoSectionTextImg from '../components/atomic/TwoSectionTextImg';
import MultiSectionGrid from '../components/atomic/MultiSectionGrid';

function CreateLayout(props) {
  const twoSectionProps = {
    title: "Create Interactive Katacoda Scenarios",
    desc: "Use Katacoda's environments to create interactive content and guides",
    linkText: "Tech Using Katacoda",
    img: LifeAtImg
  };
  const appHeaderProps = {
    title: "Create Interactive Katacoda Scenarios",
    desc: "Use Katacoda's environments to create interactive content and guides",
    bgImg: pplPlanning
  };
  const multiSectionProps = {
    title: "Why use Katacoda?",
    desc: "Getting started is one of the hardest aspects of learning a new product. Katacoda's aim is to remove the effort required to learning new technologies and skills.",
    bgImg: pplPlanning,
    sections: [
      {
        title: "Pre-configured demos",
        desc: "Katacoda provides a platform for companies to build interactive environments that are pre-configured with your application.",
        img: configure
      },
      {
        title: "Guide your user",
        desc: "Create scenarios to help guide users to understand your product and solve their problems.",
        img: guided
      },
      {
        title: "Create the best documentation",
        desc: "Why force users to learn CloudFormation, Vagrant or Docker to get started? Embed the environment directly into your website and documentation.",
        img: docs
      }
    ]
  };

  return (
    <div>
      <AppHeader data={appHeaderProps} />
      <MultiSectionGrid data={multiSectionProps} />
      <TwoSectionTextImg data={twoSectionProps} />
    </div>
  );

}

export default CreateLayout;