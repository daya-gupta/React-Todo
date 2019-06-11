import React from 'react';

class TodoEdit extends React.Component {
    state = { todo: '' }

    updateTodoItem = (e) => {
        const todo = e.target.value;
        this.setState({ todo });
    }

    addToList = () => {
        const todo = this.state.todo;
        this.setState({ todo: '' });
        this.props.addToList(todo);
    }

    render() {
        console.log('render- todoEdit');
        return (
            <div className="todoEdit">
                <h2>Edit component</h2>
                <input type="text" placeholder="todo item" value={this.state.todo} onChange={this.updateTodoItem} />
                <button onClick={this.addToList}>Add to list</button>    
            </div>
        );
    }
}

export default TodoEdit;
