import { computed, observable, action, makeObservable } from 'mobx';

class Store {
    
    tasks = [
        {id: 0, title: "To wash the car", done: false},
        {id: 1, title: "Take the down jacket to the dry cleaner", done: false},
        {id: 2, title: "Buy presents for Christmas to parents", done: true}
    ]

    idForTask = 3

    filter = 'All'

    constructor() {
        makeObservable(this, {
            tasks: observable,
            idForTask: observable,
            filter: observable,
            activeTasks: computed,
            getVisibleTask: computed,
            addTask: action,
            deleteTask: action,
            doneTask: action,
            updateFilter: action
        })
    }

    setTasks(payload) {
        this.tasks = payload;
    }


    get activeTasks() {
        return this.tasks.filter(task => !task.done).length;
    }
   
    get getVisibleTask() {
            
        if (this.filter === 'All') {
        return this.tasks;
        }
        else if (this.filter === 'Active') {
            return this.tasks.filter(task => !task.done); 
        }
        else if (this.filter === 'Completed') {
            return this.tasks.filter(task => task.done);
        }
        
        return this.tasks
}

    addTask(task) {
        let tasks = this.tasks;
    
        tasks.push({
          id: this.idForTask,
          title: task,
          done: false
        });
    
        this.setTasks(tasks);
        this.idForTask++;
    }

    doneTask(id) {
        let tasks = this.tasks;
        const index = tasks.map(task => task.id).indexOf(id);
        tasks[index].done = true;
        this.setTasks(tasks);
    }
    
    deleteTask(id) {
        // this.setTasks(this.tasks.filter(item => item.id !== id));
        const index = this.tasks.findIndex(item => item.id === id);
        this.tasks.splice(index, 1);
    }

   
    updateFilter = filter => {
            this.filter = filter;
    }
   
}


export default new Store();