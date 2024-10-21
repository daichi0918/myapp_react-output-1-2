import { INITIAL_TODO_LIST } from './consts';
import React, { useState, useEffect } from 'react';

export const useTodo = () => {
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

  return {
    showTodoList,
    addInputValue,
    handleAddInputValue,
    handleAddTodoList,
    searchInputValue,
    handleSearchInputValue,
    showTodoList,
    handleDeleteTodo,
  };
};
