import React from 'react';
import { Outlet } from 'react-router-dom';
import Navabr from '../../Components/Navbar/Navabr';

const Home = () => {
  return (
    <>
      <Navabr />
      <Outlet />
    </>
  );
};

export default Home;
