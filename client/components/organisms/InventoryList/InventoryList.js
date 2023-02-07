import React from 'react';
import { useSelector } from 'react-redux';
import R from 'ramda';

import Item from '_components/molecules/Item';

export default function InventoryList() {
  const { items } = useSelector(R.pick(['items']));

  return (
    <ul className="todo-list">
      {R.reverse(items).map(item => <Item key={item.id} {...item} />)}
    </ul>
  );
}
