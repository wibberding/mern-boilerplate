import React from 'react';
import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';
import Button from 'react-bulma-companion/lib/Button';
import { useNavigate } from 'react-router-dom';
import useKeyPress from '_hooks/useKeyPress';
import styles from './styles.module.css';

export default function OrdersPage() {
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
            Orders
          </Title>
          <Button color="success" onClick={routeChange} data-path="/rate/buyer">
            Rate a Buyer
          </Button>
        </Container>
      </Section>
    </div>
  );
}
