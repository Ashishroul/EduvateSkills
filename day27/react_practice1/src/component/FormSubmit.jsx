import React, { useState } from 'react'

const FormSubmit = () => {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')

     function handleSubmit(e){
           e.preventDefault()

           alert('form submitted successfully')
     }

     function handleClear(){
        setname('');
        setemail('');
        setpass('')
     }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setname(e.target.value)} value={name} className='border-2 w-10px'/> <br />
        <input type="text" onChange={(e)=>setemail(e.target.value)} value={email} className='border-2 w-10px'/><br />
        <input type="text" onChange={(e)=>setpass(e.target.value)} value={pass} className='border-2 w-10px'/><br />
        <button type='submit' className='border-2'>Submit </button> <br />
        <button type='button' onClick={handleClear} className='border-2'>Clear</button>
      </form>
    </div>
  )
}

export default FormSubmit
