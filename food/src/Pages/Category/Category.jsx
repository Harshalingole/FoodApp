import React from 'react';
import CardCategory from '../../Components/Card/CardCategory/CardCategory';
import Pizza from '../../Data/Img/Pizza.png';
import Burger from '../../Data/Img/Burger.png';
import { Link } from 'react-router-dom';
const Category = () => {
  return (
    <>
      <div className="c-wraper grid grid-cols-Category justify-center  justify-items-center m-auto mt-6 p-4">
        <Link to="/subcategory" className="w-max">
          <CardCategory img={Pizza} title="Pizza" />
        </Link>
        <Link to={'/subcategory'}>
          <CardCategory img={Burger} title="Burger" />
        </Link>
      </div>
    </>
  );
};

export default Category;
