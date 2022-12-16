import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './component.css'

export default function Productcard(props) {
  return (
    <div className='p-2 w-full md:w-1/2 lg:w-3/12'>
      <Link to='/product_new' state={{url:props.url,name:props.name,id:props.id,spec:props.spec,productname:props.productname,price:props.price}}>
      <div className='border border-gray-300 rounded-md h-full'>
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
      </Link>
    </div>
  )
}
