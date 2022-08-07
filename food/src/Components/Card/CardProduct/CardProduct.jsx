import React from 'react';
import Button from '../../Button/Button';
import PizzaMomo from '../../../Data/Img/PizzaMomo.jfif';
import { addToCart } from '../../../Redux/CartCount';

const CardProduct = () => {
  return (
    <>
      <div className="CsubC-Wraper p-4 flex flex-col justify-center items-start gap-2 bg-white border-gray-200 border-2 ">
        <div className="Csub-title p-0 m-0">
          <p className="text-xl font-semibold text-start text-black ">
            Tomoto Basii Italian Pizza
          </p>
        </div>
        <div className="Csub-content flex flex-row flex-wrap justify-start items-center gap-4 ">
          <div className="c-info basis-3/5 flex flex-col flex-nowrap justify-start items-start gap-2">
            <p className="c-price text-start text-md font-normal">450</p>
            <p className="c-detail text-lg font-normal text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus exercitationem voluptas repudiandae ipsum doloribus
              officiis dolores id modi nobis rem quam eos ?
            </p>
          </div>
          <div className="c-img">
            <img src={PizzaMomo} alt="" className="w-max" />
          </div>
        </div>
        {/* <button onClick={() => dispatch()}>Add to Cart</button> */}
        <Button
          text={'Add To Cart'}
          bgColor={'bg-red-500'}
          action={addToCart}
        />
      </div>
    </>
  );
};

export default CardProduct;
