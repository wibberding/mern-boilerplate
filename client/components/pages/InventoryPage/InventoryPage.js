import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { push } from 'redux-first-history';
import { attemptGetItems } from '_store/thunks/items';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';
import Button from 'react-bulma-companion/lib/Button';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';
import InventoryList from '../../organisms/InventoryList/InventoryList';

import styles from './styles.module.css';

export default function InventoryPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    } else {
      dispatch(attemptGetItems())
        .catch(R.identity)
        .then(() => setLoading(false));
    }
  }, [dispatch, user]);

  const navigate = useNavigate();
  const routeChange = (event) => {
    const { path } = event.target.dataset;
    navigate(path);
  };

  return !loading && (
    <div className={styles.root}>
      <Section>
        <Container>
          <Title size="1">
            Inventory
          </Title>
          <Button color="success" onClick={routeChange} data-path="/add_inventory">
            Add Item
          </Button>
          <Columns>
            <Column size="8" offset="2" className="has-text-left">
              <InventoryList />
            </Column>
          </Columns>
        </Container>
      </Section>
    </div>
  );
}
