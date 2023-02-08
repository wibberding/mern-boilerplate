import { snakeToCamelCase } from 'json-style-converter/es5';
import R from 'ramda';
import { postItem, getItems, deleteItem, putItem } from '_api/items';
import { addItem, setItems, removeItem, updateItem } from '_store/actions/items';
import { dispatchError } from '_utils/api';
import { push } from 'redux-first-history';

//* * Seller Routes */
//* Get all seller items -Index
export const attemptGetItems = () => dispatch =>
  getItems()
    .then(data => {
      const items = R.map(item =>
        R.omit(['Id'], R.assoc('id', item._id, snakeToCamelCase(item))), data.items);

      dispatch(setItems(items));
      return data.items;
    })
    .catch(dispatchError(dispatch));

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

export const attemptDeleteItem = id => dispatch =>
  deleteItem({ id })
    .then(data => {
      dispatch(removeItem(id));
      return data;
    })
    .catch(dispatchError(dispatch));

//* Update an item's data - Update
export const attemptUpdateItem = (item) => dispatch =>
  putItem(item)
    .then(data => {
      const { item } = data;
      item.id = item._id;
      dispatch(updateItem(item));
      dispatch(push('/inventory'));
      return data;
    })
    .catch(dispatchError(dispatch));

// //* Remove an item from inventory - Destroy

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
