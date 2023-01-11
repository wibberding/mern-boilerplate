import React from 'react';

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
