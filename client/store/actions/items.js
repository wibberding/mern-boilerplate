export const ADD_ITEM = 'ADD_ITEM';
export const SET_ITEMS = 'SET_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
// export const ADD_TODO = 'ADD_TODO';
// export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
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

export const updateItem = (item) => ({
  type: UPDATE_ITEM,
  createdAt: item.createdAt,
  id: item.id,
  name: item.name,
  description: item.description,
  price: item.price,
  withoutInventory: item.withoutInventory,
  canBeShipped: item.canBeShipped,
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
