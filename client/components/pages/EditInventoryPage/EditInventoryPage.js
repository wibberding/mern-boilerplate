import React from 'react';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';
import InventoryForm from '_components/organisms/InventoryForm';

import styles from './styles.module.css';

export default function EditInventoryPage() {
  return (
    <div className={styles.root}>
      <Section>
        <Container>
          <Title size="1">
            Edit Inventory Item
          </Title>
        </Container>
        <InventoryForm type="edit" />
      </Section>
    </div>
  );
}
