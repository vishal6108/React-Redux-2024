import React from 'react'
import logo from '../assets/logo.png'
import CustomButton from './custom_btn'
function NotStartedProject({onAddProject}) {
  return (
    <div className='mt-24 text-center w-2/4'>
        <img 
        src={logo}
        alt='nothing to show'
        className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500my-4'>Not Started Project</h2>
        <p className='text-stone-400 mb-4'>Select the project or start a new one.</p>
        <p className='mt-8'>
            <CustomButton onClick={onAddProject}>Create new project</CustomButton>
        </p>
    </div>
  )
}

export default NotStartedProject