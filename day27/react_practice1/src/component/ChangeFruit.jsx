import React, { useState } from 'react'

const ChangeFruit = () => {

    const [fruit,setfruit]=useState("Apple");

    function apple(){
        setfruit("Apple")
    }
    function banana(){
        setfruit("Banana")
    }

  return (
    <div>
      <h1>{fruit}</h1>
      <button className='border-2' onClick={apple}>Apple</button>
      <button className='border-2' onClick={banana}>Banana</button>
    </div>
  )
}

export default ChangeFruit
