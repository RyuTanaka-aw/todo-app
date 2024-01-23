import './App.css';
import React, { useState, useRef } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Todo1', completed: false },
    { id: 2, name: 'Todo2', completed: false },
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // 入力した値を取得
    const name = todoNameRef.current.value;

    // idを現在の配列の数+1で設定
    const id = todos.length + 1;

    setTodos((prevTodos) => {
      // スプレッド構文で現在の配列を展開し、新たに追加するタスクを最後尾に追加
      return [...prevTodos, { id: id, name: name, completed: false }];
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
