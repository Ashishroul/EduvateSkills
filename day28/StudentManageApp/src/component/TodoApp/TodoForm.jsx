import React, { useEffect, useMemo, useState } from 'react'
import TodoList from './TodoList';

const TodoForm = () => {
    const savedData = JSON.parse(localStorage.getItem('works'))

    const [work, setWork] = useState({ task: '', isChecked:"" });
    const [worksArr, setWorksArr] = useState(savedData ? savedData : []);

    function handleChange(e) {
        const { value } = e.target;
        setWork((prev) => ({ ...prev, task: value }))
    }

    function handleClick() {
        if (work.task) setWorksArr((prev) => [...prev, work])
        setWork({ task: '', isChecked: null });
    }

    const checkedTask = useMemo(() => {
        const checkedArr =worksArr.filter(ele=>ele.isChecked);
        return checkedArr.length;
    }, [worksArr])

    useEffect(() => {
        localStorage.setItem('works', JSON.stringify(worksArr))
    }, [worksArr])

    return (
        <div className='w-2/3 max-h-2/3 bg-[#f0f0f0] p-10 rounded-xl overflow-auto text-2xl'>
            <div className='flex place-content-between'>
                <h1 className=' font-extrabold'>Todo App</h1>
                <p>Completed: {checkedTask}/{savedData ? savedData.length : null}</p>
            </div>
            <div>
                <form action="" className='flex p-1 border-2 border-white'>
                    <button className='flex items-center border-r-2 border-white text-5xl pb-2 pr-2' onClick={handleClick}>+</button>
                    <input placeholder='add a todo...' className=' w-full pl-2 focus:outline-0' type="text" onChange={handleChange} value={work.task} />
                </form>
            </div>
            <TodoList lists={worksArr} setWorksArr={setWorksArr} />
        </div>
    )
}

export default TodoForm