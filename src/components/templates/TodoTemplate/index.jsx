import React, { useState, useEffect } from 'react';
import './index.css';
import { INITIAL_TODO_LIST } from '../../../consts';

export const TodoTemplate = () => {
  const [todoList, setTodoList] = useState(INITIAL_TODO_LIST);
  const [addInputValue, setAddInputValue] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleAddInputValue = (e) => setAddInputValue(e.target.value);
  const handleSearchInputValue = (e) => setSearchInputValue(e.target.value);

  const handleAddTodoList = (e) => {
    if (e.key === 'Enter' && addInputValue !== '') {
      const uniqueId = todoList.length + 1;
      console.log(addInputValue);
      const todo = {
        id: uniqueId,
        title: addInputValue,
      };
      setTodoList([...todoList, todo]);
      setAddInputValue('');
    }
  };

  const handleSearchTodoList = () => {
    return todoList.filter((todo) => {
      const regexp = new RegExp('^' + searchInputValue, 'i');
      return todo.title.match(regexp);
    });
  };

  const showTodoList = handleSearchTodoList();

  const handleDeleteClick = (id) => {
    const newTodoList = todoList.filter((todo) => id !== todo.id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Todo List</h1>
        <section className="common">
          <h2 className="subtitle">ADD TODO</h2>
          <input
            type="text"
            className="addInput"
            placeholder="New Todo"
            value={addInputValue}
            onChange={handleAddInputValue}
            onKeyDown={handleAddTodoList}
          />
        </section>
        <section className="common">
          <input
            type="text"
            className="searchInput"
            placeholder="Search Keyword"
            value={searchInputValue}
            onChange={handleSearchInputValue}
          />
        </section>
        <section className="common">
          {showTodoList.length > 0 && (
            <ul className="list">
              {showTodoList.map((todo) => (
                <li class="todo" key={todo.id}>
                  <span class="task">{todo.title}</span>
                  <div
                    class="trash_wrapper"
                    onClick={() => handleDeleteClick(todo.id)}
                  >
                    <div class="trash"></div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
};
