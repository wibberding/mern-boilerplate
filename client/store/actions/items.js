export const ADD_ITEM = 'ADD_ITEM';
export const SET_ITEMS = 'SET_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';
// export const ADD_TODO = 'ADD_TODO';
// export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
// export const UPDATE_TODO = 'UPDATE_TODO';
// export const INCREMENT_TODO_ID = 'INCREMENT_TODO_ID';

export const addItem = ({ id, name, description, price, withoutInventory, canBeShipped, createdAt }) => ({
  type: ADD_ITEM,
  createdAt,
  id,
  name,
  description,
  price,
  withoutInventory,
  canBeShipped,
});
export const setItems = items => ({
  type: SET_ITEMS,
  items,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id,
});

// export const addTodo = ({ id, text, createdAt }) => ({
//   type: ADD_TODO,
//   createdAt,
//   id,
//   text,
// });

// export const toggleCompleteTodo = id => ({
//   type: TOGGLE_COMPLETE_TODO,
//   id,
// });

// export const updateTodo = ({ id, text, updatedAt }) => ({
//   type: UPDATE_TODO,
//   updatedAt,
//   id,
//   text,
// });
