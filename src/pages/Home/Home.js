import React from 'react';
import './style.css';
import Search from '../../components/Search/Search';
import Embed from '../../components/Video/Empedvideo';

const Home = () => {
  return (
    <div className="home">
      <Search />
      <Embed />
    </div>
  );
};

export default Home;
