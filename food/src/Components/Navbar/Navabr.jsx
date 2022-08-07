import React from 'react';
// import './Navbar.css';
import { BsCart4 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCount } from '../../Redux/CartCount';
const Navabr = () => {
  const cartCount = useSelector(selectCount);
  return (
    <>
      <div className="n-wraper flex flex-row justify-between item-center  bg-red-500 p-2">
        <div className="n-left  text-white basis-2/4 text-end text-2xl">
          <Link to="/">Food Ordering Portal</Link>
        </div>

        <div className="n-right flex flex-nowrap gap-4 items-center justify-center text-center mr-4">
          <Link to="/cart">
            <BsCart4 size={'2rem'} color="white" />
          </Link>
          <p className="text-white text-lg  font-bold">{cartCount}</p>
        </div>
      </div>
    </>
  );
};

export default Navabr;
