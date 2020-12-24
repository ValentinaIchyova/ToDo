import React from 'react';
import { inject, observer } from 'mobx-react';

const TaskFilter = inject('Store')(observer(props => {
    const Store = props.Store;
   
    return (
        <div className="buttons-field">
            <button className="buttons" onClick={() => Store.updateFilter('All')}>All</button>
            <button className="buttons" onClick={() => Store.updateFilter('Active')}>Active</button>
            <button className="buttons" onClick={() => Store.updateFilter('Completed')}>Completed</button>
        </div>
        
    )
}));



export default TaskFilter;