import React from 'react';
import Card from 'react-bulma-companion/lib/Card';
import Content from 'react-bulma-companion/lib/Content';

export default function SellerInfo() {
  return (
    <Card className="signup-card">
      <Card.Header>
        <Card.HeaderTitle centered>Seller Info</Card.HeaderTitle>
      </Card.Header>
      <Card.Content>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </Content>
      </Card.Content>
    </Card>
  );
}
