import React from 'react';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';
import AddInventory from '_components/organisms/AddInventory';

import styles from './styles.module.css';

export default function AddInventoryPage() {
  return (
    <div className={styles.root}>
      <Section>
        <Container>
          <Title size="1">
            Add Item For Sale
          </Title>
        </Container>
        <AddInventory />
      </Section>
    </div>
  );
}
