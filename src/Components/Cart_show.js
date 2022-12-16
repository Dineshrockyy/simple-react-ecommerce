import React from 'react'


export default function Cart_show(props) { 
    console.log(props)
  return (
    <div className='pb-5'>
      <div className='mt-5 container mx-auto'>
        <div className='border border-gray-300 rounded-md'>
        <div className='p-3'>
        <div className=' w-48 mx-auto'>
        <img className='w-48' src={props.url}></img>
        </div>
        <p className='text-gray-600'>{props.name}</p>
        <p className='font-bold text-gray-900 text-2xl mt-3'>{props.price}</p>
        <p className='text-gray-600'>E-buy.in</p>
        <p className='text-gray-600'>Free Shipping</p>
        </div>
      </div>
    </div>
    </div>
  )
}
