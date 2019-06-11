import React from 'react';

class TodoList extends React.Component {
    renderList() {
        if (!this.props.list.length) {
            return (<div>No item found..</div>)
        }
        return (
            <ul>
                { this.props.list.map((item, index) => {
                    const btnText = item.completed ? 'Done' : 'TBD'
                    return (
                        <li key={index}>
                            <span>{item.todo}</span>
                            <button className={btnText} onClick={() => this.props.toggleStatus(index)}>{btnText}</button>
                        </li>
                    );
                }) }
            </ul>
        );
    }
    render() {
        console.log('render- todoList');
        return (
            <div className="todoList">
                <h2>List component</h2>
                { this.renderList() }
            </div>
        );
    }
}

export default TodoList;