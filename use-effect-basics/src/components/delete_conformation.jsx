import { useEffect } from 'react';
import ProgressBar from './progress_bar';
const TIMER = 3000;
function DeleteConfirmation({onConfirm,onCancel}) {

  useEffect(() => {
    console.log('TIMER SET');
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      console.log('Cleaning up timer');
      clearTimeout(timer);
    };
  }, [onConfirm]);
  return (
    <div id='delete-confirmation'>
        <h2>Are you sure?</h2>
        <p>Do you really want to remove this place</p>
        <div id='confirmation-actions'>
            <button onClick={onCancel} className='button-text'>No</button>
            <button onClick={onConfirm} className='button'>Yes</button>
        </div>
        <ProgressBar timer={TIMER}/>
    </div>
  )
}

export default DeleteConfirmation