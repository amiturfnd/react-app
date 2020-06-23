import React from 'react';
import '../styles/app-header.scss';

function AppHeader({data}) {
  const styles = {};
  if(data.bgImg) {
    styles.backgroundImage = `url(${data.bgImg})`;
  }
  return (
    <header className="app-header" style={styles}>
      <div className="app-header__heading-1">{data.title}</div>
      <div className="app-header__heading-2">{data.desc}</div>
    </header>
  );
}

export default AppHeader;