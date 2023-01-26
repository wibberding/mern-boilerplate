import React from 'react';
import { useNavigate } from 'react-router-dom';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';
import Button from 'react-bulma-companion/lib/Button';

import styles from './styles.module.css';

export default function InventoryPage() {
  const navigate = useNavigate();
  const routeChange = (event) => {
    const { path } = event.target.dataset;
    navigate(path);
  };

  return (
    <div className={styles.root}>
      <Section>
        <Container>
          <Title size="1">
            Inventory
          </Title>
          <Button color="success" onClick={routeChange} data-path="/add_inventory">
            Add Item
          </Button>
        </Container>
      </Section>
    </div>
  );
}
