import React from 'react'
import { useNavigate } from 'react-router'


function Notfound() {
    const navigate=useNavigate();
  return (
    <div className='d-flex flex-column w-50 mx-auto align-items-center justify-content-center' style={{height:"80vh"}}>
      <h1 className='text-center '>Not Found</h1>
      <button className='btn btn-primary' onClick={()=>navigate('/')}>Go Home</button>
    </div>
  )
}

export default Notfound
