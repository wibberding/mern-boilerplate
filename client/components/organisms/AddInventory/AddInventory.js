import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Field from 'react-bulma-companion/lib/Field';
import Label from 'react-bulma-companion/lib/Label';
import Control from 'react-bulma-companion/lib/Control';
import Help from 'react-bulma-companion/lib/Help';
import Button from 'react-bulma-companion/lib/Button';
import Input from 'react-bulma-companion/lib/Input';
import Box from 'react-bulma-companion/lib/Box';
import Column from 'react-bulma-companion/lib/Column';
import Columns from 'react-bulma-companion/lib/Columns';
import Textarea from 'react-bulma-companion/lib/Textarea';
import Checkbox from 'react-bulma-companion/lib/Checkbox';
import { attemptAddItem } from '_store/thunks/items';
import useKeyPress from '_hooks/useKeyPress';
// import { Block } from 'react-bulma-companion';

export default function AddInventory() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [withoutInventory, setWithoutInventory] = useState(false);
  const [canBeShipped, setCanBeShipped] = useState(false);
  const [price, setPrice] = useState(0);

  const handleAddItem = () => {
    if (name) {
      dispatch(attemptAddItem({ name, description, price, withoutInventory, canBeShipped }));
      setName('');
      setDescription('');
      setWithoutInventory(false);
      setPrice(0);
    }
  };

  useKeyPress('Enter', handleAddItem);

  const updateName = e => setName(e.target.value);
  const updateDescription = e => setDescription(e.target.value);
  const updateWithoutInventory = e => setWithoutInventory(e.target.value);
  const updateCanBeShipped = e => setCanBeShipped(e.target.value);
  const updatePrice = e => setPrice(e.target.value);

  return (
    <Columns>
      <Column size="half" offset="one-quarter">
        <Box>
          <Field>
            <Label>Name of Item</Label>
            <Control>
              <Input value={name} placeholder="Name" onChange={updateName} />
            </Control>
            <Help>This is the name that will appear in search results.</Help>
          </Field>
          <Field>
            <Label>Description</Label>
            <Textarea value={description} placeholder="Describe your item." rows="3" onChange={updateDescription} />
          </Field>
          <Field>
            <Label>Price</Label>
            <Control>
              <Input value={price} placeholder="Price" onChange={updatePrice} />
            </Control>
            <Help>How much will you charge for this item.</Help>
          </Field>
          <Field>
            <Checkbox>
              <input type="checkbox" onChange={updateWithoutInventory} />
              <span>This item can be ordered without inventory.</span>
            </Checkbox>
          </Field>
          <Field>
            <Checkbox>
              <input type="checkbox" onChange={updateCanBeShipped} />
              <span>This item can be shipped.</span>
            </Checkbox>
          </Field>
          <Button color="success" onClick={handleAddItem}>
            Add Item
          </Button>
        </Box>
      </Column>
    </Columns>

  );
}
