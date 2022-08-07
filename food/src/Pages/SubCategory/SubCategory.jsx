import React from 'react';
import CardProduct from '../../Components/Card/CardProduct/CardProduct';

const SubCategory = () => {
  return (
    <>
      <div className="sub-c-wraper flex flex-col justify-center items-center gap-2 shadow-md text-3xl  font-semibold w-4/5 m-auto">
        <div className="subC-title">Tasty Pizzas</div>
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </>
  );
};

export default SubCategory;
