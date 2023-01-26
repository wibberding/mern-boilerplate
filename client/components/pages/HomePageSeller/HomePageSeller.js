import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { push } from 'redux-first-history';
import R from 'ramda';
import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';
import Button from 'react-bulma-companion/lib/Button';
import Column from 'react-bulma-companion/lib/Column';
import Columns from 'react-bulma-companion/lib/Columns';
import useKeyPress from '_hooks/useKeyPress';

import styles from './styles.module.css';

export default function HomePageBuyer() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }
  }, [dispatch, user]);

  const navigate = useNavigate();
  const routeChange = (event) => {
    const { path } = event.target.dataset;
    navigate(path);
  };

  useKeyPress('Enter', routeChange);

  return (
    <div className={styles.root}>
      <Section>
        <Container>
          <Title size="1">
            Home Page Seller
          </Title>
          <p>What would you like to do?</p>
          <Columns className="">
            <Column size="2">
              <Button color="success" onClick={routeChange} data-path="/inventory" fullwidth>
                Manage Inventory
              </Button>
            </Column>
            <Column size="2">
              <Button color="success" onClick={routeChange} data-path="/delivery_methods" fullwidth>
                Manage Delivery methods
              </Button>
            </Column>
            <Column size="2">
              <Button color="success" onClick={routeChange} data-path="/orders" fullwidth>
                Orders
              </Button>
            </Column>
          </Columns>
        </Container>
      </Section>
      <Section>
        <p>Another section</p>
      </Section>
    </div>
  );
}
