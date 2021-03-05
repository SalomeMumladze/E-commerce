import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'

const HomePageLayout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomePageLayout;
