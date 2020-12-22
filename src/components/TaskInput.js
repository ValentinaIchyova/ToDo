import React from 'react';

class TaskInput extends React.Component {
    constructor(props) {
        super();

        this.state = {
            input: ''
        };
    }

    addTask = () => {
        const { input } = this.state;
        if (input) {
            this.props.addTask(input);
            this.setState({ input: ''})
        }
       
    }

    inputChange = event => {
        this.setState ({ input: event.target.value })
    }

    handleEnter = event => {
        if (event.key === 'Enter') {
            this.addTask();
        }
    }

    render() {
        const { input } = this.state;
        return (
            <div className="task-input">
                <input onKeyPress={this.handleEnter} 
                onChange={this.inputChange} 
                value={input}
                placeholder={'What needs to be done?'}></input>
                <button onClick={this.addTask}>ADD</button>
            </div>
        )
    }

}

export default TaskInput;

    