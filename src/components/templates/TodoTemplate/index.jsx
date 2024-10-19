import React, { useState, useEffect } from 'react';
import './index.css';
import { INITIAL_TODO_LIST } from '../../../consts';
import { InputForm } from '../../atoms/InputForm';
import { List } from '../../organisms/List';

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

  const handleDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => id !== todo.id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Todo List</h1>
        <section className="common">
          <h2 className="subtitle">ADD TODO</h2>
          <InputForm
            className="addInput"
            placeholder="New Todo"
            value={addInputValue}
            onChange={handleAddInputValue}
            onKeyDown={handleAddTodoList}
          />
        </section>
        <section className="common">
          <InputForm
            className="searchInput"
            placeholder="Search Keyword"
            value={searchInputValue}
            onChange={handleSearchInputValue}
          />
        </section>
        <section className="common">
          <List todoList={showTodoList} handleDeleteTodo={handleDeleteTodo} />
        </section>
      </div>
    </>
  );
};
