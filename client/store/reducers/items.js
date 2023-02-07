import update from 'immutability-helper';
import R from 'ramda';

import {
  ADD_ITEM, SET_ITEMS, REMOVE_ITEM,
} from '_store/actions/items';

// import { REMOVE_ITEM } from '../actions/items';

// import { LOGOUT_USER } from '_store/actions/user';

export function item(state = {
  completed: false,
}, action) {
  switch (action.type) {
    case ADD_ITEM:
      return update(state, {
        id: { $set: action.id },
        name: { $set: action.name },
        description: { $set: action.description },
        price: { $set: action.price },
        withoutInventory: { $set: action.withoutInventory },
        canBeShipped: { $set: action.canBeShipped },
        createdAt: { $set: action.createdAt },
      });
    default:
      return state;
  }
}

//* I believe this adjusts the placement of the item in the list to the right place.
export default function items(state = [], action) {
  const index = R.findIndex(R.propEq('id', action.id), state);
  // const updatedAtIndex = { $splice: [[index, 1, item(state[index], action)]] };

  switch (action.type) {
    case SET_ITEMS:
      return update(state, { $set: action.items });
    case ADD_ITEM:
      return update(state, { $push: [item(undefined, action)] });
    case REMOVE_ITEM:
      return update(state, { $splice: [[index, 1]] });
    // case TOGGLE_COMPLETE_TODO:
    //   return update(state, updatedAtIndex);
    // case UPDATE_TODO:
    //   return update(state, updatedAtIndex);
    // case LOGOUT_USER:
    //   return [];
    default:
      return state;
  }
}
