import { makeObservable, computed, observable, action } from 'mobx';

class Store {
    tasks = [
        {id: 0, title: "Go to shop", done: false},
        {id: 1, title: "Отнести пуховик в химчистку", done: true},
        {id: 2, title: "Buy presents for Christmas to parents", done: false}
    ]


    constructor() {
        makeObservable(this, {
            tasks: observable,
            activeTasks: computed,
            sortedTasks: computed,
            addTask: action,
            deleteTask: action,
            doneTask: action,
            showAll: action,
            showActive: action,
            showCompleted: action,
            // getVisiblePost: action
        })
    }

    setTasks(payload) {
        this.tasks = payload;
    }


    get activeTasks() {
        return this.tasks.filter(task => !task.done).length;
    }
    get sortedTasks() {
        const tasks = this.tasks;
        return tasks
        .slice()
        .sort ((a,b) => a.done === b.done ? 0 : a.done ? 1 : -1);
    }
    addTask(task) {
        let tasks = this.tasks;
    
        tasks.push({
          id: this.tasks.length || 0,
          title: task,
          done: false
        });
    
        this.setTasks(tasks);
    }

    doneTask(id) {
        let tasks = this.tasks;
        const index = tasks.map(task => task.id).indexOf(id);
        tasks[index].done = true;
        this.setTasks(tasks);
    }
    
    deleteTask(id) {
        this.setTasks(this.tasks.filter(item => item.id !== id));
    }

    showAll() {
        console.log('пропсы сработали ол');
        return this.tasks;
   }

    showActive() {
        console.log('пропсы сработали актив');
        return this.tasks.filter(task => !task.done);    
           
   }

    showCompleted() {
        console.log('пропсы сработали компитид');
        return this.tasks.filter(task => task.done);      
   }

    getVisiblePost(filter) {
        
        if (filter === 'All') {
           return this.filteredList = this.tasks;
        }
        if (filter === 'Active') {
            return this.filteredList = this.setTasks(this.tasks.filter(task => !task.done)); 
        }
        if (filter === 'Completed') {
            return this.tasks.filter(task => task.done);
        }
        console.log('filter')
   }

}


export default new Store();