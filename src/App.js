import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import TaskFilter from './components/TaskFilter';
import store from './store';
import { observer } from 'mobx-react';

class App extends React.Component {
  
  render() {
    const {getVisibleTask, activeTasks} = store;
    
    return(
      <div className='App'>
        <h1 className='top'>Active tasks: {activeTasks}</h1>
        {getVisibleTask.map (task => (
          <Task 
                doneTask={ () => store.doneTask(task.id) } 
                deleteTask={ () => store.deleteTask(task.id) }
                task={task}
                key={task.id} />
          ))}
          <TaskInput addTask={v => store.addTask(v)}/>
          <TaskFilter  />
      </div>
    ) 
  }
}

export default observer(App);