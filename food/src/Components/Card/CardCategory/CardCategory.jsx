import React from 'react';

const CardCategory = ({ img, title }) => {
  return (
    <>
      <div className="Cd-wraper p-1  flex flex-col justify-item-center items-center border-white rounded-lg shadow-lg  ">
        <div className="cd-img  h-44">
          <img src={img} alt="Pizza" className="h-full" />
        </div>
        <p>{title}</p>
      </div>
    </>
  );
};

export default CardCategory;
