import React from 'react';
import searchIcon from '../assets/icons/search-24px.svg';
import '../styles/landing-search.scss';

function Search() {
  return (
    <section className="landing-search">
    <div className="landing-search__container">
      <div className="landing-search__search-icon">
        <img src={searchIcon} alt="search" />
      </div>
      <input className="landing-search__input" placeholder="What would you like to learn today?" type="text" />
    </div>
  </section>
  );
}

export default Search;