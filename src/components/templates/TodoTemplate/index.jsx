import React, { useState, useEffect } from 'react';
import './index.css';
import { INITIAL_TODO_LIST } from '../../../consts';
import { InputForm } from '../../atoms/InputForm';
import { List } from '../../organisms/List';
import { useTodo } from '../../../useTodo';

export const TodoTemplate = () => {
  const {
    showTodoList,
    addInputValue,
    handleAddInputValue,
    handleAddTodoList,
    searchInputValue,
    handleSearchInputValue,
    handleDeleteTodo,
  } = useTodo();

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
