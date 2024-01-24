import './App.css';
import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: 'Todo1', completed: false },
    { id: uuidv4(), name: 'Todo2', completed: false },
  ]);

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

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}

export default App;
