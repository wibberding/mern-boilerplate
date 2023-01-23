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
            Home Page Buyer
          </Title>
          <input type="text" placeholder="Search for items, or seller's near you." />
          <br />
          <br />

          <Columns className="">
            <Column size="2">
              <Button color="success" onClick={routeChange} data-path="/favorite_suppliers" fullwidth>
                Favorite Suppliers
              </Button>
            </Column>
            <Column size="2">
              <Button color="success" onClick={routeChange} data-path="/rate/seller" fullwidth>
                Rate Sellers
              </Button>
            </Column>
          </Columns>
        </Container>
      </Section>
    </div>
  );
}
