import React, {useState} from 'react'
import TodoForm from './TodoForm'

function Todo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

  return TodoList.map((todo, index) =>(
    <div className='{todo.isComplete ? 'todo-row complete' >
      
    </div>
  ))
}

export default Todo
