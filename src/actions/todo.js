import {
  ADD_TODO,
  CLEAR_TODOS,
} from '../constants/actionTypes';

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    content,
  };
};

export const clearTodos = () => {
  return {
    type: CLEAR_TODOS,
  };
};
