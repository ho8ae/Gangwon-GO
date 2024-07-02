import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import FeedbackModal from './FeedbackModal';

const Intro = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Footer />
      <FeedbackModal />
    </div>
  );
};

export default Intro;
