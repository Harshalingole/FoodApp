import React from 'react';
import PizzaMomo from '../../../Data/Img/PizzaMomo.jfif';
import { removeItem } from '../../../Redux/CartCount';
import Button from '../../Button/Button';

const CardCard = () => {
  return (
    <>
      <div className="CsubC-Wraper p-4 flex flex-col justify-center items-start gap-2 bg-white border-gray-200 border-2 ">
        <div className="Csub-content flex flex-row flex-wrap justify-start items-center gap-4 ">
          <div className="c-info basis-3/5 flex flex-col flex-nowrap justify-start items-start gap-2">
            <p className="text-xl font-semibold text-start text-black ">
              Tomoto Basii Italian Pizza
            </p>
            <p className="c-detail text-lg font-normal text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus exercitationem voluptas repudiandae ipsum doloribus
              officiis dolores id modi nobis rem quam eos ?
            </p>
            <p className="c-price text-start text-lg font-bold">450</p>
          </div>
          <div className="c-img">
            <img src={PizzaMomo} alt="" className="w-max" />
          </div>
        </div>
        <Button text={'Remove'} bgColor={'bg-red-500'} action={removeItem} />
      </div>
    </>
  );
};

export default CardCard;
