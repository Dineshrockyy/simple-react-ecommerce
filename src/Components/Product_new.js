import React from 'react'
import './component.css'
import { useLocation } from 'react-router-dom'

export default function Product_new(props) {
  const location=useLocation()
  let mobile;
  let dress;
  if(location.state.productname==="mobile"){
    mobile=(<div>
      <p className='pt-2'>{location.state.spec.ram} Ram</p>
    <p className='pt-2'>{location.state.spec.inbuildmemory} Memory</p>
    <p className='pt-2'>{location.state.spec.display}</p>
    <p className='pt-2'>{location.state.spec.backcamera}</p>
    <p className='pt-2'>{location.state.spec.frontcamera}</p>
    <p className='pt-2'>{location.state.spec.processor}</p>
    <p className='pt-2'>{location.state.spec.charger}</p>
    </div>)
  }
  if(location.state.productname==='dress'){
    dress=(<div>
      
    </div>)
  }
  return (
    <>
    <div className='flex mt-5 ml-5'>
      <div className='border border-gray-400 w-1/2'>
      <img className='product-w' src={location.state.url}></img>
      </div>
      <div className='w-1/3 p-3 pl-10'>
        <h1 className='text-3xl font-semibold'>{location.state.name}</h1>
        <h2 className='text-xl pt-5 font-medium'>Highlights</h2>
        <hr></hr>
        {mobile}
        <p className='font-bold text-gray-900 text-2xl mt-3'>{location.state.price}</p>
        <button className='bg-yellow-300 font-semibold px-3 py-2 w-48 mt-10' onClick={()=>props.Product_view({id:location.state.id,productname:location.state.productname})}>Add to cart</button>
      </div>
    </div>
    
    
    </>
  )
}
