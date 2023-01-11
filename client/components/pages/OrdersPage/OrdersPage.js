import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';

import styles from './styles.module.css';

export default function OrdersPage() {
  return (
    <div className={styles.root}>
      <Section>
        <Container>
          <Title size="1">
            Orders
          </Title>
        </Container>
      </Section>
    </div>
  );
}
