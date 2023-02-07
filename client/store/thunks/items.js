import { snakeToCamelCase } from 'json-style-converter/es5';
import R from 'ramda';

import { postItem, getItems } from '_api/items';
import { addItem, setItems } from '_store/actions/items';
// import { getTodos, postTodo, putToggleCompleteTodo, putTodo, deleteTodo } from '_api/todos';
// import { setTodos, addTodo, toggleCompleteTodo, updateTodo, removeTodo } from '_store/actions/todos';
import { dispatchError } from '_utils/api';
import { push } from 'redux-first-history';

//* * Seller Routes */
//* Get all seller items -Index

//* Create a new item - Create
export const attemptAddItem = data => dispatch =>
  postItem(data)
    .then(data => {
      const item = R.omit(['Id'], R.assoc('id', data.item._id, snakeToCamelCase(data.item)));

      dispatch(addItem(item));
      dispatch(push('/inventory'));
      return data.user;
    })
    .catch(dispatchError(dispatch));

//* Get the data for a specific item - Edit / Show

//* Update an item's data - Update
// export const attemptUpdateItem = (id, text) => dispatch =>
//   putItem({ id, text })
//     .then(data => {
//       dispatch(updateTodo({ id, text, updatedAt: data.todo.updated_at }));
//       return data;
//     })
//     .catch(dispatchError(dispatch));

// //* Remove an item from inventory - Destroy

export const attemptGetItems = () => dispatch =>
  getItems()
    .then(data => {
      const items = R.map(item =>
        R.omit(['Id'], R.assoc('id', item._id, snakeToCamelCase(item))), data.items);

      dispatch(setItems(items));
      return data.items;
    })
    .catch(dispatchError(dispatch));

// export const attemptAddTodo = text => dispatch =>
//   postTodo({ text })
//     .then(data => {
//       const todo = R.omit(['Id'], R.assoc('id', data.todo._id, snakeToCamelCase(data.todo)));

//       dispatch(addTodo(todo));
//       return data.user;
//     })
//     .catch(dispatchError(dispatch));

// export const attemptToggleCompleteTodo = id => dispatch =>
//   putToggleCompleteTodo({ id })
//     .then(data => {
//       dispatch(toggleCompleteTodo(id));
//       return data;
//     })
//     .catch(dispatchError(dispatch));

// export const attemptUpdateTodo = (id, text) => dispatch =>
//   putTodo({ id, text })
//     .then(data => {
//       dispatch(updateTodo({ id, text, updatedAt: data.todo.updated_at }));
//       return data;
//     })
//     .catch(dispatchError(dispatch));

// export const attemptDeleteTodo = id => dispatch =>
//   deleteTodo({ id })
//     .then(data => {
//       dispatch(removeTodo(id));
//       return data;
//     })
//     .catch(dispatchError(dispatch));
