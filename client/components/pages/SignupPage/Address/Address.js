import React from 'react';
import Card from 'react-bulma-companion/lib/Card';
import Content from 'react-bulma-companion/lib/Content';
import PropTypes from 'prop-types';
import Label from 'react-bulma-companion/lib/Label';
import Input from 'react-bulma-companion/lib/Input';

export default function Address(props) {
  return (
    <Card className="signup-card">
      <Card.Header>
        <Card.HeaderTitle centered>Address</Card.HeaderTitle>
      </Card.Header>
      <Card.Content>
        <Content>
          <Label>Street: </Label>
          <Input value={props.address.street} onChange={e => props.setAddress.street(e.target.value)} />
          <Label>Unit: </Label>
          <Input value={props.address.unit} onChange={e => props.setAddress.unit(e.target.value)} />
          <Label>City: </Label>
          <Input value={props.address.city} onChange={e => props.setAddress.city(e.target.value)} />
          <Label>State: </Label>
          <Input value={props.address.state} onChange={e => props.setAddress.state(e.target.value)} />
          <Label>Zip: </Label>
          <Input value={props.address.zip} onChange={e => props.setAddress.zip(e.target.value)} />
        </Content>
      </Card.Content>
    </Card>
  );
}

Address.propTypes = {
  address: PropTypes.object.isRequired,
  setAddress: PropTypes.object.isRequired,
};

Address.defaultProps = {
};
