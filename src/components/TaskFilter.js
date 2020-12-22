import React from 'react';


const TaskFilter = (props) => {

        
    return (
        <div className="">
            <button onClick={props.showAll}>All</button>
            <button onClick={props.showActive}>Active</button>
            <button onClick={props.showCompleted}>Completed</button>
        </div>
        
    )
}

export default TaskFilter;