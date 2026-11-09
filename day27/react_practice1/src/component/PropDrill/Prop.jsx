import React from 'react'

const Prop = (props) => {

    const nextFruit=props.fruitName=="Avocado"? "Banana" : "Avocado"
  return (
    <div>
      <h1>{props.fruitName}</h1>
      <button className='border-2' onClick={()=>props.setFruit(nextFruit)}>{nextFruit}</button>
    </div>
  )
}

export default Prop

