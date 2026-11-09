import React, { useState } from 'react'

const Name = () => {

    const [name,setname]=useState("Ashish");



  function toggle(){
   if(name){
    setname(null)
   }else{
    setname("Ashish")
   }
  }

    
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={toggle} className='border-2'>Update</button>
    </div>
  )
}

export default Name
