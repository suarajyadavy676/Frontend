import React from 'react'
import { GrStar } from "react-icons/gr";

function Card({data}) {
  console.log(data)
  let {image,detail,save, review, actualPrice,price} = data
  return (
    <div className='w-[300px] text-center shadow-xl'>
      <img src={`${image}`} alt="" className='h-40 block mx-[25%]' />
      <p className='my-2'>{detail}</p>
      <p className='my-4'>Save {save}</p>
      <span className='bg-green-200 py-1 px-2 my-4'>{review} <GrStar className='inline'/></span>
      <p className='mt-4'> Value: <span className='line-through'>{actualPrice}</span></p>
      <p className='my-4'>{price}</p>
      <button className='bg-black text-white w-[90%] p-1 m-4'>QUICK BUY</button>
    </div>
  )
}

export default Card
