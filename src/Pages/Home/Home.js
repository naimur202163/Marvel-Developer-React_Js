import React from 'react';
import Footer from '../Footer/Footer';
import FourthSlackBotContent from '../FourthSlackBotContent/FourthSlackBotContent';
import Header from '../Header/Header';
import SecoundBuildContent from '../SecoundBuildContent/SecoundBuildContent';
import ThirdShowCaseContent from '../ThirdShowCaseContent/ThirdShowCaseContent';
import TopBuildContent from '../TopBuildContent/TopBuildContent';

const Home = () => {
  return (
    <div>
      <Header />
      <TopBuildContent />
      <SecoundBuildContent />
      <ThirdShowCaseContent />
      <FourthSlackBotContent />
      <Footer />
    </div>
  );
};

export default Home;
