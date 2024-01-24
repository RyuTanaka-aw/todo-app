import './App.css';
import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // 入力した値を取得
    const name = todoNameRef.current.value;

    setTodos((prevTodos) => {
      // スプレッド構文で現在の配列を展開し、新たに追加するタスクを最後尾に追加
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    })
    todoNameRef.current.value = null;
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }
  
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
