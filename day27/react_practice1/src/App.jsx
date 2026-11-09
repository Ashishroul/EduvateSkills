import React from 'react'
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import ChangeFruit from './component/ChangeFruit';
import Name from './component/Name';
import FormSubmit from './component/FormSubmit';
import ParentProp from './component/PropDrill/ParentProp';

const App = () => {

  let age=17;
  // let text;

  // if(age>18){
  //         text="adult"
  // }else{
  //   text="minor"
  // }

  return (
    <div>
       {/* <h1>{age>=18?"adult":"minor"}</h1> */}
       {/* <Hero/> */}
       {/* <Navbar/> */}
       {/* <ChangeFruit/> */}
       {/* <Name/> */}
       {/* <FormSubmit/> */}
       <ParentProp/>
    </div>
  )
}

export default App
