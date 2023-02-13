import React from 'react';
import Card from 'react-bulma-companion/lib/Card';
import Content from 'react-bulma-companion/lib/Content';
import Input from 'react-bulma-companion/lib/Input';
import PropTypes from 'prop-types';

export default function PhoneNumber(props) {
  return (
    <Card className="signup-card">
      <Card.Header>
        <Card.HeaderTitle centered>Phone Number</Card.HeaderTitle>
      </Card.Header>
      <Card.Content>
        <Content>
          <div>
            <p>{props.phone}</p>
            <Input value={props.phone} onChange={e => props.setPhone(e.target.value)} />
          </div>
        </Content>
      </Card.Content>
    </Card>
  );
}

PhoneNumber.propTypes = {
  phone: PropTypes.string,
  setPhone: PropTypes.func,
};

PhoneNumber.defaultProps = {
  phone: '',
  setPhone: null,
};
