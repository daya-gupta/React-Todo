import React from 'react';
import TodoEdit from './TodoEdit'
import TodoList from './TodoList'
import './todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            salutation: 'Hello',
            list: []
        }
    }
    addToList = (todo) => {
        const list = [...this.state.list];
        list.push({ todo, completed: false });
        this.setState({ list });
    }
    toggleStatus = (index) => {
        const list = [...this.state.list];
        list[index].completed = !list[index].completed;
        this.setState({ list });
    }
    render() {
        return (
            <div className="todo">
                <h1>{this.state.salutation} {this.props.user || 'user'}, this is your Todo list!!</h1>
                <TodoEdit addToList={this.addToList} />
                <TodoList list={this.state.list} toggleStatus={this.toggleStatus} />
            </div>
        );
    }
}

export default Todo;
