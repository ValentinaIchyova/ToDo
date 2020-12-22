import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import TaskFilter from './components/TaskFilter';
import store from './store';
import { observer } from 'mobx-react';

class App extends React.Component {
  
  render() {
    const {sortedTasks, activeTasks} = store;
    // const {filter} = store
    return(
      <div className='App'>
        <h1 className='top'>Active tasks: {activeTasks}</h1>
        {sortedTasks.map (task => (
          <Task 
          // getVisiblePost={store.getVisiblePost()}
          //     filter={filter}         
                
                doneTask={ () => store.doneTask(task.id) } 
                deleteTask={ () => store.deleteTask(task.id) }
                task={task} key={task.id} />
        ))}
        <TaskInput addTask={v => store.addTask(v)}/>
        <TaskFilter 
                // filter={filter} getVisiblePost={() => store.getVisiblePost}
                showActive={() => store.showActive()}
                showCompleted={() => store.showCompleted()}
                  showAll={() => store.showAll()}/>
      </div>
    ) 

  }
  
}

export default observer(App);
