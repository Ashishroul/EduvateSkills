import React, { useEffect, useState } from 'react'

const TodoList = ({ lists, setWorksArr }) => {

  const savedData = JSON.parse(localStorage.getItem('works'));

  function handleClick(e, task) {
    
    const { checked } = e.target;

    const filterArr = savedData.map((curr) => {
      if (curr.task === task) {
        return { ...curr, isChecked: checked }
      } else {
        return curr
      }
    })

    setWorksArr(filterArr)
    localStorage.setItem('works', JSON.stringify(filterArr))
  }

  function handleDelete(task) {
    const filteredArr = savedData.filter((curr) => curr.task !== task)
    setWorksArr(filteredArr);
    localStorage.setItem('works', JSON.stringify(filteredArr))
  }

  return (
    <div>
      {lists?.map((item, i) => (
        <div>
          <div className='flex place-content-between'>
            <div className='flex items-center'>
              <input id={i} type="checkbox" onChange={(e) => handleClick(e, item.task)} className='size-5 mr-2' checked={item.isChecked} />
              <label htmlFor={i}>{item.task}</label>
            </div>
            <svg onClick={() => handleDelete(item.task)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
            </svg>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default TodoList