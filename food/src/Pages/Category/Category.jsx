import React from 'react';
import CardCategory from '../../Components/Card/CardCategory/CardCategory';
import Pizza from '../../Data/Img/Pizza.png';
import Burger from '../../Data/Img/Burger.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectData } from '../../Redux/CartCount';

const Category = () => {
  const resData = useSelector(selectData)
  console.log(resData); 
  const newData = [...resData]
  console.log(newData);
  // const newData = JSON.parse(JSON.stringify(resData))
  return (
    <>
      <div className="c-wraper grid grid-cols-Category justify-center  justify-items-center m-auto mt-6 p-4">
        {newData.map((el,ind) => {
          return (
            <Link to="/subcategory" className="w-max" key={ind}>
              <CardCategory img={Pizza} title={'pizza'} />
           </Link>
          )
        })}
        <Link to="/subcategory" className="w-max">
          <CardCategory img={Pizza} title={'pizza'} />
        </Link>
        <Link to={'/subcategory'}>
          <CardCategory img={Burger} title="Burger" />
        </Link>
      </div>
    </>
  );
};

export default Category;
