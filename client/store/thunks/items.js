import { snakeToCamelCase } from 'json-style-converter/es5';
import R from 'ramda';

import { postItem } from '_api/items';
import { addItem } from '_store/actions/items';
import { getTodos, postTodo, putToggleCompleteTodo, putTodo, deleteTodo } from '_api/todos';
import { setTodos, addTodo, toggleCompleteTodo, updateTodo, removeTodo } from '_store/actions/todos';

import { dispatchError } from '_utils/api';

//* * Seller Routes */
//* Get all seller items -Index

//* Create a new item - Create
export const attemptAddItem = data => dispatch =>
  postItem()
    .then(data => {
      const item = R.omit(['Id'], R.assoc('id', data.item._id, snakeToCamelCase(data.item)));

      dispatch(addItem(item));
      return data.user;
    })
    .catch(dispatchError(dispatch));

//* Get the data for a specific item - Edit / Show

//* Update an item's data - Update

//* Remove an item from inventory - Destroy

export const attemptGetTodos = () => dispatch =>
  getTodos()
    .then(data => {
      const todos = R.map(todo =>
        R.omit(['Id'], R.assoc('id', todo._id, snakeToCamelCase(todo))), data.todos);

      dispatch(setTodos(todos));
      return data.todos;
    })
    .catch(dispatchError(dispatch));

export const attemptAddTodo = text => dispatch =>
  postTodo({ text })
    .then(data => {
      const todo = R.omit(['Id'], R.assoc('id', data.todo._id, snakeToCamelCase(data.todo)));

      dispatch(addTodo(todo));
      return data.user;
    })
    .catch(dispatchError(dispatch));

export const attemptToggleCompleteTodo = id => dispatch =>
  putToggleCompleteTodo({ id })
    .then(data => {
      dispatch(toggleCompleteTodo(id));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptUpdateTodo = (id, text) => dispatch =>
  putTodo({ id, text })
    .then(data => {
      dispatch(updateTodo({ id, text, updatedAt: data.todo.updated_at }));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptDeleteTodo = id => dispatch =>
  deleteTodo({ id })
    .then(data => {
      dispatch(removeTodo(id));
      return data;
    })
    .catch(dispatchError(dispatch));
