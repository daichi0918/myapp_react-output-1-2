import React from 'react';

export const List = (props) => {
  const { todoList, handleDeleteTodo } = props;
  return (
    todoList.length > 0 && (
      <ul className="list">
        {todoList.map((todo) => (
          <li class="todo" key={todo.id}>
            <span class="task">{todo.title}</span>
            <div
              class="trash_wrapper"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <div class="trash"></div>
            </div>
          </li>
        ))}
      </ul>
    )
  );
};
