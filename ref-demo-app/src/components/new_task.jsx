import React, { useState } from 'react'

function NewTask({onAdd,onDelete}) {
  const [taskEntry,setTaskEntry] = useState('');

  function handleChange(e){
    setTaskEntry(e.target.value)
  }

  function handleClick(){
    if(taskEntry.trim() === ''){
        return
    }
    onAdd(taskEntry)
    setTaskEntry('')
  }
  return (
    <div className='flex items-center gap-4'>
    <input type='text' onChange={handleChange} value={taskEntry} className='w-64 px-2 py-1 rounded-sm bg-stone-200'/>
    <button onClick={handleClick} className='text-stone-700 hover:text-stone-900'>Add Task</button>
    </div>
  )
}

export default NewTask