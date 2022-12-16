import React from 'react'

export default function Body(props) {  
  return (
      <div>
          <div id='body'>
              <h2 className='p-3 font-semibold'>Mobiles</h2>
              <hr></hr>
              <div className=' container flex mx-auto flex-wrap'>
                  {props.data}
              </div>
              <hr></hr>
              <h2 className='p-3 font-semibold'>Dresses</h2>
              <hr></hr>
              <div className=' container flex mx-auto flex-wrap'>
                  {props.data1}
              </div>
          </div>
      </div>
  )
}
