import React, { useState } from 'react'
import StudentForm from './component/StudentForm'
import TodoForm from './component/TodoApp/TodoForm'

const App = () => {

  return (
    <div className='flex justify-center items-center h-screen'>
      {/* <StudentForm/> */}
      <TodoForm/>
    </div>
  )
}

export default App
