import React from 'react'
import StudentList from './StudentList';
import { useState } from 'react';

const StudentForm = () => {

    const [studentInfo, setStudentInfo] = useState({name:'',age:'',email:''});
    
      const [students, setStudents] = useState([]);
    
      function handleData(e) {
        const { name, value } = e.target;
    
        setStudentInfo((prev) => ({ ...prev, [name]: value }))
      }
      
    
      function handleSubmit(e) {
        e.preventDefault()
        setStudents((prev) => ([...prev, studentInfo]));
        setStudentInfo({name:'',age:'',email:''})
      }

  return (
    <div className='border-2 border-[#dbe9f6] w-2/3 h-2/3 overflow-auto bg-[#f5f9fc]'>
      <nav className='h-fit p-5 bg-[#dbe9f6]'>
        <h1 className='font-bold text-lg'>ABC College</h1>
        <p className='text-lg'>Bhubneswar</p>
      </nav>
      <div className='p-5'>
        
      <form onSubmit={handleSubmit}>
      <h1 className='font-bold text-lg'>Add New Student</h1>
        <label htmlFor="name" className='text-lg'>Student Name:</label>
        <input className='text-lg border-b-1' type="text" id='name' name='name' onChange={handleData} value={studentInfo.name} placeholder='Enter your name' required/>
        <br />
        <div>
          <label htmlFor="age"  className='text-lg'>Age</label>
          <input className='border-b-1 text-lg' id='age' type="number" name='age' onChange={handleData} value={studentInfo.age} placeholder='Enter your age' required/>
          <label htmlFor="email"  className='text-lg'>Email</label>
          <input className='border-b-1 text-lg' id='email' type="email" name='email' onChange={handleData} value={studentInfo.email} placeholder='Enter your email' required/>
        </div>
        <br />
        <button type='submit' className='mb-5 font-bold text-lg'>[+ Add Student]</button>
        <hr className='-mx-5 border-t-[1.5] border-[#dbe9f6]'/>
      </form>
       <StudentList students={students}/>
      </div>
    </div>
  )
}

export default StudentForm