import React from 'react'
import LinkBar from './LinkBar'
import AddTodo from './AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div className="container-fluid">
        <h2>Todo List</h2>
        <AddTodo />
        <LinkBar />
        <VisibleTodoList />
        
    </div>
)

export default App