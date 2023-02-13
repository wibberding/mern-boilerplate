import React from 'react';
import Card from 'react-bulma-companion/lib/Card';
import Content from 'react-bulma-companion/lib/Content';
import PropTypes from 'prop-types';
import Input from 'react-bulma-companion/lib/Input';

export default function SellerInfo(props) {
  return (
    <Card className="signup-card">
      <Card.Header>
        <Card.HeaderTitle centered>Seller Info</Card.HeaderTitle>
      </Card.Header>
      <Card.Content>
        <Content>
          <p>Select a store name where people can find you on the web. It will be located at:</p>
          <p><strong>GrubVine.com/store/{props.storeName}</strong></p>
          <Input value={props.storeName} onChange={e => props.setStoreName(e.target.value)} />
        </Content>
      </Card.Content>
    </Card>
  );
}

SellerInfo.propTypes = {
  storeName: PropTypes.string.isRequired,
  setStoreName: PropTypes.func.isRequired,
};

SellerInfo.defaultProps = {
};
