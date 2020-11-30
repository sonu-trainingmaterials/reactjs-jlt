import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
    <div className="row" style={{marginTop:"20px"}}>
        <div className="col-md-6 col-md-offset-3">
            <ul className="list-group">
                {todos.map((todo, index) => (
                    <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
                ))}
            </ul>
        </div>
    </div>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            //id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList