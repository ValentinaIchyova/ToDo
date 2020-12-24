import React from 'react';

const Task = ({task, ...props}) => {
   
    const ActionBtn = () => (
        <div className='action-btn'>{!task.done 
            ? <p onClick={props.doneTask}>✔️</p> 
            : <p onClick={props.deleteTask}>❌</p>}
        </div>
    )
    
    const Color = 'task' + (task.done ? '-done' : '');

    return (
        <div className={Color}>
            <p>{task.title}</p>
            <ActionBtn />
        </div>
    )
}

export default Task;