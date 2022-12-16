import './component.css'
import { Link } from 'react-router-dom'
let batch
export default function Heder(props) {
  if (props.num > 0) {
    batch = <div className='bg-red-500 rounded-full w-5 h-5 absolute -top-3 left-4 text-center '>{props.num}</div>
  }
  return (
    <div>
      <div className='bg-blue-500 w-full fixed'>
        <div className='container flex text-white p-5 mx-auto'>
          <h2 className='font-bold text-2xl'>E-BUY</h2>
          <div className=' flex ml-auto '>
            <a className='px-3'>Home</a>
            <a className='px-3'>Product</a>
            <a className='px-3'>About</a>
            <div className='relative'>
            <Link to='/cart_page'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              {batch}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
