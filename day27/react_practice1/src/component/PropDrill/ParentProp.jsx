import React, { useState } from 'react';
import Prop from './prop';

const ParentProp = () => {

  const [fruit, setFruit] = useState('Avocado');

  return (
    <div>
      <Prop fruitName={fruit} setFruit={setFruit}/>
    </div>
  )
}

export default ParentProp