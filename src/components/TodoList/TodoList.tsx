import React, { useEffect } from 'react';
import useTodoStore from '@/stores/todo';

const TodoList = () => {
  const { todos, fetchTodos } = useTodoStore();

  useEffect(() => {
    fetchTodos(); // 加载数据
  }, [fetchTodos]);

  return (
    <div>
      <h1>Stories:</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.story_id}>{todo.story_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;