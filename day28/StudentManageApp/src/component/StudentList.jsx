import React from 'react'

const StudentList = ({ students }) => {
  console.log(students);

  return (
    <div className='text-lg pt-5'>
      <h1 className='font-bold' >Student List</h1>
      {students?.map((item) => (
        <div className='mt-5 mb-5'>
          <h1 className='font-bold'>{item.name}</h1>
          <p>Age: {item.age} • Email:{item.email}</p>
        </div>
      ))}
    </div>
  )
}

export default StudentList
