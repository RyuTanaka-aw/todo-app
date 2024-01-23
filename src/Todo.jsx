import React from 'react'

const todo = ({todo}) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} readOnly />
      </label>
      {todo.name}
    </div>
  )
}

export default todo