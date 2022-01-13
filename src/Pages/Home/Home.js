import React from 'react';
import Header from '../Header/Header';
import SecoundBuildContent from '../SecoundBuildContent/SecoundBuildContent';
import TopBuildContent from '../TopBuildContent/TopBuildContent';

const Home = () => {
  return (
    <div>
      <Header />
      <TopBuildContent />
      <SecoundBuildContent />
    </div>
  );
};

export default Home;
